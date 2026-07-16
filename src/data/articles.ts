import type { Article } from "./types"

export const blogs: Article[] = [
  {
    id: 1,
    title: {
      en: "Studying in Turkey: the complete 2026 guide",
      ar: "الدراسة في تركيا: الدليل الشامل 2026",
    },
    excerpt: {
      en: "Costs, best cities, language requirements and how the application timeline actually works.",
      ar: "التكاليف وأفضل المدن ومتطلبات اللغة وكيف يسير الجدول الزمني للتقديم فعلياً.",
    },
    body: {
      en: "Turkey has become one of the most popular destinations for international students, combining European-standard education with living costs far below Western Europe. Private university tuition ranges from $3,000 to $15,000 per year depending on the specialty, with medicine at the top and business programs at the entry level.\n\nIstanbul hosts the largest number of universities, but Ankara and Izmir offer quieter campuses and cheaper accommodation. Most private universities teach in English and require no Turkish at admission — you can add a preparatory TÖMER year if you prefer a Turkish-taught track.\n\nThe application itself is simpler than most students expect: a passport, a translated high-school certificate and a personal photo are enough to receive an initial acceptance from most private universities within two weeks.",
      ar: "أصبحت تركيا واحدة من أكثر الوجهات شعبية للطلاب الدوليين، فهي تجمع بين تعليم بمعايير أوروبية وتكاليف معيشة أقل بكثير من أوروبا الغربية. تتراوح رسوم الجامعات الخاصة بين 3,000 و15,000 دولار سنوياً حسب التخصص، حيث يتصدر الطب القائمة بينما تبدأ برامج إدارة الأعمال من الحد الأدنى.\n\nتضم إسطنبول العدد الأكبر من الجامعات، لكن أنقرة وإزمير توفران حرماً جامعياً أهدأ وسكناً أرخص. تُدرّس معظم الجامعات الخاصة بالإنجليزية ولا تشترط التركية عند القبول — ويمكنك إضافة سنة تحضيرية (تومر) إذا فضّلت المسار التركي.\n\nأما التقديم نفسه فأبسط مما يتوقع معظم الطلاب: جواز سفر وشهادة ثانوية مترجمة وصورة شخصية تكفي للحصول على قبول مبدئي من معظم الجامعات الخاصة خلال أسبوعين.",
    },
    image: "/assets/images/blog-turkey.jpg",
    date: "2026-05-12",
    author: "Layan Team",
    categories: [
      { en: "Study Guides", ar: "أدلة الدراسة" },
      { en: "Turkey", ar: "تركيا" },
    ],
    comments: [
      {
        name: "Mohammed",
        message: "Very helpful, especially the part about TÖMER. Thank you!",
        date: "2026-05-14",
      },
      {
        name: "Aya",
        message: "هل تنطبق نفس الشروط على طلاب الماجستير؟",
        date: "2026-05-16",
      },
    ],
  },
  {
    id: 2,
    title: {
      en: "Medicine vs. dentistry: which one is right for you?",
      ar: "الطب البشري أم طب الأسنان: أيهما الأنسب لك؟",
    },
    excerpt: {
      en: "Study years, tuition, residency paths and daily working life — an honest comparison.",
      ar: "سنوات الدراسة والرسوم ومسارات الاختصاص وطبيعة العمل اليومي — مقارنة صريحة.",
    },
    body: {
      en: "Both fields open doors to prestigious, stable careers — but they differ more than most applicants realize. Medicine takes six years plus residency, while dentistry is five years and you can practice immediately after graduation.\n\nFinancially, dentistry reaches profitability sooner: a dental graduate can open a private clinic within a few years. Medicine offers broader specialization options and international mobility, especially with European residency exams.\n\nOur advice: shadow a doctor and a dentist for one day each before deciding. The daily reality of each profession matters more than the title.",
      ar: "كلا المجالين يفتح أبواباً لمهن مرموقة ومستقرة — لكنهما يختلفان أكثر مما يدرك معظم المتقدمين. يستغرق الطب البشري ست سنوات إضافة إلى الاختصاص، بينما يستغرق طب الأسنان خمس سنوات ويمكنك الممارسة فور التخرج.\n\nمالياً، يصل طب الأسنان إلى الربحية أسرع: يستطيع خريج طب الأسنان افتتاح عيادة خاصة خلال سنوات قليلة. أما الطب البشري فيوفر خيارات تخصص أوسع وحراكاً دولياً أكبر، خصوصاً مع امتحانات الاختصاص الأوروبية.\n\nنصيحتنا: رافق طبيباً وطبيب أسنان ليوم واحد لكل منهما قبل اتخاذ القرار. الواقع اليومي لكل مهنة أهم من اللقب.",
    },
    image: "/assets/images/blog-dentistry.jpg",
    date: "2026-04-28",
    author: "Dr. Rana Aziz",
    categories: [{ en: "Specialties", ar: "التخصصات" }],
    comments: [
      {
        name: "Khaled",
        message: "This settled a two-year debate with my parents. Dentistry it is.",
        date: "2026-05-01",
      },
    ],
  },
  {
    id: 3,
    title: {
      en: "5 scholarship mistakes that cost students thousands",
      ar: "5 أخطاء في التقديم للمنح تكلّف الطلاب آلاف الدولارات",
    },
    excerpt: {
      en: "Late applications, weak motivation letters and other traps — and how to avoid every one of them.",
      ar: "التقديم المتأخر ورسائل الدافع الضعيفة وفخاخ أخرى — وكيف تتجنبها جميعاً.",
    },
    body: {
      en: "Every year we watch qualified students lose scholarships for avoidable reasons. The most common mistake is timing: merit scholarships are allocated first-come, first-served at most private universities, so a May application can be worth thousands more than an August one.\n\nThe second killer is the motivation letter. Committees read hundreds of near-identical letters; the ones that stand out tell a specific story about why this program, this university, this country.\n\nFinally, students routinely forget to renew: many scholarships require a minimum GPA to keep the discount in year two. Read the conditions before you celebrate.",
      ar: "كل عام نشاهد طلاباً مؤهلين يخسرون منحاً لأسباب يمكن تجنبها. الخطأ الأكثر شيوعاً هو التوقيت: تُوزَّع منح التفوق بأسبقية التقديم في معظم الجامعات الخاصة، لذا قد يساوي التقديم في مايو آلاف الدولارات مقارنة بالتقديم في أغسطس.\n\nالقاتل الثاني هو رسالة الدافع. تقرأ اللجان مئات الرسائل شبه المتطابقة؛ وما يتميز منها هو الذي يروي قصة محددة عن سبب اختيار هذا البرنامج وهذه الجامعة وهذه الدولة.\n\nوأخيراً، ينسى الطلاب عادةً التجديد: تشترط كثير من المنح معدلاً أدنى للحفاظ على الخصم في السنة الثانية. اقرأ الشروط قبل أن تحتفل.",
    },
    image: "/assets/images/blog-scholarship.jpg",
    date: "2026-04-10",
    author: "Layan Team",
    categories: [
      { en: "Scholarships", ar: "المنح الدراسية" },
      { en: "Tips", ar: "نصائح" },
    ],
    comments: [],
  },
  {
    id: 4,
    title: {
      en: "Student housing abroad: dorms vs. shared apartments",
      ar: "السكن الطلابي في الخارج: السكن الجامعي أم الشقق المشتركة؟",
    },
    excerpt: {
      en: "Real monthly costs, contracts to watch out for, and what first-year students usually regret.",
      ar: "التكاليف الشهرية الحقيقية والعقود التي يجب الانتباه لها وما يندم عليه طلاب السنة الأولى عادة.",
    },
    body: {
      en: "For your first year, we almost always recommend university dorms: utilities are included, contracts are flexible and you meet people instantly. Expect $150–$350 per month in Turkey and Egypt.\n\nFrom the second year, shared apartments become attractive — often cheaper per person and far more independent. Watch for two contract traps: 12-month terms with no summer break clause, and deposits that quietly become 'cleaning fees'.\n\nWhatever you choose, never send a deposit before a video tour, and always get the landlord's ID on the contract.",
      ar: "في سنتك الأولى ننصح دائماً تقريباً بالسكن الجامعي: الخدمات مشمولة والعقود مرنة وستتعرف على أصدقاء فوراً. توقع 150–350 دولاراً شهرياً في تركيا ومصر.\n\nمن السنة الثانية تصبح الشقق المشتركة خياراً جذاباً — فهي غالباً أرخص للفرد وأكثر استقلالية بكثير. انتبه لفخّين في العقود: مدة 12 شهراً دون بند إجازة صيفية، وودائع تتحول بهدوء إلى «رسوم تنظيف».\n\nأياً كان اختيارك، لا ترسل وديعة قبل جولة بالفيديو، واحرص دائماً على تثبيت هوية المالك في العقد.",
    },
    image: "/assets/images/blog-housing.jpg",
    date: "2026-03-22",
    author: "Sami Qassem",
    categories: [{ en: "Student Life", ar: "الحياة الطلابية" }],
    comments: [
      {
        name: "Nour",
        message: "The video tour tip saved me from a scam last month. Wish I read this earlier!",
        date: "2026-03-25",
      },
      {
        name: "Ibrahim",
        message: "ما رأيكم بالسكن مع عائلة مضيفة؟",
        date: "2026-03-28",
      },
    ],
  },
  {
    id: 5,
    title: {
      en: "How to write a motivation letter that gets read twice",
      ar: "كيف تكتب رسالة دافع تُقرأ مرتين",
    },
    excerpt: {
      en: "A paragraph-by-paragraph template used by students who won full scholarships.",
      ar: "قالب فقرة بفقرة استخدمه طلاب حصلوا على منح كاملة.",
    },
    body: {
      en: "Open with a moment, not a biography. 'The first time I watched a bridge being demolished, I wanted to know why it failed' beats 'I have always been passionate about engineering' in every committee room on earth.\n\nYour middle paragraphs should answer three questions in order: why this field, why this university specifically (name a lab, a professor, a course), and what you will do with the degree.\n\nClose with the future, not gratitude. Committees fund trajectories, not thank-you notes. Keep the whole letter under 500 words and have one native speaker read it before you submit.",
      ar: "ابدأ بلحظة، لا بسيرة ذاتية. «في المرة الأولى التي شاهدت فيها جسراً يُهدم، أردت أن أعرف لماذا فشل» تتفوق على «لطالما كنت شغوفاً بالهندسة» في كل لجنة قبول على وجه الأرض.\n\nيجب أن تجيب فقراتك الوسطى عن ثلاثة أسئلة بالترتيب: لماذا هذا المجال، ولماذا هذه الجامعة تحديداً (اذكر مختبراً أو أستاذاً أو مادة)، وماذا ستفعل بالشهادة.\n\nاختم بالمستقبل لا بالشكر. اللجان تموّل مسارات، لا رسائل امتنان. أبقِ الرسالة كاملة تحت 500 كلمة ودع متحدثاً أصلياً واحداً يراجعها قبل الإرسال.",
    },
    image: "/assets/images/blog-letter.jpg",
    date: "2026-03-05",
    author: "Layan Team",
    categories: [
      { en: "Tips", ar: "نصائح" },
      { en: "Applications", ar: "التقديم" },
    ],
    comments: [],
  },
]

