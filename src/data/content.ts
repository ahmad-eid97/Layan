import type {
  Banner,
  Experience,
  Faq,
  Service,
  StudyStep,
  Testimonial,
} from "./types"

export const banners: Banner[] = [
  {
    id: 1,
    title: {
      en: "Your journey to studying abroad starts here",
      ar: "رحلتك للدراسة في الخارج تبدأ من هنا",
    },
    subtitle: {
      en: "Compare universities and programs across 5 countries and apply in minutes — our team follows up until you graduate.",
      ar: "قارن بين الجامعات والبرامج في 5 دول وقدّم طلبك في دقائق — وفريقنا يتابع معك حتى التخرج.",
    },
    image: "/assets/images/slide1.png",
    link: "/all-universities",
  },
  {
    id: 2,
    title: {
      en: "Scholarships up to 50% for early applicants",
      ar: "منح دراسية حتى 50% للمتقدمين مبكراً",
    },
    subtitle: {
      en: "Apply for the Fall 2026 intake before seats fill up and secure exclusive tuition discounts.",
      ar: "قدّم لفصل خريف 2026 قبل اكتمال المقاعد واحصل على خصومات حصرية على الرسوم الدراسية.",
    },
    image: "/assets/images/slide2.png",
    link: "/programs",
  },
  {
    id: 3,
    title: {
      en: "From application to airport pickup",
      ar: "من تقديم الطلب إلى استقبالك في المطار",
    },
    subtitle: {
      en: "University admission, visa support, housing and residence permits — one team handles it all.",
      ar: "القبول الجامعي، دعم التأشيرة، السكن وتصاريح الإقامة — فريق واحد يتولى كل شيء.",
    },
    image: "/assets/images/slide3.png",
    link: "/services",
  },
]

export const services: Service[] = [
  {
    id: 1,
    title: { en: "University Admission", ar: "القبول الجامعي" },
    description: {
      en: "We shortlist universities that match your grades, budget and goals, then handle the full application file.",
      ar: "نرشّح لك الجامعات المناسبة لدرجاتك وميزانيتك وأهدافك، ثم نتولى تجهيز ملف التقديم كاملاً.",
    },
    image: "/assets/images/accept.png",
  },
  {
    id: 2,
    title: { en: "Visa & Travel Support", ar: "دعم التأشيرة والسفر" },
    description: {
      en: "Step-by-step guidance through student visa requirements, appointments and travel arrangements.",
      ar: "إرشاد خطوة بخطوة في متطلبات تأشيرة الطالب والمواعيد وترتيبات السفر.",
    },
    image: "/assets/images/plane.png",
  },
  {
    id: 3,
    title: { en: "Airport Pickup", ar: "الاستقبال في المطار" },
    description: {
      en: "A team member meets you on arrival and takes you straight to your accommodation.",
      ar: "يستقبلك أحد أعضاء فريقنا عند الوصول ويرافقك مباشرة إلى سكنك.",
    },
    image: "/assets/images/trip.png",
  },
  {
    id: 4,
    title: { en: "Student Housing", ar: "السكن الطلابي" },
    description: {
      en: "Verified dorms and apartments near campus, booked before you land.",
      ar: "سكن جامعي وشقق موثوقة قرب الحرم الجامعي، تُحجز قبل وصولك.",
    },
    image: "/assets/images/house.png",
  },
  {
    id: 5,
    title: { en: "Residence Permit", ar: "تصريح الإقامة" },
    description: {
      en: "We prepare and submit your residence permit file and track it until the card is in your hand.",
      ar: "نجهّز ملف تصريح الإقامة ونقدّمه ونتابعه حتى تستلم البطاقة بيدك.",
    },
    image: "/assets/images/form.png",
  },
  {
    id: 6,
    title: { en: "Academic Follow-up", ar: "المتابعة الأكاديمية" },
    description: {
      en: "Periodic follow-up on your academic progress and support with course registration every semester.",
      ar: "متابعة دورية لتقدمك الأكاديمي ودعم في تسجيل المواد كل فصل دراسي.",
    },
    image: "/assets/images/education.jpg",
  },
]

