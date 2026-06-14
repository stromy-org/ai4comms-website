# Azure Static Web Apps — AI4Comms

Automated setup script or manual commands to deploy the website to Azure Static Web Apps.

> ⛔ **Do not connect this repo to the SWA via the Azure portal "Connect to GitHub"
> button, or with `az staticwebapp create --source ...`.** The SWA must stay
> *disconnected*: `setup-swa.sh` creates it with no source, and `.github/workflows/deploy.yml`
> owns deployment via the `AZURE_STATIC_WEB_APPS_API_TOKEN` secret. The portal flow injects an
> Azure-generated `azure-static-web-apps-<name>.yml` workflow that drifts from this template
> (its close-PR job has shipped without the deploy token, leaking PR staging environments) and
> double-deploys. If you see such a file in this repo, delete it.

## Quick setup

```bash
bash azure_swa/setup-swa.sh
```

All steps are idempotent — safe to re-run.

> **Security headers:** `staticwebapp.config.json` ships a safe baseline (`nosniff`,
> `SAMEORIGIN`, `Referrer-Policy`, HSTS, `Permissions-Policy`). A `Content-Security-Policy`
> is intentionally **not** defaulted — a wrong CSP silently breaks inline scripts / analytics
> / embeds — add one per-site under `globalHeaders` after testing.

## Prerequisites

```bash
az login
gh auth login
```

## Step-by-step commands

If the setup script did not run (or you prefer manual control), execute the following in order.

### 1. Resource Group

```bash
az group create --name rg-ai4comms-website --location westeurope
```

### 2. Static Web App

```bash
az staticwebapp create \
  --name ai4comms-website \
  --resource-group rg-ai4comms-website \
  --location westeurope \
  --sku Free
```

This creates a Static Web App on the Free tier with a default `*.azurestaticapps.net` hostname.

### 3. Deployment token

```bash
TOKEN=$(az staticwebapp secrets list \
  --name ai4comms-website \
  --resource-group rg-ai4comms-website \
  --query properties.apiKey -o tsv)

gh secret set AZURE_STATIC_WEB_APPS_API_TOKEN \
  --body "$TOKEN" \
  --repo "stromy-org/ai4comms-website"
```

### 4. Custom domain (optional)

```bash
az staticwebapp hostname set \
  --name ai4comms-website \
  --resource-group rg-ai4comms-website \
  --hostname your.domain.com
```

Create a CNAME record pointing `your.domain.com` to the default hostname first:

```bash
az staticwebapp show \
  --name ai4comms-website \
  --resource-group rg-ai4comms-website \
  --query defaultHostname -o tsv
```

## After setup

```bash
git push origin main

# Verify after GitHub Actions completes:
HOSTNAME=$(az staticwebapp show -n ai4comms-website -g rg-ai4comms-website --query defaultHostname -o tsv)
curl https://$HOSTNAME
```

Pull requests automatically get preview environments (deployed and torn down by the workflow).

## Cost

Free tier includes 100 GB bandwidth/month, 0.5 GB storage, and 2 custom domains. Standard tier (~$9/mo) adds 5 custom domains, 2 GB storage, SLA, and custom auth.
