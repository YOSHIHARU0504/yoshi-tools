(() => {
  "use strict";

  const memoryGrid = document.getElementById("memoryGrid");
  const letterToggle = document.getElementById("letterToggle");
  const letter = document.getElementById("loveLetter");

  // The gallery intentionally does not fetch images from the public GitHub repo.
  // Later, authenticated Supabase code can populate this array with short-lived
  // signed URLs: window.NUESTRA_HISTORIA_PRIVATE_PHOTOS = [{url, alt, caption}, ...]
  const privatePhotos = Array.isArray(window.NUESTRA_HISTORIA_PRIVATE_PHOTOS)
    ? window.NUESTRA_HISTORIA_PRIVATE_PHOTOS
    : [];

  function renderMemories() {
    if (!memoryGrid) return;
    for (let index = 0; index < 11; index += 1) {
      const photo = privatePhotos[index];
      const card = document.createElement("div");
      card.className = "memory-card";

      if (photo && typeof photo.url === "string" && photo.url.startsWith("https://")) {
        const image = document.createElement("img");
        image.src = photo.url;
        image.alt = photo.alt || "Un recuerdo de nuestra historia";
        image.loading = "lazy";
        card.appendChild(image);
      } else {
        const placeholder = document.createElement("div");
        placeholder.className = "memory-placeholder";
        const symbol = document.createElement("span");
        symbol.textContent = "♡";
        const title = document.createElement("strong");
        title.textContent = "RECUERDO " + String(index + 1).padStart(2, "0");
        const status = document.createElement("small");
        status.textContent = "Fotografía protegida";
        placeholder.append(symbol, title, status);
        card.appendChild(placeholder);
      }
      memoryGrid.appendChild(card);
    }
  }

  if (letterToggle && letter) {
    letterToggle.addEventListener("click", () => {
      const willOpen = letter.hidden;
      letter.hidden = !willOpen;
      letterToggle.setAttribute("aria-expanded", String(willOpen));
      letterToggle.querySelector(".open-label").innerHTML = willOpen
        ? "CERRAR CARTA <b>↙</b>"
        : "ABRIR CARTA <b>↗</b>";
      if (willOpen) {
        window.setTimeout(() => letter.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
      }
    });
  }

  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("visible"));
  }

  renderMemories();
})();
