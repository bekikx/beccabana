// Japanese translations.
//
// Sogetsu/ikebana terminology below (kakei, moribana, nageire, risshin-gata,
// keishin-gata, ouyou, kengai, jiyuka, morimono, and the kyu certificate
// levels) was verified against the official Sogetsu school site
// (sogetsu.or.jp) and cross-referenced against independent Sogetsu
// curriculum sources — not machine-translated. Lesson names are built from
// those verified terms following the same pattern as the English names.
// Book 3's compositional topics (line/color/mass) were cross-checked too —
// confirmed phrases like 縦長・横長の構成, 直線・曲線の構成, 面の構成,
// 植物を編む, and 同じ形を繰り返す are used verbatim below. The official
// textbook's exact lesson-by-lesson wording isn't published anywhere
// public though, so a few Book 3 lines are still reasonable constructions
// from standard ikebana vocabulary rather than sourced verbatim — worth a
// native/sensei check if precision matters to you. Material (flower/
// branch) names were individually verified via web search against
// Japanese florist/botanical sources (not just machine-translated) —
// still worth a sensei's spot check on any that matter most to you.
// Punctuation in the Japanese text avoids em dashes and other English-only
// conventions in favor of natural Japanese sentence structure/punctuation
// (、。「」etc.), since a straight em dash reads as foreign in Japanese
// prose.

const LESSON_NAMES_JA = {
  1: [
    "基本立真型盛花",
    "基本立真型盛花",
    "基本立真型盛花（逆型）",
    "基本立真型投入れ",
    "基本立真型投入れ",
    "基本立真型投入れ（逆型）",
    "基本傾真型盛花",
    "基本傾真型盛花（逆型）",
    "基本傾真型投入れ",
    "基本傾真型投入れ（逆型）",
    "応用第一型立真型盛花",
    "応用第一型立真型投入れ",
    "応用第一型傾真型盛花",
    "応用第一型傾真型投入れ",
    "自由花",
    "応用第二型立真型盛花",
    "応用第二型立真型投入れ",
    "応用第二型傾真型盛花",
    "応用第二型傾真型投入れ",
    "特別花材と祝いの生け花"
  ],
  2: [
    "応用第三型立真型盛花",
    "応用第三型立真型投入れ",
    "応用第三型傾真型盛花",
    "応用第三型傾真型投入れ",
    "応用第四型立真型盛花",
    "応用第四型立真型投入れ",
    "応用第四型傾真型盛花",
    "応用第四型傾真型投入れ",
    "応用第四型懸崖投入れ",
    "自由花とスケッチ",
    "応用第五型立真型盛花",
    "応用第五型傾真型盛花",
    "応用第六型傾真型盛花",
    "応用第六型水平型盛花",
    "応用第六型水平型投入れ",
    "応用第七型：浮花・敷花・盛物",
    "応用第八型：盛花と盛花の取り合わせ",
    "応用第八型：盛花と投入れの取り合わせ",
    "応用第八型：投入れと投入れの取り合わせ",
    "特別花材と祝いの生け花"
  ],
  3: [
    "縦長の構成（盛花）",
    "横長の構成",
    "自由花・株分け（盛花）",
    "二つ以上の花器",
    "直線の構成",
    "曲線の構成",
    "直線と曲線の構成",
    "同一色調の色彩",
    "対照的な色彩",
    "花器の色彩",
    "花器の形",
    "塊の表現",
    "塊と線の構成（直線または曲線）",
    "葉による面の構成",
    "線の集合による面の構成",
    "植物を編む",
    "同じ形を繰り返す",
    "根元の線を見せる",
    "全方向から見る",
    "スケッチといけ方"
  ]
};

const BOOK_TITLES_JA = {
  1: "第1課程：花型（基本）",
  2: "第2課程：花型（応用）",
  3: "第3課程：構成と線・色・塊",
  freestyle: "自由花"
};

function lessonNameJa(book, lesson) {
  if (!lesson) return null;
  const names = LESSON_NAMES_JA[book];
  return names ? names[lesson - 1] : null;
}

