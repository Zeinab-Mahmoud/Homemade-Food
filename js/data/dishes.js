/**
 * ملف بيانات الأطباق - مطبخ بيتي
 * يمكن تعديل هذا الملف لتغيير أسماء الأطباق والأسعار والأوصاف والصور
 * 
 * الفئات المتاحة: main | dessert | side
 * ملاحظة: الأسعار تقريبية بالجنيه المصري وقابلة للتعديل
 */

const dishes = [
  // ──────────────────────────────────────────
  // الأطباق الرئيسية
  // ──────────────────────────────────────────
  {
    id: 1,
    name: "كشري",
    description: "الكشري المصري الأصيل بالمكرونة والأرز والعدس وصلصة الطماطم الحارة والبصل المقلي المقرمش.",
    price: 35,
    category: "main",
    image: "img/24deeead272e44f4c5bd1ab0a83ff77a.jpg",
    featured: true
  },
  {
    id: 2,
    name: "دجاج محمر بالفرن",
    description: "دجاج كامل محشو مشوي في الفرن مع البطاطس والجزر والأعشاب العطرية بأسلوب بيتي مميز.",
    price: 120,
    category: "main",
    image: "img/334fc4b4cb6515b4bf5ece904a29e129.jpg",
    featured: true
  },
  {
    id: 3,
    name: "دجاج تنوري",
    description: "أرباع دجاج متبّلة بتتبيلة التنور الشرقية ومشوية في الفرن حتى يتحمر الجلد ويصبح مقرمشاً.",
    price: 90,
    category: "main",
    image: "img/426d88066d62ef27c68ec1722fd0a10c.jpg",
    featured: true
  },
  {
    id: 4,
    name: "بامية باللحم",
    description: "بامية طازجة مطهوة مع قطع اللحم والطماطم والبهارات في صلصة غنية الطعم.",
    price: 85,
    category: "main",
    image: "img/3f44b2c7ad7cb54917a9d6abfda4cac7.jpg",
    featured: false
  },
  {
    id: 5,
    name: "محشي ورق عنب",
    description: "أوراق عنب محشوة بالأرز والخضروات والبهارات، مطهوة على البخار وتقدم مع الزبادي.",
    price: 70,
    category: "main",
    image: "img/54c8a9dce8ca4d42a3f3c4aa22c5c4c2.jpg",
    featured: false
  },
  {
    id: 6,
    name: "محشي كرنب",
    description: "أوراق كرنب محكمة الحشو بالأرز واللحم والبهارات، مطهوة بصلصة الطماطم.",
    price: 75,
    category: "main",
    image: "img/2e883a411013c6fda8f58cbfb9b96a57.jpg",
    featured: false
  },
  {
    id: 7,
    name: "محشي مشكل",
    description: "طبق محشي متنوع يجمع ورق عنب وكوسة وفلفل ألوان، مقدّم في طبق واحد بصلصة لذيذة.",
    price: 95,
    category: "main",
    image: "img/c80818a0f6321e34206733f45aa3f609.jpg",
    featured: true
  },
  {
    id: 8,
    name: "محشي فلفل وكرنب",
    description: "فلفل أخضر محشو بالأرز واللحم مع لفائف الكرنب، طبق بيتي دافئ وشهي.",
    price: 80,
    category: "main",
    image: "img/3ea24cd8a14709775f63cb72baaf9afb.jpg",
    featured: false
  },
  {
    id: 9,
    name: "فتة باللحم",
    description: "فتة مصرية كلاسيكية بالأرز والخبز المقلي وقطع اللحم والصلصة الحمراء، طبق احتفالي بامتياز.",
    price: 110,
    category: "main",
    image: "img/e1d708aca0993a9cafc2519a1babd7f0.jpg",
    featured: true
  },
  {
    id: 10,
    name: "إسكالوب",
    description: "شرائح لحم مفروم متبّلة ومغطاة ببقسماط مقرمش، تقدم مع البقدونس وشرائح الليمون.",
    price: 95,
    category: "main",
    image: "img/da300fd1eff2bcfa053e64efb889d08b.jpg",
    featured: false
  },
  {
    id: 11,
    name: "حواوشي",
    description: "خبز عيش مصري محشو باللحم المفروم المتبل بالبصل والفلفل والبهارات، مخبوز حتى يتقرمش.",
    price: 55,
    category: "main",
    image: "img/8088c139c9f7783a0720f1c321008fc5.jpg",
    featured: false
  },
  {
    id: 12,
    name: "حمام مشوي",
    description: "حمام كامل مشوي بتتبيلة الزبدة والأعشاب، طبق فاخر بنكهة بيتية أصيلة.",
    price: 130,
    category: "main",
    image: "img/ef4007619601539e4649b824f2c0351c.jpg",
    featured: false
  },
  {
    id: 13,
    name: "سمك مشوي",
    description: "سمك طازج متبّل ومشوي على الحريق، يقدم مع صلصة التتبيل والخضروات المشوية.",
    price: 140,
    category: "main",
    image: "img/aad888d54a4af7a7ed5d00c23cc2d600.jpg",
    featured: false
  },
  {
    id: 14,
    name: "ساندوتش لحم",
    description: "باغيت فرنسي محشو بشرائح اللحم المشوية والفلفل الأخضر، يقدم مع الشيبس المقرمش.",
    price: 65,
    category: "main",
    image: "img/6f53cd64d76195b315b2864bb5fb0d7a.jpg",
    featured: false
  },
  {
    id: 15,
    name: "رابت دجاج",
    description: "لفائف تورتيلا محشوة بالدجاج المفروم والجبن والصلصة، مشوية حتى تتحمر من الخارج.",
    price: 60,
    category: "main",
    image: "img/c134b31528fe3371666952ce5bc0ffef.jpg",
    featured: false
  },
  {
    id: 16,
    name: "بيتزا مشكلة",
    description: "بيتزا بيتية صغيرة الحجم بطعم كبير، محملة بالجبن والفطر والفلفل والزيتون.",
    price: 75,
    category: "main",
    image: "img/674079d70e634c7374e5380ff3f542aa.jpg",
    featured: false
  },
  {
    id: 17,
    name: "بيتزا كاملة",
    description: "بيتزا إيطالية بيتية المقاس الكامل بعجينة طازجة وتشكيلة من المكملات والجبن السائل.",
    price: 110,
    category: "main",
    image: "img/879377e63e47c7ca25f4062a21984acf.jpg",
    featured: false
  },

  // ──────────────────────────────────────────
  // الحلويات
  // ──────────────────────────────────────────
  {
    id: 18,
    name: "أم علي",
    description: "حلوى مصرية دافئة من الفطير والقشدة والمكسرات والزبيب، محمرة في الفرن لتعطي قوام لا يُقاوَم.",
    price: 45,
    category: "dessert",
    image: "img/0da55c202deab7cc8d14e49185a69dbf.jpg",
    featured: true
  },
  {
    id: 19,
    name: "لقيمات",
    description: "كرات عجين مقلية مغموسة في العسل ومزيّنة بالفستق الحلبي، حلوى شرقية أصيلة.",
    price: 35,
    category: "dessert",
    image: "img/38b3c0d6bcb59cf06ebb398cac6c17fd.jpg",
    featured: true
  },
  {
    id: 20,
    name: "كنافة",
    description: "كنافة بالجبن القشطاوية مقرمشة من الخارج وطرية من الداخل، مغموسة في القطر اللذيذ.",
    price: 50,
    category: "dessert",
    image: "img/5cdfd158ba8b7b68cd41d734e1b2b153.jpg",
    featured: true
  },
  {
    id: 21,
    name: "تريفل شوكولاتة",
    description: "طبق تريفل فاخر بطبقات الشوكولاتة والقشدة والبسكويت والموز، حلوى عصرية بلمسة بيتية.",
    price: 55,
    category: "dessert",
    image: "img/65e9f6e00b241fb1f6ee9e7c91117538.jpg",
    featured: false
  },
  {
    id: 22,
    name: "حلويات مشكلة",
    description: "صندوق حلويات متنوع يشمل تلاوة ولقيمات وكنافة، مثالي للمناسبات والضيافة.",
    price: 80,
    category: "dessert",
    image: "img/7e6c71951dbd352458892eb3052ebbf4.jpg",
    featured: false
  },

  // ──────────────────────────────────────────
  // السلطات والمقبلات
  // ──────────────────────────────────────────
  {
    id: 23,
    name: "سلطة فواكه",
    description: "تشكيلة فواكه طازجة طازجة من الموز والعنب والبرتقال والعنب الأحمر، صحية ومنعشة.",
    price: 30,
    category: "side",
    image: "img/5f7c31283e90406a4210378eaa54f829.jpg",
    featured: false
  },
  {
    id: 24,
    name: "سلطة فواكه بالقشطة",
    description: "سلطة فواكه ملوّنة بالفراولة والتوت والبرتقال والمارشميلو في قشدة لذيذة.",
    price: 40,
    category: "side",
    image: "img/4421e94b619c52cd58a046a1b1a826fd.jpg",
    featured: false
  }
];

// تصنيفات الأطباق مع الأسماء العربية
const categories = [
  { id: "all",     label: "الكل" },
  { id: "main",    label: "الأطباق الرئيسية" },
  { id: "dessert", label: "الحلويات" },
  { id: "side",    label: "السلطات والمقبلات" }
];

// تصدير البيانات
if (typeof module !== "undefined") {
  module.exports = { dishes, categories };
}