export const news: Article[] = [
  {
    id: 101,
    title: {
      en: "Fall 2026 applications are now open at 40+ partner universities",
      ar: "فتح باب التقديم لخريف 2026 في أكثر من 40 جامعة شريكة",
    },
    excerpt: {
      en: "Early applicants get priority scholarship allocation and free document translation.",
      ar: "المتقدمون مبكراً يحصلون على أولوية في المنح وترجمة مجانية للمستندات.",
    },
    body: {
      en: "Applications for the Fall 2026 intake are officially open across our partner network in Turkey, Egypt and the United States. Students who complete their file before July 15 receive priority scholarship evaluation and free certified translation of their documents.\n\nMedical programs are expected to fill within the first six weeks, as they did last year. Business and engineering programs typically remain open until late August.",
      ar: "فُتح باب التقديم رسمياً لفصل خريف 2026 عبر شبكة جامعاتنا الشريكة في تركيا ومصر والولايات المتحدة. يحصل الطلاب الذين يكملون ملفاتهم قبل 15 يوليو على أولوية في تقييم المنح وترجمة معتمدة مجانية لمستنداتهم.\n\nمن المتوقع اكتمال مقاعد البرامج الطبية خلال الأسابيع الستة الأولى كما حدث العام الماضي، بينما تبقى برامج إدارة الأعمال والهندسة مفتوحة عادة حتى أواخر أغسطس.",
    },
    image: "/assets/images/news-applications.jpg",
    date: "2026-06-01",
    author: "Layan Team",
    categories: [{ en: "Announcements", ar: "إعلانات" }],
    comments: [],
  },
  {
    id: 102,
    title: {
      en: "New partnership: Liberty State University joins the Layan network",
      ar: "شراكة جديدة: جامعة ليبرتي الحكومية تنضم إلى شبكة ليان",
    },
    excerpt: {
      en: "Our first US partner brings STEM degrees with optional practical training years.",
      ar: "شريكنا الأمريكي الأول يقدّم شهادات علمية مع سنوات تدريب عملي اختيارية.",
    },
    body: {
      en: "We are proud to announce our first partnership in the United States. Liberty State University in Boston now accepts applications through Layan, with dedicated merit scholarships of up to $12,000 per year for students from our region.\n\nThe university's STEM-designated programs allow up to three years of optional practical training after graduation — one of the strongest post-study work options available anywhere.",
      ar: "نفخر بالإعلان عن أول شراكة لنا في الولايات المتحدة. تستقبل جامعة ليبرتي الحكومية في بوسطن الطلبات الآن عبر ليان، مع منح تفوق مخصصة تصل إلى 12,000 دولار سنوياً لطلاب منطقتنا.\n\nتتيح برامج الجامعة المعتمدة في التخصصات العلمية حتى ثلاث سنوات من التدريب العملي الاختياري بعد التخرج — أحد أقوى خيارات العمل بعد الدراسة المتاحة في أي مكان.",
    },
    image: "/assets/images/news-partnership.jpg",
    date: "2026-05-20",
    author: "Layan Team",
    categories: [{ en: "Partnerships", ar: "شراكات" }],
    comments: [
      {
        name: "Hala",
        message: "Finally a US option! Does the scholarship apply to master's programs too?",
        date: "2026-05-21",
      },
    ],
  },
  {
    id: 103,
    title: {
      en: "Turkish student visa processing times drop to 10 days",
      ar: "انخفاض مدة معالجة تأشيرة الطالب التركية إلى 10 أيام",
    },
    excerpt: {
      en: "New e-visa lane for admitted students cuts waiting times by more than half.",
      ar: "مسار إلكتروني جديد للطلاب المقبولين يخفّض مدة الانتظار لأكثر من النصف.",
    },
    body: {
      en: "Turkey has launched a fast-track electronic visa lane for students holding a university acceptance letter. Processing that previously took three to four weeks is now completed in around ten days.\n\nThe change applies to applicants from most Arab countries. Our visa team has already processed the first batch under the new system without a single rejection.",
      ar: "أطلقت تركيا مساراً إلكترونياً سريعاً لتأشيرات الطلاب الحاصلين على خطاب قبول جامعي. أصبحت المعالجة التي كانت تستغرق ثلاثة إلى أربعة أسابيع تُنجز الآن في نحو عشرة أيام.\n\nيسري التغيير على المتقدمين من معظم الدول العربية. وقد أنجز فريق التأشيرات لدينا الدفعة الأولى عبر النظام الجديد دون أي حالة رفض.",
    },
    image: "/assets/images/news-visa.jpg",
    date: "2026-05-08",
    author: "Layan Team",
    categories: [{ en: "Visas", ar: "التأشيرات" }],
    comments: [],
  },
  {
    id: 104,
    title: {
      en: "Layan students achieve 96% admission success rate for Spring 2026",
      ar: "طلاب ليان يحققون نسبة قبول 96% لفصل ربيع 2026",
    },
    excerpt: {
      en: "412 of 429 applications submitted through the platform received acceptance letters.",
      ar: "412 من أصل 429 طلباً قُدّمت عبر المنصة حصلت على خطابات قبول.",
    },
    body: {
      en: "Final numbers are in for the Spring 2026 intake: 96% of applications submitted through Layan received at least one acceptance letter, and 78% were accepted into their first-choice program.\n\nThe strongest results came from engineering and business applicants, while medicine remained the most competitive field. Every rejected file received a free re-application to an alternative university.",
      ar: "صدرت الأرقام النهائية لفصل ربيع 2026: حصل 96% من الطلبات المقدمة عبر ليان على خطاب قبول واحد على الأقل، وقُبل 78% في برنامجهم ذي الخيار الأول.\n\nجاءت أقوى النتائج من متقدمي الهندسة وإدارة الأعمال، بينما بقي الطب المجال الأكثر تنافسية. وحصل كل ملف مرفوض على إعادة تقديم مجانية لجامعة بديلة.",
    },
    image: "/assets/images/news-success.jpg",
    date: "2026-04-15",
    author: "Layan Team",
    categories: [{ en: "Results", ar: "نتائج" }],
    comments: [],
  },
]
