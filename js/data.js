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
  bio: `I'm Lauren, a photographer based in British Columbia, Canada,
specializing in documentary style weddings and portraits. I prioritize 
intentional, analog image making as much as possible. I studied 
Media Production at Toronto Metropolitan University where I 
experimented with storytelling in many shapes and forms, and 
spent a number of years working in advertising where I practiced 
product photography and portraits in a studio environment.`,
  featuredIn: [
    "Amble Mag, 2018",
    "Toronto Fringe Festival, 2019"
  ]
};

/* ----------------------------------------------------------------------------
   CONTACT page.
   To reduce spam scraping, the email and phone are stored in PIECES here and
   the page reassembles them in the browser. Just fill in your real pieces:
     emailUser + "@" + emailDomain  ->  your full email
     phoneDigits (numbers only)     ->  your dialable number
     phoneDisplay                   ->  how the number should read on screen
   Leave any value as "" to hide that line.
---------------------------------------------------------------------------- */
const CONTACT = {
  emailUser: "hello",
  emailDomain: "laurenembersonphotography.com",
  phoneDisplay: "+1 (000) 000-0000",
  phoneDigits: "+10000000000",
  instagramHandle: "@laurenemberson",
  instagramUrl: "https://instagram.com/laurenemberson"
};
