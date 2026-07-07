const PAGE_SIZE = 9;

const state = {
  book: "all", // "all" | 1 | 2 | 3 | "freestyle"
  sortBy: "date", // "lesson" | "date"
  sortDir: "desc", // "asc" | "desc"
  page: 1
};

function booksPresent() {
  // Freestyle first, then Book 3, Book 2, Book 1.
  return [...new Set(pieces.map(p => p.book))].sort((a, b) => {
    if (a === "freestyle") return -1;
    if (b === "freestyle") return 1;
    return b - a;
  });
}

function filteredPieces() {
  // Unassigned (null) lessons always sort last, regardless of direction.
  // Array.prototype.sort is stable, so ties keep their relative order from
  // the `pieces` array below.
  return pieces
    .filter(p => state.book === "all" || p.book === state.book)
    .sort((a, b) => {
      if (state.sortBy === "date") {
        const cmp = a.date.localeCompare(b.date);
        return state.sortDir === "desc" ? -cmp : cmp;
      }
      // Lesson sort: on "All Arrangements", group by book first (reading
      // through Book 1 start to finish, then Book 2, etc.) rather than
      // interleaving books that share the same lesson number. Unassigned
      // lessons always sort last, regardless of direction; descending is a
      // true mirror of ascending (book order flips too, not just the
      // lesson number within a book).
      const aUnassigned = a.lesson === null;
      const bUnassigned = b.lesson === null;
      if (aUnassigned && bUnassigned) return a.date.localeCompare(b.date);
      if (aUnassigned) return 1;
      if (bUnassigned) return -1;

      const bookA = a.book === "freestyle" ? Infinity : a.book;
      const bookB = b.book === "freestyle" ? Infinity : b.book;
      const bookCmp = state.sortDir === "desc" ? bookB - bookA : bookA - bookB;
      if (bookCmp !== 0) return bookCmp;

      const lessonCmp = state.sortDir === "desc" ? b.lesson - a.lesson : a.lesson - b.lesson;
      if (lessonCmp !== 0) return lessonCmp;

      return a.date.localeCompare(b.date);
    });
}

function renderBookTabs() {
  const el = document.getElementById("book-tabs");
  const books = booksPresent();
  const tabs = ['<button class="tab' + (state.book === "all" ? " active" : "") + '" data-book="all">All Arrangements</button>'];
  books.forEach(b => {
    tabs.push(
      `<button class="tab${state.book === b ? " active" : ""}" data-book="${b}">${BOOK_TITLES[b] || "Book " + b}</button>`
    );
  });
  el.innerHTML = tabs.join("");

  el.querySelectorAll(".tab").forEach(btn => {
    btn.addEventListener("click", () => {
      const val = btn.dataset.book;
      const asNumber = Number(val);
      state.book = val === "all" || Number.isNaN(asNumber) ? val : asNumber;
      state.page = 1;
      renderAll();
    });
  });
}

function renderSortControls() {
  const el = document.getElementById("sort-controls");

  // Freestyle pieces have no lesson number, so lesson sorting is meaningless
  // there — force date sort and only offer the date options.
  if (state.book === "freestyle" && state.sortBy === "lesson") {
    state.sortBy = "date";
    state.sortDir = "desc";
  }

  const lessonOptions = state.book === "freestyle" ? "" : `
      <option value="lesson-asc">Lesson: Ascending</option>
      <option value="lesson-desc">Lesson: Descending</option>`;

  const current = `${state.sortBy}-${state.sortDir}`;
  el.innerHTML = `
    <label for="sort-select">Sort by</label>
    <select id="sort-select" autocomplete="off">
      <option value="date-desc">Date: Newest First</option>
      <option value="date-asc">Date: Oldest First</option>${lessonOptions}
    </select>
  `;
  el.querySelector("#sort-select").value = current;
  el.querySelector("#sort-select").addEventListener("change", e => {
    const [sortBy, sortDir] = e.target.value.split("-");
    state.sortBy = sortBy;
    state.sortDir = sortDir;
    state.page = 1;
    renderAll();
  });
}

function cardLabel(piece) {
  if (piece.book === "freestyle") return piece.title || "Freestyle Arrangement";
  const name = lessonName(piece.book, piece.lesson);
  if (piece.lesson && name) return `Book ${piece.book} · Lesson ${piece.lesson}: ${name}`;
  if (piece.lesson) return `Book ${piece.book} · Lesson ${piece.lesson}`;
  return `Book ${piece.book} · Lesson TBD`;
}

