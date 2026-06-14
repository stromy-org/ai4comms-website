#!/usr/bin/env bash
set -euo pipefail

# ── Baked-in values (from Copier template) ─────────────────
PROJECT="${PROJECT:-ai4comms-website}"
OWNER="${OWNER:-stromy-org}"
REPO="${REPO:-ai4comms-website}"
RG="${RG:-rg-ai4comms-website}"
REGION="${REGION:-westeurope}"

# ── Helpers ────────────────────────────────────────────────
info()  { printf '\033[0;34m[INFO]\033[0m  %s\n' "$1"; }
ok()    { printf '\033[0;32m[OK]\033[0m    %s\n' "$1"; }
warn()  { printf '\033[0;33m[WARN]\033[0m  %s\n' "$1"; }
die()   { printf '\033[0;31m[ERR]\033[0m   %s\n' "$1" >&2; exit 1; }

# ── Phase 0: Prerequisites ────────────────────────────────
check_prerequisites() {
  info "Checking prerequisites..."
  command -v az >/dev/null 2>&1 || die "Azure CLI (az) not found. Install: https://aka.ms/installazurecli"
  command -v gh >/dev/null 2>&1 || die "GitHub CLI (gh) not found. Install: https://cli.github.com"

  az account show >/dev/null 2>&1 || die "Not logged in to Azure. Run: az login"
  gh auth status >/dev/null 2>&1 || die "Not logged in to GitHub. Run: gh auth login"

  gh repo view "${OWNER}/${REPO}" >/dev/null 2>&1 \
    || die "GitHub repo ${OWNER}/${REPO} not found. Create it first."

  ok "Prerequisites met"
}

# ── Phase 1: Resource Group ───────────────────────────────
create_resource_group() {
  info "Resource group: ${RG}"
  if az group show --name "$RG" >/dev/null 2>&1; then
    ok "Resource group ${RG} already exists"
  else
    az group create --name "$RG" --location "$REGION" -o none
    ok "Created resource group ${RG} in ${REGION}"
  fi
}

# ── Phase 2: Static Web App ──────────────────────────────
# IMPORTANT: create the SWA *disconnected* — no --source / --repository-url /
# --login-with-github flag, and never use the Azure portal's "Connect to GitHub"
# button. Those make Azure inject its own azure-static-web-apps-<name>.yml workflow
# into the repo, which drifts from this template (its generated close-PR job has
# shipped without the deploy token, leaking PR staging environments until the
# Free-SKU cap blocks all deploys) and double-deploys alongside deploy.yml.
# Deployment is owned by .github/workflows/deploy.yml via the token stored below.
create_static_web_app() {
  info "Static Web App: ${PROJECT}"
  if az staticwebapp show --name "$PROJECT" --resource-group "$RG" >/dev/null 2>&1; then
    ok "Static Web App ${PROJECT} already exists"
  else
    az staticwebapp create \
      --name "$PROJECT" \
      --resource-group "$RG" \
      --location "$REGION" \
      --sku Free \
      -o none
    ok "Created Static Web App ${PROJECT} (Free tier)"
  fi
}

# ── Phase 3: Deployment Token → GitHub Secret ────────────
store_deployment_token() {
  info "Storing deployment token as GitHub secret..."
  TOKEN=$(az staticwebapp secrets list \
    --name "$PROJECT" \
    --resource-group "$RG" \
    --query properties.apiKey -o tsv)

  [ -n "$TOKEN" ] || die "Could not retrieve deployment token"

  gh secret set AZURE_STATIC_WEB_APPS_API_TOKEN \
    --body "$TOKEN" \
    --repo "${OWNER}/${REPO}"
  ok "Deployment token stored as AZURE_STATIC_WEB_APPS_API_TOKEN"
}

# ── Phase 4: Summary ─────────────────────────────────────
print_summary() {
  local hostname
  hostname=$(az staticwebapp show \
    --name "$PROJECT" --resource-group "$RG" \
    --query defaultHostname -o tsv 2>/dev/null || true)

  echo
  printf '\033[0;32m━━━ Setup complete ━━━\033[0m\n'
  echo
  info "Next steps:"
  printf '  1. git push origin main\n'
  printf '  2. Wait for GitHub Actions to finish, then verify:\n'
  if [ -n "$hostname" ]; then
    printf '     curl https://%s\n' "$hostname"
  else
    printf '     az staticwebapp show -n %s -g %s --query defaultHostname -o tsv\n' "$PROJECT" "$RG"
  fi
  echo
  info "Custom domain:"
  printf '  az staticwebapp hostname set -n %s -g %s --hostname your.domain.com\n' "$PROJECT" "$RG"
}

# ── Main ─────────────────────────────────────────────────
main() {
  echo
  printf '\033[1mAzure Static Web Apps Setup — %s\033[0m\n' "$PROJECT"
  echo

  check_prerequisites
  create_resource_group
  create_static_web_app
  store_deployment_token
  print_summary
}

main "$@"
