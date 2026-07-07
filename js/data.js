// Reference lesson names for each Sogetsu textbook, from sogetsu.or.jp and
// official Sogetsu course syllabi. Used to label pieces once you set `lesson`.
const LESSON_NAMES = {
  1: [
    "Basic Upright Style Moribana",
    "Basic Upright Style Moribana",
    "Basic Upright Style Moribana (in Reverse)",
    "Basic Upright Style Nageire",
    "Basic Upright Style Nageire",
    "Basic Upright Style Nageire (in Reverse)",
    "Basic Slanting Style Moribana",
    "Basic Slanting Style Moribana (in Reverse)",
    "Basic Slanting Style Nageire",
    "Basic Slanting Style Nageire (in Reverse)",
    "Variation No. 1 Upright Style Moribana",
    "Variation No. 1 Upright Style Nageire",
    "Variation No. 1 Slanting Style Moribana",
    "Variation No. 1 Slanting Style Nageire",
    "Free Style Arranging",
    "Variation No. 2 Upright Style Moribana",
    "Variation No. 2 Upright Style Nageire",
    "Variation No. 2 Slanting Style Moribana",
    "Variation No. 2 Slanting Style Nageire",
    "Special Materials and Arrangements for Festive Occasions"
  ],
  2: [
    "Variation No. 3 Upright Style Moribana",
    "Variation No. 3 Upright Style Nageire",
    "Variation No. 3 Slanting Style Moribana",
    "Variation No. 3 Slanting Style Nageire",
    "Variation No. 4 Upright Style Moribana",
    "Variation No. 4 Upright Style Nageire",
    "Variation No. 4 Slanting Style Moribana",
    "Variation No. 4 Slanting Style Nageire",
    "Variation No. 4 Hanging Style Nageire",
    "Free Style Arranging and Sketching",
    "Variation No. 5 Upright Style Moribana",
    "Variation No. 5 Slanting Style Moribana",
    "Variation No. 6 Slanting Style Moribana",
    "Variation No. 6 Horizontal Style Moribana",
    "Variation No. 6 Horizontal Style Nageire",
    "Variation No. 7 Floating / Spreading / Morimono Arrangement",
    "Variation No. 8 Combined Styles (Moribana and Moribana)",
    "Variation No. 8 Combined Styles (Moribana and Nageire)",
    "Variation No. 8 Combined Styles (Nageire and Nageire)",
    "Special Materials and Arrangements for Festive Occasions"
  ],
  3: [
    "Vertical Composition (Moribana)",
    "Horizontal Composition",
    "Free Style Ka-bu-wa-ke (Moribana)",
    "Two or More Containers",
    "Composition of Straight Lines",
    "Composition of Curved Lines",
    "Composition of Straight and Curved Lines",
    "Colours in the Same Tonal Range",
    "Colors in Contrast",
    "Color of the Container",
    "Shape of the Container",
    "Massed Expression",
    "Composition of Mass and Line (Straight or Curved)",
    "Composition of Surfaces by Using Leaves",
    "Composition of Surfaces Made by the Massing of Lines",
    "Intertwining Plant Materials",
    "Repeating Similar Forms or Shapes",
    "Showing Lines at Base",
    "To Be Viewed from All Angles",
    "Sketching and Arranging"
  ]
};

const BOOK_TITLES = {
  1: "Book 1 — Kakei (Basics)",
  2: "Book 2 — Kakei (Variations)",
  3: "Book 3 — Line, Color and Mass",
  freestyle: "Freestyle"
};

// The photo shown as the hero banner background. Change this path any time
// to feature a different arrangement — pick one with a clean, uncluttered
// background so the crop looks intentional.
const HERO_IMAGE = "images/book3/2026-05-30-4.jpg";

function lessonName(book, lesson) {
  if (!lesson) return null;
  const names = LESSON_NAMES[book];
  return names ? names[lesson - 1] : null;
}