function buildCard(piece) {
  const card = document.createElement("div");
  card.className = "card";

  const hasMultiple = piece.images.length > 1;
  let currentIndex = 0;
  let dotsEl = null;
  let swiped = false;

  const carousel = document.createElement("div");
  carousel.className = "card-carousel";

  const track = document.createElement("div");
  track.className = "carousel-track";
  track.style.width = `${piece.images.length * 100}%`;

  piece.images.forEach(src => {
    const slide = document.createElement("div");
    slide.className = "carousel-slide";
    slide.style.width = `${100 / piece.images.length}%`;
    const img = document.createElement("img");
    img.className = "card-image";
    img.src = src;
    img.alt = piece.title || cardLabel(piece);
    img.loading = "lazy";
    img.addEventListener("error", () => handleImageError(img, "Photo unavailable", "gallery"));
    slide.appendChild(img);
    track.appendChild(slide);
  });
  carousel.appendChild(track);

  let prevBtn = null;
  let nextBtn = null;

  function goTo(index) {
    const lastIndex = piece.images.length - 1;
    currentIndex = Math.max(0, Math.min(index, lastIndex));
    track.style.transform = `translateX(-${(100 / piece.images.length) * currentIndex}%)`;
    if (dotsEl) {
      dotsEl.querySelectorAll(".dot").forEach((d, i) => d.classList.toggle("active", i === currentIndex));
    }
    if (prevBtn) prevBtn.style.display = currentIndex === 0 ? "none" : "flex";
    if (nextBtn) nextBtn.style.display = currentIndex === lastIndex ? "none" : "flex";
  }

  if (hasMultiple) {
    prevBtn = document.createElement("button");
    prevBtn.className = "carousel-arrow carousel-prev";
    prevBtn.innerHTML = "&#8249;";
    prevBtn.setAttribute("aria-label", "Previous photo");
    prevBtn.style.display = "none"; // hidden on the first slide — no wraparound
    prevBtn.addEventListener("click", e => { e.stopPropagation(); goTo(currentIndex - 1); });

    nextBtn = document.createElement("button");
    nextBtn.className = "carousel-arrow carousel-next";
    nextBtn.innerHTML = "&#8250;";
    nextBtn.setAttribute("aria-label", "Next photo");
    nextBtn.addEventListener("click", e => { e.stopPropagation(); goTo(currentIndex + 1); });

    dotsEl = document.createElement("div");
    dotsEl.className = "carousel-dots";
    piece.images.forEach((_, i) => {
      const dot = document.createElement("span");
      dot.className = "dot" + (i === 0 ? " active" : "");
      dot.addEventListener("click", e => { e.stopPropagation(); goTo(i); });
      dotsEl.appendChild(dot);
    });

    carousel.appendChild(prevBtn);
    carousel.appendChild(nextBtn);
    carousel.appendChild(dotsEl);

    // Swipe support (mouse + touch, via pointer events)
    let startX = 0;
    let dragging = false;
    carousel.addEventListener("pointerdown", e => {
      startX = e.clientX;
      dragging = true;
      swiped = false;
    });
    carousel.addEventListener("pointermove", e => {
      if (dragging && Math.abs(e.clientX - startX) > 10) swiped = true;
    });
    carousel.addEventListener("pointerup", e => {
      if (!dragging) return;
      dragging = false;
      const delta = e.clientX - startX;
      if (Math.abs(delta) > 40) {
        goTo(currentIndex + (delta < 0 ? 1 : -1));
        swiped = true;
      }
    });
    carousel.addEventListener("pointercancel", () => { dragging = false; });
  }

  // A drag-swipe shouldn't also register as a "click" that opens the lightbox
  carousel.addEventListener("click", () => {
    if (swiped) { swiped = false; return; }
    openLightbox(piece, currentIndex);
  });

  card.appendChild(carousel);

  const body = document.createElement("div");
  body.className = "card-body";
  body.innerHTML = `
    <p class="card-meta">${piece.date}</p>
    <h3 class="card-title">${piece.title || cardLabel(piece)}</h3>
    ${piece.description ? `<p class="card-desc">${piece.description}</p>` : ""}
  `;
  card.appendChild(body);

  return card;
}

function renderGallery() {
  const grid = document.getElementById("gallery-grid");
  const all = filteredPieces();
  const start = (state.page - 1) * PAGE_SIZE;
  const pageItems = all.slice(start, start + PAGE_SIZE);

  grid.innerHTML = "";
  pageItems.forEach(piece => grid.appendChild(buildCard(piece)));

  if (pageItems.length === 0) {
    grid.innerHTML = `<p class="empty-state">No pieces here yet.</p>`;
  }

  renderPagination(all.length);
}

