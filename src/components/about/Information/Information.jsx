import { useTranslation } from 'react-i18next';

import cls from './information.module.scss';

const Information = () => {
  // COMPONENT HOOKS
  const { i18n } = useTranslation();

  return (
    <div className={cls.information}>

      <div className='container'>

        <div className='row'>

          <div className="col-xs-12">

            <div className={`${cls.section} ${cls[i18n.language]}`}>

              <h3><i className="fa-light fa-user-cowboy"></i> <span>من نحن!؟</span></h3>

              <p>علمني شكرا شركة رائدة في مجال الخدمات الطلابية والقبول الجامعية. انشئت شركة علمني شكرا في عام 2015 حيث تهدف الي مساعدة الطلاب الاجانب للالتحاق بالجامعات التركية وتقديم خصومات دراسية مميزة والمساعدة في اختيار التخصص المناسب . وتمتلك شركة علمني شكرا فريق احترافي يمد يديه لجميع الطلاب ليس مقتصر فقط علي تقديم اوراق الطالب للجامعة وتوفير له قبول جامعي وانما استيعاب احتياجات الطالب بالكامل ابتداءا من تقديم له كافة الاستشارات الجامعية مرورا باستقبال المطار وتوفير له سكن مناسب وانهاء له كافة اجراءات اقامته في تركيا</p>

            </div>

          </div>

          <div className="col-xs-12 col-lg-6">

            <div className={`${cls.section} ${cls[i18n.language]}`}>

              <h3><i className="fa-light fa-glasses"></i> <span>رؤيتنا</span></h3>

              <p>رؤيتنا هي تمكين الطالب من الدراسة في الجامعات التركية والتي تشكل خطوة هامة في مستقبل الطالب نظرا لمكانة الجامعات التركية المتميزة بين جامعات العالم . نحن نمد يد المساعدة للطالب للحصول علي أفضل مستوي تعليم مع توفير بيئة مناسبة تعين علي التميز والابداع . نسعي دائما للحفاظ علي مكانتنا المرموقة في مجال الخدمات الطلابية والحفاظ علي جودة الخدمة المقدمة للطالب وتطويرها</p>

            </div>

          </div>

          <div className="col-xs-12 col-lg-6">

            <div className={`${cls.section} ${cls[i18n.language]}`}>

              <h3><i className="fa-light fa-briefcase"></i> <span>مهمتنا</span></h3>

              <p>تهدف شركة علمني شكرا علي مساعدة الطلاب الأجانب للوصول الي الجامعات التركية وتوفير لهم افضل الخصومات الدراسية والمساعدة في اختيار التخصص الجامعي المناسب . ونسعي الي توفير كافة احتياجات الطالب في تركيا وتقديم المساعدة له من خلال فريق عمل احترافي متكامل</p>

            </div>

          </div>

          <div className="col-xs-12">

            <div className={`${cls.section} ${cls[i18n.language]}`}>

              <h3><i className="fa-light fa-book-open-cover"></i> <span>رسالتنا</span></h3>

              <p>علمني شكرا شركة رائدة في مجال الخدمات الطلابية والقبول الجامعية. انشئت شركة علمني شكرا في عام 2015 حيث تهدف الي مساعدة الطلاب الاجانب للالتحاق بالجامعات التركية وتقديم خصومات دراسية مميزة والمساعدة في اختيار التخصص المناسب . وتمتلك شركة علمني شكرا فريق احترافي يمد يديه لجميع الطلاب ليس مقتصر فقط علي تقديم اوراق الطالب للجامعة وتوفير له قبول جامعي وانما استيعاب احتياجات الطالب بالكامل ابتداءا من تقديم له كافة الاستشارات الجامعية مرورا باستقبال المطار وتوفير له سكن مناسب وانهاء له كافة اجراءات اقامته في تركيا</p>

            </div>

          </div>       

        </div>

        <div className={`${cls.features} row`}>

          
        
          <h3 className={`${cls.label} label`}>

            <img src="/assets/images/cap.png" alt="titleImage" />

            <p>منصة رائدة في مجال الخدمات الطلابية وقبول الجامعات</p>
            
          </h3>

          <div className='col-sm-6 col-md-3 col-lg-3'>
            <div>
              <i className="fa-light fa-comment-smile"></i>
              <span>+15,000</span>
              <p>طلبة سعداء</p>
            </div>
          </div>

          <div className='col-sm-6 col-md-3 col-lg-3'>
            <div>
              <i className="fa-light fa-city"></i>
              <span>+15,000</span>
              <p>جامعة معتمدة</p>
            </div>
          </div>

          <div className='col-sm-6 col-md-3 col-lg-3'>
            <div>
              <i className="fa-light fa-graduation-cap"></i>
              <span>+15,000</span>
              <p>تخصص جامعي</p>
            </div>
          </div>

          <div className='col-sm-6 col-md-3 col-lg-3'>
            <div>
              <i className="fa-light fa-users-medical"></i>
              <span>+15,000</span>
              <p>فريق إستشاري</p>
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Information