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
    lesson: 1, // TODO: fill in 1-20 once you know it — this is your very first arrangement
    images: ["images/book1/2024-01-27-1.jpg"],
    title: "",
    description: "chrysanthemum, pussy willow"
  },
  {
    id: "2024-02-03",
    date: "2024-02-03",
    book: 1,
    lesson: 2, // TODO: fill in 1-20 once you know it
    images: ["images/book1/2024-02-03-1.jpg"],
    title: "",
    description: "protea, flowering quince"
  },
  {
    id: "2024-02-10",
    date: "2024-02-10",
    book: 1,
    lesson: 4, // TODO: fill in 1-20 once you know it
    images: ["images/book1/2024-02-10-1.jpg"],
    title: "",
    description: "ranunculus, flowering almond"
  },
  {
    id: "2024-02-24",
    date: "2024-02-24",
    book: 1,
    lesson: 7, // TODO: fill in 1-20 once you know it
    images: ["images/book1/2024-02-24-1.jpg"],
    title: "",
    description: "garden rose, flowering quince"
  },
  {
    id: "2024-03-02",
    date: "2024-03-02",
    book: 1,
    lesson: 9, // TODO: fill in 1-20 once you know it
    images: ["images/book1/2024-03-02-1.jpg"],
    title: "",
    description: "anemone, veronica, branch"
  },
  {
    id: "2024-07-13",
    date: "2024-07-13",
    book: 1,
    lesson: 3, // TODO: fill in 1-20 once you know it
    images: ["images/book1/2024-07-13-1.jpg"],
    title: "",
    description: "dahlia, bells of ireland"
  },
  {
    id: "2024-07-20",
    date: "2024-07-20",
    book: 1,
    lesson: 5, // TODO: fill in 1-20 once you know it
    images: ["images/book1/2024-07-20-1.jpg"],
    title: "",
    description: "dahlia, myrtle"
  },
  {
    id: "2024-07-27",
    date: "2024-07-27",
    book: 1,
    lesson: 6, // TODO: fill in 1-20 once you know it
    images: ["images/book1/2024-07-27-1.jpg"],
    title: "",
    description: "dahlia, myrtle"
  },
  {
    id: "2024-08-03",
    date: "2024-08-03",
    book: 1,
    lesson: 8, // TODO: fill in 1-20 once you know it
    images: ["images/book1/2024-08-03-1.jpg"],
    title: "",
    description: "ranunculus, nerine lily, exploding grass"
  },
  {
    id: "2024-09-07a",
    date: "2024-09-07",
    book: 1,
    lesson: 11, // TODO: fill in 1-20 once you know it
    images: ["images/book1/2024-09-07-1.jpg"],
    title: "",
    description: "ranunculus, curly willow"
  },
  {
    id: "2024-09-07b",
    date: "2024-09-07",
    book: 1,
    lesson: 12, // TODO: fill in 1-20 once you know it
    images: ["images/book1/2024-09-07-2.jpg"],
    title: "",
    description: "gerbera daisy, oak branch"
  },
  {
    id: "2024-09-21",
    date: "2024-09-21",
    book: 1,
    lesson: 13, // TODO: fill in 1-20 once you know it
    images: ["images/book1/2024-09-21-1.jpg"],
    title: "",
    description: "dahlia, curly willow"
  },
  {
    id: "2024-09-28",
    date: "2024-09-28",
    book: 1,
    lesson: 14, // TODO: fill in 1-20 once you know it
    images: ["images/book1/2024-09-28-1.jpg"],
    title: "",
    description: "celosia, curly willow"
  },
  {
    id: "2024-10-12a",
    date: "2024-10-12",
    book: 1,
    lesson: 15, // TODO: fill in 1-20 once you know it
    images: ["images/book1/2024-10-12-1.jpg"],
    title: "",
    description: "hydrangea, flax, anthurium"
  },
  {
    id: "2024-10-12b",
    date: "2024-10-12",
    book: 1,
    lesson: 16, // TODO: fill in 1-20 once you know it
    images: ["images/book1/2024-10-12-2.jpg"],
    title: "",
    description: "clematis, fennel flower"
  },
  {
    id: "2024-10-26",
    date: "2024-10-26",
    book: 1,
    lesson: 18, // TODO: fill in 1-20 once you know it
    images: ["images/book1/2024-10-26-1.jpg"],
    title: "",
    description: "scabiosa, japanese maple"
  },
  {
    id: "2024-11-02",
    date: "2024-11-02",
    book: 1,
    lesson: 19, // TODO: fill in 1-20 once you know it
    images: ["images/book1/2024-11-02-1.jpg"],
    title: "",
    description: "garden rose, maple"
  },
  {
    id: "2024-11-09a",
    date: "2024-11-09",
    book: 1,
    lesson: 20, // TODO: fill in 1-20 once you know it
    images: ["images/book1/2024-11-09-1.jpg"],
    title: "",
    description: "chrysanthemum, peony, small flowering branch"
  },
  {
    id: "2024-11-09b",
    date: "2024-11-09",
    book: 1,
    lesson: 20, // TODO: fill in 1-20 once you know it
    images: ["images/book1/2024-11-09-2.jpg"],
    title: "",
    description: "chrysanthemum, trailing amaranth"
  },
  {
    id: "2024-11-16a",
    date: "2024-11-16",
    book: "freestyle",
    lesson: null, // freestyle piece — not part of the Sogetsu curriculum
    images: ["images/book1/2024-11-16-1.jpg"],
    title: "",
    description: "manipulated palm leaf, lily"
  },
  {
    id: "2024-11-16b",
    date: "2024-11-16",
    book: 2,
    lesson: 1, // TODO: fill in 1-20 once you know it
    images: ["images/book1/2024-11-16-2.jpg"],
    title: "",
    description: "lily, camellia branch"
  },
  {
    id: "2025-02-22",
    date: "2025-02-22",
    book: 2,
    lesson: 2, // TODO: fill in 1-20 once you know it
    images: ["images/book2/2025-02-22-1.jpg"],
    title: "",
    description: "chrysanthemum, quince"
  },
  {
    id: "2025-03-01",
    date: "2025-03-01",
    book: 2,
    lesson: 3, // TODO: fill in 1-20 once you know it
    images: ["images/book2/2025-03-01-1.jpg"],
    title: "",
    description: "garden rose, mimosa branch"
  },
  {
    id: "2025-03-15a",
    date: "2025-03-15",
    book: 2,
    lesson: 5, // TODO: fill in 1-20 once you know it
    images: ["images/book2/2025-03-15-1.jpg"],
    title: "",
    description: "ranunculus, cherry blossom branch"
  },
  {
    id: "2025-03-15b",
    date: "2025-03-15",
    book: 2,
    lesson: 4, // TODO: fill in 1-20 once you know it
    images: ["images/book2/2025-03-15-2.jpg"],
    title: "",
    description: "rose, cherry blossom branch"
  },
  {
    id: "2025-03-22",
    date: "2025-03-22",
    book: 2,
    lesson: 8, // TODO: fill in 1-20 once you know it
    images: ["images/book2/2025-03-22-1.jpg"],
    title: "",
    description: "calla lily, spirea"
  },
  {
    id: "2025-04-12",
    date: "2025-04-12",
    book: 2,
    lesson: 6, // TODO: fill in 1-20 once you know it
    images: ["images/book2/2025-04-12-1.jpg"],
    title: "",
    description: "butterfly ranunculus, scotch broom"
  },
  {
    id: "2025-04-19",
    date: "2025-04-19",
    book: 2,
    lesson: 7, // TODO: fill in 1-20 once you know it
    images: ["images/book2/2025-04-19-1.jpg"],
    title: "",
    description: "plum branch, statice"
  },
  {
    id: "2025-04-26",
    date: "2025-04-26",
    book: 2,
    lesson: 9, // TODO: fill in 1-20 once you know it
    images: ["images/book2/2025-04-26-1.jpg"],
    title: "",
    description: "freesia, italian ruscus"
  },
  {
    id: "2025-05-03",
    date: "2025-05-03",
    book: 2,
    lesson: 10, // TODO: fill in 1-20 once you know it
    images: ["images/book2/2025-05-03-1.jpg"],
    title: "",
    description: "anemone, scabiosa, asparagus fern, horsetail"
  },
  {
    id: "2025-05-06",
    date: "2025-05-06",
    book: "freestyle",
    lesson: null, // freestyle piece — not part of the Sogetsu curriculum
    images: ["images/book2/2025-05-06-1.jpg"],
    title: "",
    description: "flax, painted billy balls"
  },
  {
    id: "2025-05-10",
    date: "2025-05-10",
    book: 2,
    lesson: 11, // TODO: fill in 1-20 once you know it
    images: ["images/book2/2025-05-10-1.jpg"],
    title: "",
    description: "tulip, goldenrod, queen anne's lace"
  },
  {
    id: "2025-06-21",
    date: "2025-06-21",
    book: 2,
    lesson: 12, // TODO: fill in 1-20 once you know it
    images: ["images/book2/2025-06-21-1.jpg"],
    title: "",
    description: "garden rose, hypericum berry, spirea"
  },
  {
    id: "2025-06-28",
    date: "2025-06-28",
    book: 2,
    lesson: 13, // TODO: fill in 1-20 once you know it
    images: ["images/book2/2025-06-28-1.jpg", "images/book2/2025-06-28-2.jpg", "images/book2/2025-06-28-3.jpg"],
    title: "",
    description: "anemone, sweet chestnut branch, green foliage"
  },
  {
    id: "2025-07-12",
    date: "2025-07-12",
    book: 2,
    lesson: 14, // TODO: fill in 1-20 once you know it
    images: ["images/book2/2025-07-12-2.jpg", "images/book2/2025-07-12-1.jpg"],
    title: "",
    description: "scabiosa, blueberry branch, green foliage"
  },
  {
    id: "2025-07-19",
    date: "2025-07-19",
    book: 2,
    lesson: 15, // TODO: fill in 1-20 once you know it
    images: ["images/book2/2025-07-19-1.jpg"],
    title: "",
    description: "rose, seeded eucalyptus"
  },
  {
    id: "2025-11-08",
    date: "2025-11-08",
    book: 2,
    lesson: 17, // TODO: fill in 1-20 once you know it
    images: ["images/book2/2025-11-08-1.jpg"],
    title: "",
    description: "dahlia, calla lily, italian ruscus, milkweed"
  },
  {
    id: "2025-11-15",
    date: "2025-11-15",
    book: 2,
    lesson: 16,
    images: ["images/book2/2025-11-15-1.jpg", "images/book2/2025-11-15-2.jpg", "images/book2/2025-11-15-3.jpg", "images/book2/2025-11-15-4.jpg", "images/book2/2025-11-15-5.jpg"],
    title: "",
    description: "morimono: squash, mushroom, tangerine, persimmon, asparagus fern, ti leaf\nfloating: hydrangea, ti leaf\nspreading: calla lily, amaranth, ti leaf, asparagus fern"
  },
  {
    id: "2025-11-16",
    date: "2025-11-16",
    book: "freestyle",
    lesson: null, // freestyle piece — not part of the Sogetsu curriculum
    images: ["images/book2/2025-11-16-1.jpg"],
    title: "",
    description: "chrysanthemum, curly willow, seeded eucalyptus"
  },
  {
    id: "2025-12-06a",
    date: "2025-12-06",
    book: 2,
    lesson: 18,
    images: ["images/book2/2025-12-06-2.jpg"],
    title: "",
    description: "rose, chrysanthemum, nandina berry, cedar branch"
  },
  {
    id: "2025-12-06b",
    date: "2025-12-06",
    book: 2,
    lesson: 19,
    images: ["images/book2/2025-12-06-1.jpg"],
    title: "",
    description: "rose, chrysanthemum, nandina berry, cedar branch"
  },
  {
    id: "2025-12-13",
    date: "2025-12-13",
    book: 2,
    lesson: 20, // TODO: fill in 1-20 once you know it
    images: ["images/book2/2025-12-13-1.jpg"],
    title: "",
    description: "calla lily, amaranth, asparagus fern"
  },
  {
    id: "2026-02-15",
    date: "2026-02-15",
    book: 3,
    lesson: 1, // TODO: fill in 1-20 once you know it
    images: ["images/book3/2026-02-15-1.jpg"],
    title: "",
    description: "calla lily, scabiosa fama"
  },
  {
    id: "2026-02-28a",
    date: "2026-02-28",
    book: 3,
    lesson: 2, // TODO: fill in 1-20 once you know it
    images: ["images/book3/2026-02-28-1.jpg"],
    title: "",
    description: "tulip, wax-flower spray"
  },
  {
    id: "2026-02-28b",
    date: "2026-02-28",
    book: 3,
    lesson: 3, // TODO: fill in 1-20 once you know it
    images: ["images/book3/2026-02-28-2.jpg"],
    title: "",
    description: "tulip, garden rose, wax-flower spray"
  },
  {
    id: "2026-03-07",
    date: "2026-03-07",
    book: 3,
    lesson: 4, // TODO: fill in 1-20 once you know it
    images: ["images/book3/2026-03-07-1.jpg"],
    title: "",
    description: "spirea, tulip, million star baby's breath, hellebore"
  },
  {
    id: "2026-03-14a",
    date: "2026-03-14",
    book: 3,
    lesson: 6, // TODO: fill in 1-20 once you know it
    images: ["images/book3/2026-03-14-1.jpg"],
    title: "",
    description: "flowering quince branch, scabiosa"
  },
  {
    id: "2026-03-14b",
    date: "2026-03-14",
    book: 3,
    lesson: 5, // TODO: fill in 1-20 once you know it
    images: ["images/book3/2026-03-14-2.jpg"],
    title: "",
    description: "allium"
  },
  {
    id: "2026-04-18",
    date: "2026-04-18",
    book: 3,
    lesson: 8, // TODO: fill in 1-20 once you know it
    images: ["images/book3/2026-04-18-1.jpg"],
    title: "",
    description: "hydrangea, rose, scabiosa"
  },
  {
    id: "2026-04-25a",
    date: "2026-04-25",
    book: 3,
    lesson: 9, // TODO: fill in 1-20 once you know it
    images: ["images/book3/2026-04-25-1.jpg"],
    title: "",
    description: "calla lily, billy balls, iris"
  },
  {
    id: "2026-04-25b",
    date: "2026-04-25",
    book: 3,
    lesson: 7, // TODO: fill in 1-20 once you know it
    images: ["images/book3/2026-04-25-2.jpg"],
    title: "",
    description: "sunflower, flax, curly willow"
  },
  {
    id: "2026-05-02a",
    date: "2026-05-02",
    book: 3,
    lesson: 11, // TODO: fill in 1-20 once you know it
    images: ["images/book3/2026-05-02-1.jpg"],
    title: "",
    description: "bear grass, lily grass, clematis"
  },
  {
    id: "2026-05-02b",
    date: "2026-05-02",
    book: 3,
    lesson: 10, // TODO: fill in 1-20 once you know it
    images: ["images/book3/2026-05-02-2.jpg"],
    title: "",
    description: "banksia flower, eucalyptus"
  },
  {
    id: "2026-05-06",
    date: "2026-05-06",
    book: 3,
    lesson: 12, // TODO: fill in 1-20 once you know it
    images: ["images/book3/2026-05-06-1.jpg"],
    title: "",
    description: "hydrangea, chrysanthemum"
  },
  {
    id: "2026-05-09",
    date: "2026-05-09",
    book: 3,
    lesson: 13, // TODO: fill in 1-20 once you know it
    images: ["images/book3/2026-05-09-1.jpg"],
    title: "",
    description: "hydrangea, curly willow"
  },
  {
    id: "2026-05-30a",
    date: "2026-05-30",
    book: 3,
    lesson: 14, // TODO: fill in 1-20 once you know it
    images: ["images/book3/2026-05-30-1.jpg"],
    title: "",
    description: "pitcher plant, tropical leaf, ti leaf"
  },
  {
    id: "2026-05-30b",
    date: "2026-05-30",
    book: 3,
    lesson: 16, // TODO: fill in 1-20 once you know it
    images: ["images/book3/2026-05-30-2.jpg", "images/book3/2026-05-30-3.jpg", "images/book3/2026-05-30-4.jpg", "images/book3/2026-05-30-5.jpg"],
    title: "",
    description: "cosmos, curly willow"
  },
  {
    id: "2026-06-06a",
    date: "2026-06-06",
    book: 3,
    lesson: 17, // TODO: fill in 1-20 once you know it
    images: ["images/book3/2026-06-06-1.jpg"],
    title: "",
    description: "smoke bush, flax"
  },
  {
    id: "2026-06-06b",
    date: "2026-06-06",
    book: 3,
    lesson: 15, // TODO: fill in 1-20 once you know it
    images: ["images/book3/2026-06-06-2.jpg"],
    title: "",
    description: "red twig dogwood, chrysanthemum, smoke bush"
  },
  {
    id: "2026-06-20a",
    date: "2026-06-20",
    book: 3,
    lesson: 18, // TODO: fill in 1-20 once you know it
    images: ["images/book3/2026-06-20-1.jpg"],
    title: "",
    description: "palm frond, small allium flower"
  },
  {
    id: "2026-06-20b",
    date: "2026-06-20",
    book: 3,
    lesson: 19, // TODO: fill in 1-20 once you know it
    images: ["images/book3/2026-06-20-5.jpg", "images/book3/2026-06-20-2.jpg", "images/book3/2026-06-20-3.jpg", "images/book3/2026-06-20-4.jpg"],
    title: "",
    description: "rose, tulip, trailing jasmine vine"
  },
  {
    id: "2026-06-27",
    date: "2026-06-27",
    book: 3,
    lesson: 20, // TODO: fill in 1-20 once you know it
    images: ["images/book3/2026-06-27-5.jpg", "images/book3/2026-06-27-2.jpg", "images/book3/2026-06-27-3.jpg", "images/book3/2026-06-27-4.jpg", "images/book3/2026-06-27-1.jpg"],
    title: "",
    description: "dahlia, curly garlic scape"
  }
];