function renderPagination(total) {
  const el = document.getElementById("pagination");
  const pageCount = Math.ceil(total / PAGE_SIZE);
  if (pageCount <= 1) {
    el.innerHTML = "";
    return;
  }

  const buttons = [];
  buttons.push(`<button class="page-btn" id="page-prev" ${state.page === 1 ? "disabled" : ""}>&#8249; Prev</button>`);
  for (let i = 1; i <= pageCount; i++) {
    buttons.push(`<button class="page-btn${i === state.page ? " active" : ""}" data-page="${i}">${i}</button>`);
  }
  buttons.push(`<button class="page-btn" id="page-next" ${state.page === pageCount ? "disabled" : ""}>Next &#8250;</button>`);
  el.innerHTML = buttons.join("");

  el.querySelectorAll("[data-page]").forEach(btn => {
    btn.addEventListener("click", () => {
      state.page = Number(btn.dataset.page);
      renderGallery();
      document.getElementById("gallery").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
  const prevBtn = document.getElementById("page-prev");
  const nextBtn = document.getElementById("page-next");
  if (prevBtn) prevBtn.addEventListener("click", () => {
    if (state.page > 1) { state.page--; renderGallery(); }
  });
  if (nextBtn) nextBtn.addEventListener("click", () => {
    if (state.page < pageCount) { state.page++; renderGallery(); }
  });
}

function renderAll() {
  renderBookTabs();
  renderSortControls();
  renderGallery();
}

// Lightbox with multi-image (detail shot) navigation
let lightboxPiece = null;
let lightboxIndex = 0;

function openLightbox(piece, index) {
  lightboxPiece = piece;
  lightboxIndex = index;
  updateLightboxImage();
  document.getElementById("lightbox").classList.add("open");
}

function updateLightboxImage() {
  const img = document.getElementById("lightbox-img");
  const caption = document.getElementById("lightbox-caption");
  const total = lightboxPiece.images.length;
  img.src = lightboxPiece.images[lightboxIndex];
  img.alt = lightboxPiece.title || cardLabel(lightboxPiece);
  caption.textContent = `${lightboxPiece.title || cardLabel(lightboxPiece)}${total > 1 ? ` — ${lightboxIndex + 1} / ${total}` : ""}`;

  const showNav = total > 1;
  document.getElementById("lightbox-prev").style.display = showNav ? "block" : "none";
  document.getElementById("lightbox-next").style.display = showNav ? "block" : "none";
}

function closeLightbox() {
  document.getElementById("lightbox").classList.remove("open");
  lightboxPiece = null;
}

function lightboxStep(delta) {
  if (!lightboxPiece) return;
  const total = lightboxPiece.images.length;
  lightboxIndex = (lightboxIndex + delta + total) % total;
  updateLightboxImage();
}

document.getElementById("lightbox-close").addEventListener("click", closeLightbox);
document.getElementById("lightbox-prev").addEventListener("click", () => lightboxStep(-1));
document.getElementById("lightbox-next").addEventListener("click", () => lightboxStep(1));
document.getElementById("lightbox").addEventListener("click", (e) => {
  if (e.target.id === "lightbox") closeLightbox();
});
document.addEventListener("keydown", (e) => {
  if (!document.getElementById("lightbox").classList.contains("open")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") lightboxStep(-1);
  if (e.key === "ArrowRight") lightboxStep(1);
});

// Shared fallback for missing images: img elements can't render child
// content, so on error we hide the img and insert a sibling placeholder.
function handleImageError(img, message, variant) {
  img.onerror = null;
  img.style.display = "none";
  const placeholder = document.createElement("div");
  placeholder.className = `image-placeholder image-placeholder--${variant}`;
  placeholder.textContent = message;
  img.insertAdjacentElement("afterend", placeholder);
}

// Profile photo fallback (About section)
function initProfilePhoto() {
  const img = document.getElementById("profile-photo");
  img.addEventListener("error", () => {
    handleImageError(img, "Add your photo — images/profile/profile.jpg", "profile");
  }, { once: true });
}

// Hero background — a specific, hand-picked photo (see HERO_IMAGE in data.js)
function initHeroBackground() {
  const bg = document.getElementById("hero-bg");
  bg.style.backgroundImage = `url('${HERO_IMAGE}')`;
}

document.getElementById("year").textContent = new Date().getFullYear();

initProfilePhoto();
initHeroBackground();
renderAll();
