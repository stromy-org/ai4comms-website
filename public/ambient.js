const root = document.documentElement;
const header = document.querySelector("[data-site-header]");
const revealItems = [...document.querySelectorAll("[data-reveal]")];
const ambientZones = [...document.querySelectorAll("[data-ambient-zone]")];
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");

root.classList.add("js");

const syncHeader = () => {
  if (!header) return;
  header.classList.toggle("is-solid", window.scrollY > 36);
};

const markVisible = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
    }
  });
};

const revealObserver =
  revealItems.length > 0
    ? new IntersectionObserver(markVisible, {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.18,
      })
    : null;

revealItems.forEach((item) => {
  if (reducedMotion.matches) {
    item.classList.add("is-visible");
    return;
  }

  revealObserver?.observe(item);
});

const setZoneCenter = (zone) => {
  zone.style.setProperty("--ambient-x", "50%");
  zone.style.setProperty("--ambient-y", "50%");
};

const zoneStates = new WeakMap();

const stopZone = (zone, state) => {
  state.rafId = 0;
  if (!state.active) {
    zone.dataset.pointer = "idle";
  }
};

const tickZone = (zone, state) => {
  state.currentX += (state.targetX - state.currentX) * 0.12;
  state.currentY += (state.targetY - state.currentY) * 0.12;

  zone.style.setProperty("--ambient-x", `${(state.currentX * 100).toFixed(2)}%`);
  zone.style.setProperty("--ambient-y", `${(state.currentY * 100).toFixed(2)}%`);

  const settled =
    Math.abs(state.targetX - state.currentX) < 0.002 &&
    Math.abs(state.targetY - state.currentY) < 0.002;

  if (!state.active && settled) {
    stopZone(zone, state);
    return;
  }

  state.rafId = window.requestAnimationFrame(() => tickZone(zone, state));
};

const ensureTick = (zone, state) => {
  if (state.rafId) return;
  state.rafId = window.requestAnimationFrame(() => tickZone(zone, state));
};

const updateTarget = (zone, state, event) => {
  const rect = zone.getBoundingClientRect();
  const x = (event.clientX - rect.left) / rect.width;
  const y = (event.clientY - rect.top) / rect.height;

  state.targetX = Math.max(0.08, Math.min(0.92, x));
  state.targetY = Math.max(0.14, Math.min(0.86, y));
  zone.dataset.pointer = "active";
  ensureTick(zone, state);
};

const activateAmbientZones = () => {
  ambientZones.forEach((zone) => {
    setZoneCenter(zone);
    zone.dataset.ambientActive = "true";
    zone.dataset.pointer = "idle";

    if (reducedMotion.matches || !finePointer.matches) {
      return;
    }

    const state = {
      active: false,
      currentX: 0.5,
      currentY: 0.5,
      targetX: 0.5,
      targetY: 0.5,
      rafId: 0,
    };

    zoneStates.set(zone, state);

    zone.addEventListener(
      "pointerenter",
      (event) => {
        if (zone.dataset.ambientActive !== "true") return;
        state.active = true;
        updateTarget(zone, state, event);
      },
      { passive: true },
    );

    zone.addEventListener(
      "pointermove",
      (event) => {
        if (zone.dataset.ambientActive !== "true") return;
        updateTarget(zone, state, event);
      },
      { passive: true },
    );

    zone.addEventListener(
      "pointerleave",
      () => {
        state.active = false;
        state.targetX = 0.5;
        state.targetY = 0.5;
        ensureTick(zone, state);
      },
      { passive: true },
    );
  });
};

const zoneObserver =
  ambientZones.length > 0
    ? new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const zone = entry.target;
            zone.dataset.ambientActive = entry.isIntersecting ? "true" : "false";

            if (!entry.isIntersecting) {
              const state = zoneStates.get(zone);
              if (!state) return;
              state.active = false;
              state.targetX = 0.5;
              state.targetY = 0.5;
              ensureTick(zone, state);
            }
          });
        },
        {
          rootMargin: "12% 0px 12% 0px",
          threshold: 0.18,
        },
      )
    : null;

ambientZones.forEach((zone) => {
  zoneObserver?.observe(zone);
});

window.addEventListener("scroll", syncHeader, { passive: true });

reducedMotion.addEventListener("change", () => window.location.reload());
finePointer.addEventListener("change", () => window.location.reload());

activateAmbientZones();
syncHeader();