export const experiences: Experience[] = [
  {
    id: 1,
    title: {
      en: "Ahmad's first year studying medicine in Istanbul",
      ar: "السنة الأولى لأحمد في دراسة الطب في إسطنبول",
    },
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: 2,
    title: {
      en: "How Sara got a 50% engineering scholarship",
      ar: "كيف حصلت سارة على منحة 50% في الهندسة",
    },
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: 3,
    title: {
      en: "Campus tour: Bosphorus Technical University",
      ar: "جولة في الحرم الجامعي: جامعة البوسفور التقنية",
    },
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
]

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: { en: "Omar Khaled", ar: "عمر خالد" },
    role: { en: "Medicine student, Istanbul", ar: "طالب طب — إسطنبول" },
    quote: {
      en: "From the first consultation to my residence permit, everything was handled for me. I only had to focus on studying.",
      ar: "من الاستشارة الأولى حتى تصريح الإقامة، كل شيء تم إنجازه لي. لم يكن عليّ سوى التركيز على دراستي.",
    },
    avatar: "/assets/images/avatar-1.jpg",
  },
  {
    id: 2,
    name: { en: "Lina Haddad", ar: "لينا حداد" },
    role: { en: "Software engineering graduate", ar: "خريجة هندسة برمجيات" },
    quote: {
      en: "They found me a program 30% cheaper than what I had budgeted, with better ranking. Genuinely grateful.",
      ar: "وجدوا لي برنامجاً أرخص بنسبة 30% مما خططت له وبتصنيف أفضل. ممتنة حقاً.",
    },
    avatar: "/assets/images/avatar-2.jpg",
  },
  {
    id: 3,
    name: { en: "Yousef Nasser", ar: "يوسف ناصر" },
    role: { en: "Parent", ar: "ولي أمر" },
    quote: {
      en: "As a parent, the monthly follow-up reports gave me real peace of mind while my son studies abroad.",
      ar: "كوليّ أمر، منحتني تقارير المتابعة الشهرية طمأنينة حقيقية بينما يدرس ابني في الخارج.",
    },
    avatar: "/assets/images/avatar-3.jpg",
  },
  {
    id: 4,
    name: { en: "Maryam Al-Sayed", ar: "مريم السيد" },
    role: { en: "MBA student, Cairo", ar: "طالبة ماجستير إدارة أعمال — القاهرة" },
    quote: {
      en: "The team answered every question within hours, even on weekends. The application took less than a week.",
      ar: "أجاب الفريق عن كل سؤال خلال ساعات حتى في نهاية الأسبوع. استغرق التقديم أقل من أسبوع.",
    },
    avatar: "/assets/images/avatar-4.jpg",
  },
]

export const studySteps: StudyStep[] = [
  {
    id: 1,
    order: 1,
    title: { en: "Free Consultation", ar: "استشارة مجانية" },
    details: {
      en: "Tell us your grades, budget and dream specialty — we map out realistic options together.",
      ar: "أخبرنا بدرجاتك وميزانيتك وتخصص أحلامك — ونرسم معاً الخيارات الواقعية المتاحة.",
    },
  },
  {
    id: 2,
    order: 2,
    title: { en: "Choose Program & University", ar: "اختيار البرنامج والجامعة" },
    details: {
      en: "Compare tuition, rankings and languages of instruction, then lock in a primary and backup choice.",
      ar: "قارن الرسوم والتصنيفات ولغات الدراسة، ثم ثبّت خيارك الأساسي والاحتياطي.",
    },
  },
  {
    id: 3,
    order: 3,
    title: { en: "Submit Documents", ar: "تقديم المستندات" },
    details: {
      en: "Upload your certificates and passport — we review, translate and submit the file to the university.",
      ar: "ارفع شهاداتك وجواز سفرك — نراجع الملف ونترجمه ونقدّمه إلى الجامعة.",
    },
  },
  {
    id: 4,
    order: 4,
    title: { en: "Receive Acceptance", ar: "استلام القبول" },
    details: {
      en: "Your official acceptance letter typically arrives within 2–4 weeks. We follow up so you don't have to.",
      ar: "تصل رسالة القبول الرسمية عادة خلال 2–4 أسابيع. نتابع نحن حتى لا تضطر أنت لذلك.",
    },
  },
  {
    id: 5,
    order: 5,
    title: { en: "Travel & Enroll", ar: "السفر والتسجيل" },
    details: {
      en: "Visa, ticket, airport pickup and university registration — we stay with you until your first lecture.",
      ar: "التأشيرة والتذكرة والاستقبال في المطار والتسجيل الجامعي — نبقى معك حتى محاضرتك الأولى.",
    },
  },
]

