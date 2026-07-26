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
  "images/weddings/1M9A8049.jpg",
  "images/weddings/1M9A9224.jpg",
  "images/weddings/1M9A9356.jpg",
  "images/weddings/Abby+Omar-11.jpg",
  "images/weddings/Abby+Omar-130.jpg",
  "images/weddings/Abby+Omar-146.jpg",
  "images/weddings/Abby+Omar-15.jpg",
  "images/weddings/Abby+Omar-182.jpg",
  "images/weddings/Abby+Omar-203.jpg",
  "images/weddings/Abby+Omar-240.jpg",
  "images/weddings/Abby+Omar-323.jpg",
  "images/weddings/Abby+Omar-325.jpg",
  "images/weddings/Abby+Omar-332.jpg",
  "images/weddings/Abby+Omar_Previews_06.jpg",
  "images/weddings/Abby+Omar_Previews_07.jpg",
  "images/weddings/Abby+Omar_Previews_09.jpg",
  "images/weddings/Carly+Chris072.jpg",
  "images/weddings/Carly+Chris079.jpg",
  "images/weddings/Carly+Chris121.jpg",
  "images/weddings/Carly+Chris150.jpg",
  "images/weddings/Carly+Chris202.jpg",
  "images/weddings/IMG_1230.jpg",
  "images/weddings/IMG_7405.jpg",
  "images/weddings/IMG_7513.jpg",
  "images/weddings/IMG_7915.jpg",
  "images/weddings/Jesse+Lily-105.jpg",
  "images/weddings/Jesse+Lily-119.jpg",
  "images/weddings/Jesse+Lily-121.jpg",
  "images/weddings/Jesse+Lily-131.jpg",
  "images/weddings/Jesse+Lily-134.jpg",
  "images/weddings/Jesse+Lily-175.jpg",
  "images/weddings/Jesse+Lily-221.jpg",
  "images/weddings/Jesse+Lily-396.jpg",
  "images/weddings/Jesse+Lily-415.jpg",
  "images/weddings/Jesse+Lily-654.jpg",
  "images/weddings/LaurenEmbersonPhotography-285.jpg",
  "images/weddings/LaurenEmbersonPhotography-311.jpg",
  "images/weddings/LaurenEmbersonPhotography-37.jpg",
  "images/weddings/LaurenEmbersonPhotography-404.jpg",
  "images/weddings/LaurenEmbersonPhotography-51.jpg",
  "images/weddings/LaurenEmbersonPhotography-71.jpg",
  "images/weddings/LaurenEmbersonPhotography-75.jpg",
  "images/weddings/LaurenEmbersonPhotography-99.jpg",
  "images/weddings/Sof+Mike-Previews-03.jpg",
  "images/weddings/Sof+Mike-Previews-15.jpg",
  "images/weddings/Sof+Mike-Previews-23.jpg",
  "images/weddings/Sofia+Mike-036.jpg",
  "images/weddings/Sofia+Mike-099.jpg",
  "images/weddings/Sofia+Mike-290.jpg"
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
  photo: "images/profile/lauren.jpg",
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