// Each `piece` is one class session. `images` lists the main shot first,
// followed by any detail shots taken in that same session.
// Set `lesson` to the lesson number (1-20) once you know it; leave it as
// null and the site will just label the piece "Lesson TBD".
const pieces = [
  {
    id: "2024-01-27",
    date: "2024-01-27",
    book: 1,
    lesson: null, // TODO: fill in 1-20 once you know it — this is your very first arrangement
    images: ["images/book1/2024-01-27-1.jpg"],
    title: "",
    description: "Spider chrysanthemums and pussy willow branches"
  },
  {
    id: "2024-02-03",
    date: "2024-02-03",
    book: 1,
    lesson: null, // TODO: fill in 1-20 once you know it
    images: ["images/book1/2024-02-03-1.jpg"],
    title: "",
    description: "Protea and flowering quince branches"
  },
  {
    id: "2024-02-10",
    date: "2024-02-10",
    book: 1,
    lesson: null, // TODO: fill in 1-20 once you know it
    images: ["images/book1/2024-02-10-1.jpg"],
    title: "",
    description: "Ranunculus and a flowering branch"
  },
  {
    id: "2024-02-24",
    date: "2024-02-24",
    book: 1,
    lesson: null, // TODO: fill in 1-20 once you know it
    images: ["images/book1/2024-02-24-1.jpg"],
    title: "",
    description: "Garden roses and a flowering quince branch"
  },
  {
    id: "2024-03-02",
    date: "2024-03-02",
    book: 1,
    lesson: null, // TODO: fill in 1-20 once you know it
    images: ["images/book1/2024-03-02-1.jpg"],
    title: "",
    description: "Anemones, veronica and a leafy vine branch"
  },
  {
    id: "2024-07-13",
    date: "2024-07-13",
    book: 1,
    lesson: null, // TODO: fill in 1-20 once you know it
    images: ["images/book1/2024-07-13-1.jpg"],
    title: "",
    description: "Pompom dahlias and bells of Ireland"
  },
  {
    id: "2024-07-20",
    date: "2024-07-20",
    book: 1,
    lesson: null, // TODO: fill in 1-20 once you know it
    images: ["images/book1/2024-07-20-1.jpg"],
    title: "",
    description: "Pompom dahlias and a leafy branch"
  },
  {
    id: "2024-07-27",
    date: "2024-07-27",
    book: 1,
    lesson: null, // TODO: fill in 1-20 once you know it
    images: ["images/book1/2024-07-27-1.jpg"],
    title: "",
    description: "Pompom dahlias and a leafy branch"
  },
  {
    id: "2024-08-03",
    date: "2024-08-03",
    book: 1,
    lesson: null, // TODO: fill in 1-20 once you know it
    images: ["images/book1/2024-08-03-1.jpg"],
    title: "",
    description: "Ranunculus, nerine lilies and bunny tail grass"
  },
  {
    id: "2024-09-07a",
    date: "2024-09-07",
    book: 1,
    lesson: null, // TODO: fill in 1-20 once you know it
    images: ["images/book1/2024-09-07-1.jpg"],
    title: "",
    description: "Ranunculus and curly willow branches"
  },
  {
    id: "2024-09-07b",
    date: "2024-09-07",
    book: 1,
    lesson: null, // TODO: fill in 1-20 once you know it
    images: ["images/book1/2024-09-07-2.jpg"],
    title: "",
    description: "Gerbera daisies and branches"
  },
  {
    id: "2024-09-21",
    date: "2024-09-21",
    book: 1,
    lesson: null, // TODO: fill in 1-20 once you know it
    images: ["images/book1/2024-09-21-1.jpg"],
    title: "",
    description: "Pompom dahlias and a leafy vine branch"
  },
  {
    id: "2024-09-28",
    date: "2024-09-28",
    book: 1,
    lesson: null, // TODO: fill in 1-20 once you know it
    images: ["images/book1/2024-09-28-1.jpg"],
    title: "",
    description: "Celosia and curly willow branches"
  },
  {
    id: "2024-10-12a",
    date: "2024-10-12",
    book: 1,
    lesson: null, // TODO: fill in 1-20 once you know it
    images: ["images/book1/2024-10-12-1.jpg"],
    title: "",
    description: "Hydrangea and anthurium"
  },
  {
    id: "2024-10-12b",
    date: "2024-10-12",
    book: 1,
    lesson: null, // TODO: fill in 1-20 once you know it
    images: ["images/book1/2024-10-12-2.jpg"],
    title: "",
    description: "Clematis and wildflowers"
  },
  {
    id: "2024-10-26",
    date: "2024-10-26",
    book: 1,
    lesson: null, // TODO: fill in 1-20 once you know it
    images: ["images/book1/2024-10-26-1.jpg"],
    title: "",
    description: "Button chrysanthemums and Japanese maple branches"
  },
  {
    id: "2024-11-02",
    date: "2024-11-02",
    book: 1,
    lesson: null, // TODO: fill in 1-20 once you know it
    images: ["images/book1/2024-11-02-1.jpg"],
    title: "",
    description: "Garden roses and maple branches"
  },
  {
    id: "2024-11-09a",
    date: "2024-11-09",
    book: 1,
    lesson: null, // TODO: fill in 1-20 once you know it
    images: ["images/book1/2024-11-09-1.jpg"],
    title: "",
    description: "Spider mums, peonies and trailing amaranth"
  },
  {
    id: "2024-11-09b",
    date: "2024-11-09",
    book: 1,
    lesson: null, // TODO: fill in 1-20 once you know it
    images: ["images/book1/2024-11-09-2.jpg"],
    title: "",
    description: "Spider mums and trailing amaranth"
  },
  {
    id: "2024-11-16a",
    date: "2024-11-16",
    book: "freestyle",
    lesson: null, // freestyle piece — not part of the Sogetsu curriculum
    images: ["images/book1/2024-11-16-1.jpg"],
    title: "",
    description: "Bent-grass framework and a lily"
  },
  {
    id: "2024-11-16b",
    date: "2024-11-16",
    book: 1,
    lesson: null, // TODO: fill in 1-20 once you know it
    images: ["images/book1/2024-11-16-2.jpg"],
    title: "",
    description: "Glossy branch and gardenia blooms"
  },
  {
    id: "2025-02-22",
    date: "2025-02-22",
    book: 2,
    lesson: null, // TODO: fill in 1-20 once you know it
    images: ["images/book2/2025-02-22-1.jpg"],
    title: "",
    description: "Pompom chrysanthemums and a flowering branch"
  },
  {
    id: "2025-03-01",
    date: "2025-03-01",
    book: 2,
    lesson: null, // TODO: fill in 1-20 once you know it
    images: ["images/book2/2025-03-01-1.jpg"],
    title: "",
    description: "Garden roses and mimosa branches"
  },
  {
    id: "2025-03-15a",
    date: "2025-03-15",
    book: 2,
    lesson: null, // TODO: fill in 1-20 once you know it
    images: ["images/book2/2025-03-15-1.jpg"],
    title: "",
    description: "Cherry blossom branch and ranunculus"
  },
  {
    id: "2025-03-15b",
    date: "2025-03-15",
    book: 2,
    lesson: null, // TODO: fill in 1-20 once you know it
    images: ["images/book2/2025-03-15-2.jpg"],
    title: "",
    description: "Cherry blossom branch and roses"
  },
  {
    id: "2025-03-22",
    date: "2025-03-22",
    book: 2,
    lesson: null, // TODO: fill in 1-20 once you know it
    images: ["images/book2/2025-03-22-1.jpg"],
    title: "",
    description: "Calla lily and a small flowering vine"
  },
  {
    id: "2025-04-12",
    date: "2025-04-12",
    book: 2,
    lesson: null, // TODO: fill in 1-20 once you know it
    images: ["images/book2/2025-04-12-1.jpg"],
    title: "",
    description: "Cosmos and a flowering vine"
  },
  {
    id: "2025-04-19",
    date: "2025-04-19",
    book: 2,
    lesson: null, // TODO: fill in 1-20 once you know it
    images: ["images/book2/2025-04-19-1.jpg"],
    title: "",
    description: "Ninebark branches and flower clusters"
  },
  {
    id: "2025-04-26",
    date: "2025-04-26",
    book: 2,
    lesson: null, // TODO: fill in 1-20 once you know it
    images: ["images/book2/2025-04-26-1.jpg"],
    title: "",
    description: "Freesia and a leafy vine"
  },
  {
    id: "2025-05-03",
    date: "2025-05-03",
    book: 2,
    lesson: null, // TODO: fill in 1-20 once you know it
    images: ["images/book2/2025-05-03-1.jpg"],
    title: "",
    description: "Anemones, scabiosa, jointed stems and asparagus fern"
  },
  {
    id: "2025-05-06",
    date: "2025-05-06",
    book: "freestyle",
    lesson: null, // freestyle piece — not part of the Sogetsu curriculum
    images: ["images/book2/2025-05-06-1.jpg"],
    title: "",
    description: "Flax and craspedia flowers"
  },
  {
    id: "2025-05-10",
    date: "2025-05-10",
    book: 2,
    lesson: null, // TODO: fill in 1-20 once you know it
    images: ["images/book2/2025-05-10-1.jpg"],
    title: "",
    description: "Tulips, flower clusters and Queen Anne's lace"
  },
  {
    id: "2025-06-21",
    date: "2025-06-21",
    book: 2,
    lesson: null, // TODO: fill in 1-20 once you know it
    images: ["images/book2/2025-06-21-1.jpg"],
    title: "",
    description: "Garden roses and spirea"
  },
  {
    id: "2025-06-28",
    date: "2025-06-28",
    book: 2,
    lesson: null, // TODO: fill in 1-20 once you know it
    images: ["images/book2/2025-06-28-1.jpg", "images/book2/2025-06-28-2.jpg", "images/book2/2025-06-28-3.jpg"],
    title: "",
    description: "Anemones and sweet chestnut branches with spiky burs"
  },
  {
    id: "2025-07-12",
    date: "2025-07-12",
    book: 2,
    lesson: null, // TODO: fill in 1-20 once you know it
    images: ["images/book2/2025-07-12-2.jpg", "images/book2/2025-07-12-1.jpg"],
    title: "",
    description: "Blueberry branches, spirea and scabiosa pods"
  },
  {
    id: "2025-07-19",
    date: "2025-07-19",
    book: 2,
    lesson: null, // TODO: fill in 1-20 once you know it
    images: ["images/book2/2025-07-19-1.jpg"],
    title: "",
    description: "Roses and seeded eucalyptus"
  },
  {
    id: "2025-11-08",
    date: "2025-11-08",
    book: 2,
    lesson: null, // TODO: fill in 1-20 once you know it
    images: ["images/book2/2025-11-08-1.jpg"],
    title: "",
    description: "Dahlias, calla lilies, craspedia and leafy branches"
  },
  {
    id: "2025-11-15a",
    date: "2025-11-15",
    book: 2,
    lesson: null, // TODO: fill in 1-20 once you know it
    images: ["images/book2/2025-11-15-1.jpg"],
    title: "",
    description: "Fruit and vegetable centerpiece on ti leaves"
  },
  {
    id: "2025-11-15b",
    date: "2025-11-15",
    book: 2,
    lesson: null, // TODO: fill in 1-20 once you know it
    images: ["images/book2/2025-11-15-2.jpg"],
    title: "",
    description: "Single hydrangea bloom wrapped in a ti leaf"
  },
  {
    id: "2025-11-15c",
    date: "2025-11-15",
    book: 2,
    lesson: null, // TODO: fill in 1-20 once you know it
    images: ["images/book2/2025-11-15-3.jpg", "images/book2/2025-11-15-4.jpg", "images/book2/2025-11-15-5.jpg"],
    title: "",
    description: "Calla lilies, celosia and asparagus fern"
  },
  {
    id: "2025-11-16",
    date: "2025-11-16",
    book: "freestyle",
    lesson: null, // freestyle piece — not part of the Sogetsu curriculum
    images: ["images/book2/2025-11-16-1.jpg"],
    title: "",
    description: "Pompom chrysanthemums, curly willow branches and seeded eucalyptus"
  },
  {
    id: "2025-12-06",
    date: "2025-12-06",
    book: 2,
    lesson: null, // TODO: fill in 1-20 once you know it
    images: ["images/book2/2025-12-06-2.jpg", "images/book2/2025-12-06-1.jpg"],
    title: "",
    description: "Roses, chrysanthemums, nandina berries and cedar branches"
  },
  {
    id: "2025-12-13",
    date: "2025-12-13",
    book: 2,
    lesson: null, // TODO: fill in 1-20 once you know it
    images: ["images/book2/2025-12-13-1.jpg"],
    title: "",
    description: "Calla lilies and asparagus fern"
  },
  {
    id: "2026-02-15",
    date: "2026-02-15",
    book: 3,
    lesson: null, // TODO: fill in 1-20 once you know it
    images: ["images/book3/2026-02-15-1.jpg"],
    title: "",
    description: "Calla lilies and scabiosa"
  },
  {
    id: "2026-02-28a",
    date: "2026-02-28",
    book: 3,
    lesson: null, // TODO: fill in 1-20 once you know it
    images: ["images/book3/2026-02-28-1.jpg"],
    title: "",
    description: "Single tulip and wax-flower spray"
  },
  {
    id: "2026-02-28b",
    date: "2026-02-28",
    book: 3,
    lesson: null, // TODO: fill in 1-20 once you know it
    images: ["images/book3/2026-02-28-2.jpg"],
    title: "",
    description: "Tulips and garden roses"
  },
  {
    id: "2026-03-07",
    date: "2026-03-07",
    book: 3,
    lesson: null, // TODO: fill in 1-20 once you know it
    images: ["images/book3/2026-03-07-1.jpg"],
    title: "",
    description: "Spirea branches, a tulip and hellebores"
  },
  {
    id: "2026-03-14a",
    date: "2026-03-14",
    book: 3,
    lesson: null, // TODO: fill in 1-20 once you know it
    images: ["images/book3/2026-03-14-1.jpg"],
    title: "",
    description: "Flowering quince branches and pom flowers"
  },
  {
    id: "2026-03-14b",
    date: "2026-03-14",
    book: 3,
    lesson: null, // TODO: fill in 1-20 once you know it
    images: ["images/book3/2026-03-14-2.jpg"],
    title: "",
    description: "Tall allium seed heads"
  },
  {
    id: "2026-04-18",
    date: "2026-04-18",
    book: 3,
    lesson: null, // TODO: fill in 1-20 once you know it
    images: ["images/book3/2026-04-18-1.jpg"],
    title: "",
    description: "Hydrangea, roses and scabiosa"
  },
  {
    id: "2026-04-25a",
    date: "2026-04-25",
    book: 3,
    lesson: null, // TODO: fill in 1-20 once you know it
    images: ["images/book3/2026-04-25-1.jpg"],
    title: "",
    description: "Calla lilies and iris"
  },
  {
    id: "2026-04-25b",
    date: "2026-04-25",
    book: 3,
    lesson: null, // TODO: fill in 1-20 once you know it
    images: ["images/book3/2026-04-25-2.jpg"],
    title: "",
    description: "Sunflowers and curly willow branches"
  },
  {
    id: "2026-05-02a",
    date: "2026-05-02",
    book: 3,
    lesson: null, // TODO: fill in 1-20 once you know it
    images: ["images/book3/2026-05-02-1.jpg"],
    title: "",
    description: "Looping grass and clematis"
  },
  {
    id: "2026-05-02b",
    date: "2026-05-02",
    book: 3,
    lesson: null, // TODO: fill in 1-20 once you know it
    images: ["images/book3/2026-05-02-2.jpg"],
    title: "",
    description: "Banksia flower and eucalyptus"
  },
  {
    id: "2026-05-06",
    date: "2026-05-06",
    book: 3,
    lesson: null, // TODO: fill in 1-20 once you know it
    images: ["images/book3/2026-05-06-1.jpg"],
    title: "",
    description: "Hydrangea and pompom chrysanthemums"
  },
  {
    id: "2026-05-09",
    date: "2026-05-09",
    book: 3,
    lesson: null, // TODO: fill in 1-20 once you know it
    images: ["images/book3/2026-05-09-1.jpg"],
    title: "",
    description: "Hydrangea and curly willow branches"
  },
  {
    id: "2026-05-30a",
    date: "2026-05-30",
    book: 3,
    lesson: null, // TODO: fill in 1-20 once you know it
    images: ["images/book3/2026-05-30-1.jpg"],
    title: "",
    description: "Pitcher plants and curled ti leaves"
  },
  {
    id: "2026-05-30b",
    date: "2026-05-30",
    book: 3,
    lesson: null, // TODO: fill in 1-20 once you know it
    images: ["images/book3/2026-05-30-2.jpg", "images/book3/2026-05-30-3.jpg", "images/book3/2026-05-30-4.jpg", "images/book3/2026-05-30-5.jpg"],
    title: "",
    description: "Cosmos and curly vine"
  },
  {
    id: "2026-06-06a",
    date: "2026-06-06",
    book: 3,
    lesson: null, // TODO: fill in 1-20 once you know it
    images: ["images/book3/2026-06-06-1.jpg"],
    title: "",
    description: "Smoke bush plumes and looping leaf ribbons"
  },
  {
    id: "2026-06-06b",
    date: "2026-06-06",
    book: 3,
    lesson: null, // TODO: fill in 1-20 once you know it
    images: ["images/book3/2026-06-06-2.jpg"],
    title: "",
    description: "Red twig dogwood and smoke bush plumes"
  },
  {
    id: "2026-06-20a",
    date: "2026-06-20",
    book: 3,
    lesson: null, // TODO: fill in 1-20 once you know it
    images: ["images/book3/2026-06-20-1.jpg"],
    title: "",
    description: "Palm frond and small allium flowers"
  },
  {
    id: "2026-06-20b",
    date: "2026-06-20",
    book: 3,
    lesson: null, // TODO: fill in 1-20 once you know it
    images: ["images/book3/2026-06-20-5.jpg", "images/book3/2026-06-20-2.jpg", "images/book3/2026-06-20-3.jpg", "images/book3/2026-06-20-4.jpg"],
    title: "",
    description: "Roses, tulips and trailing jasmine vine"
  },
  {
    id: "2026-06-27",
    date: "2026-06-27",
    book: 3,
    lesson: null, // TODO: fill in 1-20 once you know it
    images: ["images/book3/2026-06-27-5.jpg", "images/book3/2026-06-27-2.jpg", "images/book3/2026-06-27-3.jpg", "images/book3/2026-06-27-4.jpg", "images/book3/2026-06-27-1.jpg"],
    title: "",
    description: "Dinnerplate dahlias and curly garlic scapes"
  }
];