// Material (flower/branch) descriptions, in the same "one clause per line"
// / "morimono: ... \n floating: ..." shape as the English descriptions.
// Keyed by piece id. Any piece not listed here just falls back to its
// English description when Japanese is selected.
const DESCRIPTIONS_JA = {
  "2024-01-27": "菊、猫柳",
  "2024-02-03": "プロテア、木瓜",
  "2024-02-10": "ラナンキュラス、花桃",
  "2024-02-24": "バラ、木瓜",
  "2024-03-02": "アネモネ、ベロニカ、枝物",
  "2024-07-13": "ダリア、モルセラ",
  "2024-07-20": "ダリア、銀梅花",
  "2024-07-27": "ダリア、銀梅花",
  "2024-08-03": "ラナンキュラス、ネリネ、パニカム",
  "2024-09-07a": "ラナンキュラス、ウンリュウヤナギ",
  "2024-09-07b": "ガーベラ、樫の枝",
  "2024-09-21": "ダリア、ウンリュウヤナギ",
  "2024-09-28": "ケイトウ、ウンリュウヤナギ",
  "2024-10-12a": "紫陽花、ニューサイラン、アンスリウム",
  "2024-10-12b": "クレマチス、ニゲラ",
  "2024-10-26": "スカビオサ、紅葉した楓",
  "2024-11-02": "バラ、楓",
  "2024-11-09a": "菊、芍薬、小花材",
  "2024-11-09b": "菊、ヒモゲイトウ",
  "2024-11-16a": "ヤシの葉、ユリ",
  "2024-11-16b": "ユリ、椿",
  "2025-02-22": "菊、花梨",
  "2025-03-01": "バラ、ミモザ",
  "2025-03-15a": "ラナンキュラス、桜の枝",
  "2025-03-15b": "バラ、桜の枝",
  "2025-03-22": "カラー、スピレア",
  "2025-04-12": "バタフライラナンキュラス、エニシダ",
  "2025-04-19": "梅の枝、スターチス",
  "2025-04-26": "フリージア、イタリアンルスカス",
  "2025-05-03": "アネモネ、スカビオサ、トクサ、アスパラガスファーン",
  "2025-05-06": "ニューサイラン、クラスペディア",
  "2025-05-10": "チューリップ、ソリダゴ、レースフラワー",
  "2025-06-21": "バラ、ヒペリカム、スピレア",
  "2025-06-28": "アネモネ、栗の枝、葉物",
  "2025-07-12": "スカビオサ、ブルーベリーの枝、葉物",
  "2025-07-19": "バラ、シードユーカリ",
  "2025-11-08": "ダリア、カラー、イタリアンルスカス、トウワタ",
  "2025-11-15": "盛物：かぼちゃ、きのこ、みかん、柿、アスパラガスファーン、葉蘭\n浮花：紫陽花、葉蘭\n敷花：カラー、ヒモゲイトウ、葉蘭、アスパラガスファーン",
  "2025-11-16": "菊、ウンリュウヤナギ、シードユーカリ",
  "2025-12-06a": "バラ、菊、南天の実、杉の枝",
  "2025-12-06b": "バラ、菊、南天の実、杉の枝",
  "2025-12-13": "カラー、ヒモゲイトウ、アスパラガスファーン",
  "2026-02-15": "カラー、スカビオサ",
  "2026-02-28a": "チューリップ、ワックスフラワー",
  "2026-02-28b": "チューリップ、バラ、ワックスフラワー",
  "2026-03-07": "スピレア、チューリップ、カスミソウ、クリスマスローズ",
  "2026-03-14a": "木瓜、スカビオサ",
  "2026-03-14b": "アリウム",
  "2026-04-18": "紫陽花、バラ、スカビオサ",
  "2026-04-25a": "カラー、クラスペディア、アイリス",
  "2026-04-25b": "ひまわり、ニューサイラン、ウンリュウヤナギ",
  "2026-05-02a": "ベアグラス、ヤブラン、クレマチス",
  "2026-05-02b": "バンクシア、ユーカリ",
  "2026-05-06": "紫陽花、菊",
  "2026-05-09": "紫陽花、ウンリュウヤナギ",
  "2026-05-30a": "ウツボカズラ、トロピカルリーフ、葉蘭",
  "2026-05-30b": "コスモス、ウンリュウヤナギ",
  "2026-06-06a": "スモークツリー、ニューサイラン",
  "2026-06-06b": "サンゴミズキ、菊、スモークツリー",
  "2026-06-20a": "ヤシの葉、小輪アリウム",
  "2026-06-20b": "バラ、チューリップ、ジャスミンの蔓"
};

