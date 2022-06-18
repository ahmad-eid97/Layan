import { useTranslation } from 'react-i18next';

import cls from './education.module.scss';

const Education = () => {
  // COMPONENT HOOKS
  const { i18n } = useTranslation();

  return (
    <div className={cls.education}>

      <div className='container'>
        
        <h1 className='label'>

          <img src="/assets/images/cap.png" alt="titleImage" />
  
          <p>خطوات الدراسة عن طريق منصتنا</p>
          
        </h1>

        <div className={cls.stepper}>

          <div className={`${cls.step} ${cls[i18n.language]}`}>

            <div className={`${cls.num} ${cls[i18n.language]}`}>

              <span>01</span>

            </div>

            <img src="/assets/images/question.png" alt="titleImage" />

            <h6>الإستشارة المجانيه</h6>

            <p>ابدأ في التواصل مع المستشار التعليمي الخاص بنا ليشرح كافة التفاصيل عن الدراسة في تركيا خطوة بخطوة ومساعدتك في اتخاذ القرار المناسب</p>

          </div>

          <div className={`${cls.step} ${cls[i18n.language]}`}>

              <div className={`${cls.num} ${cls[i18n.language]}`}>

              <span>02</span>

            </div>

            <img src="/assets/images/question.png" alt="titleImage" />

            <h6>الإستشارة المجانيه</h6>

            <p>ابدأ في التواصل مع المستشار التعليمي الخاص بنا ليشرح كافة التفاصيل عن الدراسة في تركيا خطوة بخطوة ومساعدتك في اتخاذ القرار المناسب</p>

          </div>

          <div className={`${cls.step} ${cls[i18n.language]}`}>

              <div className={`${cls.num} ${cls[i18n.language]}`}>

              <span>03</span>

            </div>

            <img src="/assets/images/question.png" alt="titleImage" />

            <h6>الإستشارة المجانيه</h6>

            <p>ابدأ في التواصل مع المستشار التعليمي الخاص بنا ليشرح كافة التفاصيل عن الدراسة في تركيا خطوة بخطوة ومساعدتك في اتخاذ القرار المناسب</p>

          </div>

          <div className={`${cls.step} ${cls[i18n.language]}`}>

              <div className={`${cls.num} ${cls[i18n.language]}`}>

              <span>04</span>

            </div>

            <img src="/assets/images/question.png" alt="titleImage" />

            <h6>الإستشارة المجانيه</h6>

            <p>ابدأ في التواصل مع المستشار التعليمي الخاص بنا ليشرح كافة التفاصيل عن الدراسة في تركيا خطوة بخطوة ومساعدتك في اتخاذ القرار المناسب</p>

          </div>

          <div className={`${cls.step} ${cls[i18n.language]}`}>

              <div className={`${cls.num} ${cls[i18n.language]}`}>

              <span>05</span>

            </div>

            <img src="/assets/images/question.png" alt="titleImage" />

            <h6>الإستشارة المجانيه</h6>

            <p>ابدأ في التواصل مع المستشار التعليمي الخاص بنا ليشرح كافة التفاصيل عن الدراسة في تركيا خطوة بخطوة ومساعدتك في اتخاذ القرار المناسب</p>

          </div>

          <div className={`${cls.step} ${cls[i18n.language]}`}>

            <div className={`${cls.num} ${cls[i18n.language]}`}>

              <span>06</span>

            </div>

            <img src="/assets/images/question.png" alt="titleImage" />

            <h6>الإستشارة المجانيه</h6>

            <p>ابدأ في التواصل مع المستشار التعليمي الخاص بنا ليشرح كافة التفاصيل عن الدراسة في تركيا خطوة بخطوة ومساعدتك في اتخاذ القرار المناسب</p>

          </div>

        </div>

        {/* <div className='row'>

          <div className='col-lg-3'>

            <div className={cls.step}>

              <div className={cls.num}>

                <span>01</span>

              </div>

              <img src="/assets/images/question.png" alt="titleImage" />

              <h6>الإستشارة المجانيه</h6>

              <p>ابدأ في التواصل مع المستشار التعليمي الخاص بنا ليشرح كافة التفاصيل عن الدراسة في تركيا خطوة بخطوة ومساعدتك في اتخاذ القرار المناسب</p>

            </div>

          </div>

          <div className='col-lg-3'>

            <div className={cls.step}>

              <div className={cls.num}>

                <span>02</span>

              </div>

              <img src="/assets/images/question.png" alt="titleImage" />

              <h6>الإستشارة المجانيه</h6>

              <p>ابدأ في التواصل مع المستشار التعليمي الخاص بنا ليشرح كافة التفاصيل عن الدراسة في تركيا خطوة بخطوة ومساعدتك في اتخاذ القرار المناسب</p>

            </div>

          </div>

          <div className='col-lg-3'>

            <div className={cls.step}>

              <div className={cls.num}>

                <span>03</span>

              </div>

              <img src="/assets/images/question.png" alt="titleImage" />

              <h6>الإستشارة المجانيه</h6>

              <p>ابدأ في التواصل مع المستشار التعليمي الخاص بنا ليشرح كافة التفاصيل عن الدراسة في تركيا خطوة بخطوة ومساعدتك في اتخاذ القرار المناسب</p>

            </div>

          </div>

          <div className='col-lg-3'>

            <div className={cls.step}>

              <div className={cls.num}>

                <span>04</span>

              </div>

              <img src="/assets/images/question.png" alt="titleImage" />

              <h6>الإستشارة المجانيه</h6>

              <p>ابدأ في التواصل مع المستشار التعليمي الخاص بنا ليشرح كافة التفاصيل عن الدراسة في تركيا خطوة بخطوة ومساعدتك في اتخاذ القرار المناسب</p>

            </div>

          </div>

          <div className='col-lg-3'>

            <div className={cls.step}>

              <div className={cls.num}>

                <span>05</span>

              </div>

              <img src="/assets/images/question.png" alt="titleImage" />

              <h6>الإستشارة المجانيه</h6>

              <p>ابدأ في التواصل مع المستشار التعليمي الخاص بنا ليشرح كافة التفاصيل عن الدراسة في تركيا خطوة بخطوة ومساعدتك في اتخاذ القرار المناسب</p>

            </div>

          </div>

          <div className='col-lg-3'>

            <div className={cls.step}>

              <div className={cls.num}>

                <span>06</span>

              </div>

              <img src="/assets/images/question.png" alt="titleImage" />

              <h6>الإستشارة المجانيه</h6>

              <p>ابدأ في التواصل مع المستشار التعليمي الخاص بنا ليشرح كافة التفاصيل عن الدراسة في تركيا خطوة بخطوة ومساعدتك في اتخاذ القرار المناسب</p>

            </div>

          </div>

          <div className='col-lg-3'>

            <div className={cls.step}>

              <div className={cls.num}>

                <span>07</span>

              </div>

              <img src="/assets/images/question.png" alt="titleImage" />

              <h6>الإستشارة المجانيه</h6>

              <p>ابدأ في التواصل مع المستشار التعليمي الخاص بنا ليشرح كافة التفاصيل عن الدراسة في تركيا خطوة بخطوة ومساعدتك في اتخاذ القرار المناسب</p>

            </div>

          </div>

          <div className='col-lg-3'>

            <div className={cls.step}>

              <div className={cls.num}>

                <span>08</span>

              </div>

              <img src="/assets/images/question.png" alt="titleImage" />

              <h6>الإستشارة المجانيه</h6>

              <p>ابدأ في التواصل مع المستشار التعليمي الخاص بنا ليشرح كافة التفاصيل عن الدراسة في تركيا خطوة بخطوة ومساعدتك في اتخاذ القرار المناسب</p>

            </div>

          </div>

        </div> */}

      </div>

    </div>
  )
}

export default Education;