export const faqs: Faq[] = [
  {
    id: 1,
    question: { en: "What is the Layan platform?", ar: "ما هي منصة ليان؟" },
    answer: {
      en: "Layan is a student-services platform that helps you find, compare and apply to universities abroad. Our team handles admission files, visas, housing and residence permits, and follows up with you throughout your studies.",
      ar: "ليان منصة خدمات طلابية تساعدك على إيجاد الجامعات في الخارج والمقارنة بينها والتقديم إليها. يتولى فريقنا ملفات القبول والتأشيرات والسكن وتصاريح الإقامة، ويتابع معك طوال فترة دراستك.",
    },
  },
  {
    id: 2,
    question: {
      en: "What documents do I need for a residence permit?",
      ar: "ما هي المستندات اللازمة من أجل طلب تصريح الإقامة؟",
    },
    answer: {
      en: "Typically: a valid passport, university enrollment certificate, health insurance, proof of accommodation and biometric photos. Requirements vary by country — we prepare a personalized checklist for you.",
      ar: "عادةً: جواز سفر ساري المفعول، وثيقة قيد جامعي، تأمين صحي، إثبات سكن وصور بيومترية. تختلف المتطلبات حسب الدولة — ونجهّز لك قائمة مخصصة بمستنداتك.",
    },
  },
  {
    id: 3,
    question: {
      en: "When can I apply to Turkish universities?",
      ar: "متى يمكنني التقديم للجامعات التركية؟",
    },
    answer: {
      en: "Private universities accept applications almost year-round for Fall and Spring intakes, while public universities open in early summer. The earlier you apply, the better the scholarship options.",
      ar: "تستقبل الجامعات الخاصة الطلبات على مدار العام تقريباً لفصلي الخريف والربيع، بينما تفتح الجامعات الحكومية باب التقديم مطلع الصيف. كلما بكّرت في التقديم كانت خيارات المنح أفضل.",
    },
  },
  {
    id: 4,
    question: {
      en: "I don't have a Turkish language certificate — what should I do?",
      ar: "لا يوجد معي شهادة لغة تركية، ماذا أفعل؟",
    },
    answer: {
      en: "You can enroll in a one-year TÖMER preparatory course at the university, or choose one of the many English-taught programs that require no Turkish at all.",
      ar: "يمكنك الالتحاق بسنة تحضيرية للغة التركية (تومر) في الجامعة، أو اختيار أحد البرامج الكثيرة التي تُدرّس بالإنجليزية ولا تتطلب التركية إطلاقاً.",
    },
  },
  {
    id: 5,
    question: {
      en: "Do universities offer orientation programs?",
      ar: "هل تقدم الجامعات برامج توجيه مفصلة عن الدراسة بها؟",
    },
    answer: {
      en: "Yes — all partner universities run an orientation week covering campus facilities, course registration and student clubs. Our local team also runs its own welcome sessions in Arabic.",
      ar: "نعم — تنظّم جميع الجامعات الشريكة أسبوعاً توجيهياً يغطي مرافق الحرم الجامعي وتسجيل المواد والأندية الطلابية. كما يعقد فريقنا المحلي جلسات ترحيبية خاصة باللغة العربية.",
    },
  },
  {
    id: 6,
    question: {
      en: "How do I freeze my university enrollment?",
      ar: "ما الذي يجب علي القيام به من أجل تجميد القيد الجامعي؟",
    },
    answer: {
      en: "Submit a freeze request to the student affairs office before the semester starts, usually for up to two semesters. We can prepare and follow up on the request on your behalf.",
      ar: "قدّم طلب تجميد إلى شؤون الطلاب قبل بداية الفصل الدراسي، ويُسمح عادة بالتجميد حتى فصلين دراسيين. يمكننا تجهيز الطلب ومتابعته نيابة عنك.",
    },
  },
]