const UI_STRINGS = {
  en: {
    navAbout: "About",
    navGallery: "Gallery",
    navContact: "Contact",
    heroKicker: "Ikebana Portfolio",
    heroSub: "Sogetsu-trained ikebana designer based in Philadelphia",
    aboutTitle: "About",
    aboutP1: "Becca is an Ikebana designer that has been studying the Sogetsu style since 2024. She currently holds a Third Certificate (Nikyu) under her sensei, Rachel Johnson, as part of the Soho Study Group. She began her practice in San Francisco and is currently based in Philadelphia.",
    aboutP2: "For Becca, Ikebana is more than an art form: it is a practice of intentionality. Each arrangement's beauty is found in the character of the material itself rather than in perfection — a way of seeing that has taught her to embrace imperfection, act with intention, and accept impermanence. Lessons that, in her experience, extend well beyond the studio.",
    aboutP3: "She believes that Ikebana is truly for anytime, anywhere, anything, and anyone.",
    galleryTitle: "Gallery",
    contactTitle: "Contact",
    contactText: "Interested in a commission, a class, or just want to say hello?",
    allArrangements: "All Arrangements",
    sortByLabel: "Sort by",
    sortDateDesc: "Date: Newest First",
    sortDateAsc: "Date: Oldest First",
    sortLessonAsc: "Lesson: Ascending",
    sortLessonDesc: "Lesson: Descending",
    lessonTBD: "Lesson TBD",
    freestyleArrangement: "Freestyle Arrangement",
    prev: "Prev",
    next: "Next",
    emptyState: "No pieces here yet.",
    photoUnavailable: "Photo unavailable",
    addYourPhoto: "Add your photo — images/profile/profile.jpg"
  },
  ja: {
    navAbout: "プロフィール",
    navGallery: "ギャラリー",
    navContact: "お問い合わせ",
    heroKicker: "生け花ポートフォリオ",
    heroSub: "草月流を学ぶ、フィラデルフィア在住の華道家",
    aboutTitle: "プロフィール",
    aboutP1: "百佳（ベッカ）は2024年から草月流いけばなを学んでいる華道家です。ソーホー・スタディ・グループの一員として、レイチェル・ジョンソン先生に師事し、現在二級の資格を取得しています。サンフランシスコで稽古を始め、現在はフィラデルフィアを拠点に活動しています。",
    aboutP2: "百佳にとって、いけばなは単なる芸術表現ではなく、意図を持って生きるための実践です。それぞれの作品の美しさは、完璧さではなく素材そのものが持つ個性の中にあります。そう捉えることで、不完全さを受け入れ、意図を持って行動し、無常を受け止めることを学んできました。それは稽古場だけにとどまらず、日々の生き方にも通じる教えです。",
    aboutP3: "いけばなは、いつでも、どこでも、何にでも、誰にでも開かれたものだと、百佳は信じています。",
    galleryTitle: "ギャラリー",
    contactTitle: "お問い合わせ",
    contactText: "作品のご依頼やレッスンのお問い合わせ、またはご挨拶など、お気軽にご連絡ください。",
    allArrangements: "すべての作品",
    sortByLabel: "並び替え",
    sortDateDesc: "日付：新しい順",
    sortDateAsc: "日付：古い順",
    sortLessonAsc: "課題：昇順",
    sortLessonDesc: "課題：降順",
    lessonTBD: "課題未定",
    freestyleArrangement: "自由花作品",
    prev: "前へ",
    next: "次へ",
    emptyState: "まだ作品がありません。",
    photoUnavailable: "写真がありません",
    addYourPhoto: "プロフィール写真を追加してください（images/profile/profile.jpg）"
  }
};
