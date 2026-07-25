/* ============================================================================
   main.js — builds the galleries and fills the Profile/Contact pages.
   You should not need to edit this. Edit js/data.js instead.
============================================================================ */

/* Put your name into every nav bar. */
(function setName() {
  document.querySelectorAll(".nav__name").forEach(function (el) {
    if (typeof PHOTOGRAPHER_NAME === "string") el.textContent = PHOTOGRAPHER_NAME;
  });
})();

/* Fill a gallery container with framed images from a list. */
function buildGallery(id, list) {
  const el = document.getElementById(id);
  if (!el || !Array.isArray(list)) return;
  list.forEach(function (src) {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "";
    img.loading = "lazy";
    el.appendChild(img);
  });
}
buildGallery("gallery-weddings", typeof WEDDINGS !== "undefined" ? WEDDINGS : []);
buildGallery("gallery-portraits", typeof PORTRAITS !== "undefined" ? PORTRAITS : []);

/* Profile page. */
(function buildProfile() {
  if (typeof PROFILE === "undefined") return;
  const photo = document.getElementById("profile-photo");
  if (photo) { photo.src = PROFILE.photo; photo.alt = PHOTOGRAPHER_NAME || ""; }
  const bio = document.getElementById("profile-bio");
  if (bio) bio.textContent = PROFILE.bio;
  const list = document.getElementById("featured-list");
  if (list && Array.isArray(PROFILE.featuredIn)) {
    PROFILE.featuredIn.forEach(function (item) {
      const p = document.createElement("p");
      p.textContent = item;
      list.appendChild(p);
    });
  }
})();

/* Contact page — a simple stack of links, assembled here in the browser so
   the raw email/phone never appear as plain text in the page source (which is
   what most spam bots scrape). */
(function buildContact() {
  const wrap = document.getElementById("contact-list");
  if (!wrap || typeof CONTACT === "undefined") return;

  function line(html) {
    const p = document.createElement("p");
    p.innerHTML = html;
    wrap.appendChild(p);
  }

  if (CONTACT.emailUser && CONTACT.emailDomain) {
    const addr = CONTACT.emailUser + "@" + CONTACT.emailDomain;   // assembled at runtime
    line('<a href="mailto:' + addr + '">' + addr + "</a>");
  }
  if (CONTACT.phoneDisplay && CONTACT.phoneDigits) {
    line('<a href="tel:' + CONTACT.phoneDigits + '">' + CONTACT.phoneDisplay + "</a>");
  }
  if (CONTACT.instagramHandle && CONTACT.instagramUrl) {
    line('<a href="' + CONTACT.instagramUrl + '" target="_blank" rel="noopener">' +
      CONTACT.instagramHandle + "</a>");
  }
})();
