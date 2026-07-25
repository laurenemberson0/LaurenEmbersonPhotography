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

/* Contact page. */
(function buildContact() {
  if (typeof CONTACT === "undefined") return;
  const email = document.getElementById("contact-email");
  if (email && CONTACT.email) {
    email.innerHTML = '<a href="mailto:' + CONTACT.email + '">' + CONTACT.email + "</a>";
  }
  const phone = document.getElementById("contact-phone");
  if (phone && CONTACT.phone) {
    const tel = CONTACT.phone.replace(/[^+0-9]/g, "");
    phone.innerHTML = '<a href="tel:' + tel + '">' + CONTACT.phone + "</a>";
  }
  const ig = document.getElementById("contact-instagram");
  if (ig && CONTACT.instagram && CONTACT.instagram.url) {
    ig.innerHTML = '<a href="' + CONTACT.instagram.url + '" target="_blank" rel="noopener">' +
      (CONTACT.instagram.label || "Instagram") + "</a>";
  }
})();
