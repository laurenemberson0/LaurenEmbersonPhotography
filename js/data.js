/* ============================================================================
   data.js — THE ONLY FILE YOU EDIT for Lauren Emberson Photography.
   Add/remove images and update your profile + contact info here.
   Keep the quotes, commas, and [ ] { } exactly where they are.
============================================================================ */

/* Your name, shown top-left in the navigation. */
const PHOTOGRAPHER_NAME = "Lauren Emberson";

/* ----------------------------------------------------------------------------
   WEDDINGS gallery (the home page).
   List your image files here. Put the files in images/weddings/.
   They flow into two columns and keep their real proportions.
   To add a photo: add a new "images/weddings/yourphoto.jpg", line.
---------------------------------------------------------------------------- */
const WEDDINGS = [
  "images/weddings/w1.svg",
  "images/weddings/w2.svg",
  "images/weddings/w3.svg",
  "images/weddings/w4.svg",
  "images/weddings/w5.svg",
  "images/weddings/w6.svg"
];

/* ----------------------------------------------------------------------------
   PORTRAITS gallery. Put files in images/portraits/.
---------------------------------------------------------------------------- */
const PORTRAITS = [
  "images/portraits/p1.svg",
  "images/portraits/p2.svg",
  "images/portraits/p3.svg",
  "images/portraits/p4.svg",
  "images/portraits/p5.svg",
  "images/portraits/p6.svg"
];

/* ----------------------------------------------------------------------------
   PROFILE page.
     photo      -> your portrait (put the file in images/profile/)
     bio        -> your description (write freely between the back-ticks)
     featuredIn -> list of places your work has been featured
---------------------------------------------------------------------------- */
const PROFILE = {
  photo: "images/profile/lauren.svg",
  bio: `Lauren Emberson is a photographer based in British Columbia, Canada,
specializing in weddings and portraits. Replace this with your own words —
your style, your story, what you love to shoot.`,
  featuredIn: [
    "Publication One",
    "Publication Two",
    "Gallery / Festival",
    "Publication Three"
  ]
};

/* ----------------------------------------------------------------------------
   CONTACT page. Leave any value as "" to hide that line.
---------------------------------------------------------------------------- */
const CONTACT = {
  email: "hello@laurenembersonphotography.com",
  phone: "+1 (000) 000-0000",
  instagram: { label: "@laurenemberson", url: "https://instagram.com/laurenemberson" }
};
