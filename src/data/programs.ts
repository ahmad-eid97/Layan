import type { Program } from "./types"

export const programs: Program[] = [
  {
    id: 1,
    specialtyId: 1, // Medicine
    degreeId: 1,
    languageIds: [1, 2],
    logo: "/assets/images/report.png",
    studyYears: 6,
    priceStartAt: 12000,
    details: {
      en: "A six-year MD program with clinical rotations in university teaching hospitals starting from year three.",
      ar: "برنامج طب بشري مدته ست سنوات مع تدريب سريري في المستشفيات الجامعية بدءاً من السنة الثالثة.",
    },
    opportunities: {
      en: "Graduates qualify for residency programs in Turkey, Europe and the Gulf, or research careers in medical sciences.",
      ar: "يتأهل الخريجون لبرامج الإقامة الطبية في تركيا وأوروبا والخليج، أو لمسار بحثي في العلوم الطبية.",
    },
    offerings: [
      { universityId: 1, cost: 15000, sale: 12000, active: true },
      { universityId: 3, cost: 13500, active: true },
      { universityId: 4, cost: 12000, sale: 9800, active: true },
    ],
  },
  {
    id: 2,
    specialtyId: 2, // Dentistry
    degreeId: 1,
    languageIds: [1, 2],
    logo: "/assets/images/accept.png",
    studyYears: 5,
    priceStartAt: 9500,
    details: {
      en: "A five-year dentistry program with on-campus clinics where students treat real patients under supervision.",
      ar: "برنامج طب أسنان مدته خمس سنوات مع عيادات داخل الحرم الجامعي يعالج فيها الطلاب مرضى حقيقيين تحت الإشراف.",
    },
    opportunities: {
      en: "Work in private clinics, hospitals, or continue to orthodontics and implantology specializations.",
      ar: "العمل في العيادات الخاصة والمستشفيات، أو متابعة التخصص في تقويم الأسنان وزراعتها.",
    },
    offerings: [
      { universityId: 1, cost: 11000, active: true },
      { universityId: 3, cost: 9500, active: true },
    ],
  },
  {
    id: 3,
    specialtyId: 3, // Pharmacy
    degreeId: 1,
    languageIds: [1],
    logo: "/assets/images/discount.png",
    studyYears: 5,
    priceStartAt: 7000,
    details: {
      en: "A PharmD-track program covering pharmaceutical sciences, clinical pharmacy and industry internships.",
      ar: "برنامج صيدلة يغطي العلوم الصيدلانية والصيدلة السريرية مع تدريب في شركات الأدوية.",
    },
    opportunities: {
      en: "Careers in community and hospital pharmacy, drug manufacturing and regulatory affairs.",
      ar: "فرص عمل في الصيدليات والمستشفيات وتصنيع الأدوية والشؤون التنظيمية الدوائية.",
    },
    offerings: [
      { universityId: 3, cost: 8000, sale: 7000, active: true },
      { universityId: 4, cost: 7200, active: true },
    ],
  },
  {
    id: 4,
    specialtyId: 4, // Software Engineering
    degreeId: 1,
    languageIds: [1],
    logo: "/assets/images/plat1.png",
    studyYears: 4,
    priceStartAt: 4500,
    details: {
      en: "A hands-on software engineering degree covering web, mobile, cloud and AI, built around real projects every semester.",
      ar: "درجة هندسة برمجيات تطبيقية تغطي الويب والجوال والحوسبة السحابية والذكاء الاصطناعي، مع مشاريع حقيقية كل فصل دراسي.",
    },
    opportunities: {
      en: "Graduates join technology companies worldwide or launch startups through the campus incubator.",
      ar: "ينضم الخريجون إلى شركات التقنية حول العالم أو يطلقون شركاتهم الناشئة عبر حاضنة الجامعة.",
    },
    offerings: [
      { universityId: 2, cost: 6500, sale: 4500, active: true },
      { universityId: 7, cost: 4800, active: true },
      { universityId: 8, cost: 28000, active: true },
    ],
  },
  {
    id: 5,
    specialtyId: 5, // Civil Engineering
    degreeId: 1,
    languageIds: [1, 2],
    logo: "/assets/images/house.png",
    studyYears: 4,
    priceStartAt: 4000,
    details: {
      en: "Structural, geotechnical and transportation engineering with site training on active construction projects.",
      ar: "الهندسة الإنشائية والجيوتقنية وهندسة النقل مع تدريب ميداني في مشاريع إنشائية قائمة.",
    },
    opportunities: {
      en: "Roles in construction firms, infrastructure authorities and consulting offices across the region.",
      ar: "وظائف في شركات المقاولات وهيئات البنية التحتية والمكاتب الاستشارية في المنطقة.",
    },
    offerings: [
      { universityId: 2, cost: 5000, sale: 4000, active: true },
      { universityId: 6, cost: 4200, active: true },
      { universityId: 7, cost: 4500, active: false },
    ],
  },
  {
    id: 6,
    specialtyId: 6, // Business Administration
    degreeId: 1,
    languageIds: [1, 3],
    logo: "/assets/images/pay.png",
    studyYears: 4,
    priceStartAt: 3500,
    details: {
      en: "A BBA covering management, marketing, finance and entrepreneurship with a semester-long company placement.",
      ar: "بكالوريوس إدارة أعمال يغطي الإدارة والتسويق والمالية وريادة الأعمال مع فصل تدريبي كامل داخل الشركات.",
    },
    opportunities: {
      en: "Careers in banking, consulting, logistics and family business management.",
      ar: "مسارات مهنية في البنوك والاستشارات والخدمات اللوجستية وإدارة أعمال العائلة.",
    },
    offerings: [
      { universityId: 4, cost: 4000, sale: 3500, active: true },
      { universityId: 5, cost: 3800, active: true },
      { universityId: 1, cost: 6000, active: true },
    ],
  },
  {
    id: 7,
    specialtyId: 7, // Law
    degreeId: 1,
    languageIds: [3],
    logo: "/assets/images/form.png",
    studyYears: 4,
    priceStartAt: 3000,
    details: {
      en: "An Arabic-language LLB covering civil, criminal and international law with moot court training.",
      ar: "إجازة في القانون باللغة العربية تغطي القانون المدني والجنائي والدولي مع تدريب على المحاكم الصورية.",
    },
    opportunities: {
      en: "Pathways to the bar, judiciary, public prosecution and corporate legal departments.",
      ar: "مسارات نحو المحاماة والقضاء والنيابة العامة والإدارات القانونية للشركات.",
    },
    offerings: [
      { universityId: 6, cost: 3000, active: true },
      { universityId: 4, cost: 3600, active: true },
    ],
  },
  {
    id: 8,
    specialtyId: 8, // Graphic Design
    degreeId: 1,
    languageIds: [1],
    logo: "/assets/images/blog.png",
    studyYears: 4,
    priceStartAt: 3800,
    details: {
      en: "A studio-based design program spanning branding, motion graphics and UX, ending with a public portfolio show.",
      ar: "برنامج تصميم قائم على الاستوديو يشمل الهوية البصرية والموشن جرافيك وتجربة المستخدم، ويُختتم بمعرض علني لأعمال الطلاب.",
    },
    opportunities: {
      en: "Work in design studios, advertising agencies and product teams, or freelance internationally.",
      ar: "العمل في استوديوهات التصميم ووكالات الإعلان وفرق المنتجات، أو العمل الحر عالمياً.",
    },
    offerings: [
      { universityId: 5, cost: 4200, sale: 3800, active: true },
      { universityId: 1, cost: 5500, active: true },
    ],
  },
  {
    id: 9,
    specialtyId: 4, // Software Engineering — Master
    degreeId: 2,
    languageIds: [1],
    logo: "/assets/images/plat3.png",
    studyYears: 2,
    priceStartAt: 6000,
    details: {
      en: "A thesis or project-track MSc focusing on distributed systems, machine learning and software architecture.",
      ar: "ماجستير بمسار أطروحة أو مشروع يركّز على الأنظمة الموزعة وتعلم الآلة وهندسة البرمجيات.",
    },
    opportunities: {
      en: "Senior engineering roles, research positions and PhD admission at partner universities.",
      ar: "مناصب هندسية متقدمة ووظائف بحثية وقبول في برامج الدكتوراه لدى الجامعات الشريكة.",
    },
    offerings: [
      { universityId: 2, cost: 7500, sale: 6000, active: true },
      { universityId: 8, cost: 32000, active: true },
    ],
  },
  {
    id: 10,
    specialtyId: 6, // MBA
    degreeId: 2,
    languageIds: [1, 3],
    logo: "/assets/images/logistics.png",
    studyYears: 2,
    priceStartAt: 5500,
    details: {
      en: "An MBA with evening and weekend classes designed for working professionals, including a Gulf study tour.",
      ar: "ماجستير إدارة أعمال بمحاضرات مسائية ونهاية الأسبوع مصمم للمهنيين العاملين، ويشمل جولة دراسية في الخليج.",
    },
    opportunities: {
      en: "Leadership tracks in regional companies, banking and public administration.",
      ar: "مسارات قيادية في الشركات الإقليمية والقطاع المصرفي والإدارة العامة.",
    },
    offerings: [
      { universityId: 1, cost: 8000, active: true },
      { universityId: 4, cost: 5500, active: true },
      { universityId: 5, cost: 5800, active: false },
    ],
  },
  {
    id: 11,
    specialtyId: 1, // Medicine — PhD
    degreeId: 3,
    languageIds: [1],
    logo: "/assets/images/report2.png",
    studyYears: 4,
    priceStartAt: 10000,
    details: {
      en: "A research doctorate in medical sciences with access to two university hospitals and international co-supervision.",
      ar: "دكتوراه بحثية في العلوم الطبية مع إمكانية الوصول إلى مستشفيين جامعيين وإشراف مشترك دولي.",
    },
    opportunities: {
      en: "Academic careers, hospital research units and pharmaceutical R&D.",
      ar: "مسارات أكاديمية ووحدات البحث في المستشفيات والبحث والتطوير الدوائي.",
    },
    offerings: [{ universityId: 3, cost: 10000, active: true }],
  },
  {
    id: 12,
    specialtyId: 5, // Civil Engineering — Diploma
    degreeId: 4,
    languageIds: [2, 3],
    logo: "/assets/images/location.png",
    studyYears: 2,
    priceStartAt: 2000,
    details: {
      en: "A two-year technical diploma in construction supervision and surveying with immediate site placement.",
      ar: "دبلوم تقني لمدة سنتين في الإشراف الإنشائي والمساحة مع تدريب ميداني فوري.",
    },
    opportunities: {
      en: "Site supervisor and surveyor roles, with a bridge option into the bachelor program.",
      ar: "وظائف مشرف موقع ومسّاح، مع إمكانية التجسير إلى برنامج البكالوريوس.",
    },
    offerings: [
      { universityId: 6, cost: 2000, active: true },
      { universityId: 7, cost: 2400, active: true },
    ],
  },
]
