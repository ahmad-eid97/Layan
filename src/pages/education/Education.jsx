import { useTranslation } from 'react-i18next';

import cls from './education.module.scss';

const Education = () => {
  // COMPONENT HOOKS
  const { t, i18n } = useTranslation('common');

  return (
    <div className={cls.education}>

      <div className='container'>
        
        <h1 className='label'>

          <img src="/assets/images/cap.png" alt="titleImage" />
  
          <p>{t('education.steps')}</p>
          
        </h1>

        <div className={cls.stepper}>

          <div className={`${cls.step} ${cls[i18n.language]}`}>

            <div className={`${cls.num} ${cls[i18n.language]}`}>

              <span>01</span>

            </div>

            <img src="/assets/images/questioninig.png" alt="titleImage" />

            <h6>الإستشارة المجانيه</h6>

            <p>ابدأ في التواصل مع المستشار التعليمي الخاص بنا ليشرح كافة التفاصيل عن الدراسة في تركيا خطوة بخطوة ومساعدتك في اتخاذ القرار المناسب</p>

          </div>

          <div className={`${cls.step} ${cls[i18n.language]}`}>

              <div className={`${cls.num} ${cls[i18n.language]}`}>

              <span>02</span>

            </div>

            <img src="/assets/images/ask.png" alt="titleImage" />

            <h6>إختر تخصصك</h6>

            <p>لا أحد ينكر أنّ عملية اختيار التخصص الجامعي المناسب قد تكون في غالب الأحيان مثيرة للتوتر والخوف، نظرًا لأن الكثيرين يفكّرون في الأمر على أنه خطوة مصيرية ستحدّد مستقبلهم إلى الأبد. لا تقلق، منصة ليان لديها فريق</p>

          </div>

          <div className={`${cls.step} ${cls[i18n.language]}`}>

              <div className={`${cls.num} ${cls[i18n.language]}`}>

              <span>03</span>

            </div>

            <img src="/assets/images/universityBuilding.png" alt="titleImage" />

            <h6>إختيار الجامعة</h6>

            <p>انتظر قليلاً ..! في هذه الخطوة ستعيش معنا اجواء كل جامعة حيث نشرح تفاصيل كل جامعة من حيث مميزاتها وعيوبها والأجواء بداخلها، ونرشدك للخيار الأمثل والافضل لك</p>

          </div>

          <div className={`${cls.step} ${cls[i18n.language]}`}>

              <div className={`${cls.num} ${cls[i18n.language]}`}>

              <span>04</span>

            </div>

            <img src="/assets/images/form.png" alt="titleImage" />

            <h6>إملأ نموذج التسجيل</h6>

            <p>بعد اختيار الجامعه وتخصصك المناسب يمكنك ملئ نموذج التسجيل الالكتروني المجاني لكي يصلك القبول الجامعي في اسرع وقت ممكن</p>

          </div>

          <div className={`${cls.step} ${cls[i18n.language]}`}>

              <div className={`${cls.num} ${cls[i18n.language]}`}>

              <span>05</span>

            </div>

            <img src="/assets/images/accept.png" alt="titleImage" />

            <h6>القبول الجامعى</h6>

            <p>بعد ملئ نموذج التسجيل يصلك القبول في اقرب وقت ممكن علي الايميل الخاص بك والتواصل معك لتجهيز جميع الوثائق المطلوبة وانهاء كافة اجراءات السفر</p>

          </div>

          <div className={`${cls.step} ${cls[i18n.language]}`}>

            <div className={`${cls.num} ${cls[i18n.language]}`}>

              <span>06</span>

            </div>

            <img src="/assets/images/sleep.png" alt="titleImage" />

            <h6>السكن الجامعى</h6>

            <p>نساعدك علي تأمين سكن مناسب وآمن، حيث خلق بيئة مناسبه ومناخ هادئ يساعدك علي التميز والابداع حرصاً منا علي ان يستمتع كل طالب بفترة دراسية مليئة بالذكريات السعيدة</p>

          </div>

          <div className={`${cls.step} ${cls[i18n.language]}`}>

            <div className={`${cls.num} ${cls[i18n.language]}`}>

              <span>07</span>

            </div>

            <img src="/assets/images/plane.png" alt="titleImage" />

            <h6>الإستقبال في المطار</h6>

            <p>بعد تحديد موعد السفر وحجز تذكرتك، يتم استقبالك في المطار من قبل مندوب الشركة وأخذ جوله في جامعتك ومن ثم وصولك الي مكان الاقامة</p>

          </div>

          <div className={`${cls.step} ${cls[i18n.language]}`}>

            <div className={`${cls.num} ${cls[i18n.language]}`}>

              <span>08</span>

            </div>

            <img src="/assets/images/logistics.png" alt="titleImage" />

            <h6>الكوبونات</h6>

            <p>تواصل معنا لمعرفة العروض والكوبونات المتوفره لدينا لتقديم خصومات علي الدورات التدريبية علي منصتنا والتي تكون متوفره دائما عبر موقعنا الرسمي</p>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Education;