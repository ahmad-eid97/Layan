import cls from './contactForm.module.scss';

const ContactForm = () => {
  return (
    <div className={cls.contactForm}>

      <div className='container'>
        
        <h1 className='label'>

          <i className="fa-light fa-messages"></i>

          <p>إرسل لنا رسالة نصية وسنتواصل معك</p>
          
        </h1>

        <div className={`${cls.row} row`}>

          <div className='col-lg-8'>

            <div className={cls.form}>

              <div className="row">

                <div className="col-md-6">

                  <label>الإسم<span>*</span></label>

                  <input type="text" placeholder='الإسم' />

                </div>

                <div className="col-md-6">

                  <label>البريد الإلكتروني<span>*</span></label>

                  <input type="text" placeholder='البريد الإلكتروني' />

                </div>

                <div className="col-md-6">

                  <label>رقم الهاتف<span>*</span></label>

                  <input type="text" placeholder='رقم الهاتف' />

                </div>

                <div className="col-md-6">

                  <label>الموضوع<span>*</span></label>

                  <input type="text" placeholder='الموضوع' />

                </div>

                <div className="col-xs-12">

                  <label>الرسالة<span>*</span></label>

                  <textarea placeholder='الرسالة'></textarea>

                </div>

                <p><input type="checkbox" />قبول الشروط والأحكام وسياسات الخصوصية !؟</p>

                <button>إرسال</button>

              </div>

            </div>

          </div>

          <div className='col-lg-4'>

            <div className={cls.info}>

              <span>معلومات الإتصال</span>

              <h3>دعنا نتواصل معاَ</h3>

              <p>اكتب لنا رسالتك لكي نتمكن من التواص معك في اقرب فرصة بالمعلومات التي تفيدك وتقوم بحل المشكة تماما ونحن موجودين علي مدار اليوم والإسبوع بشكل دوري</p>

              <div className={cls.wayWrapper}>

                <div className={cls.way}>

                  <i className="fa-light fa-phone"></i>

                  <div>
                    <p>رقم الهاتف</p>
                    <span>01025864313</span>
                  </div>

                </div>

                <div className={cls.way}>

                <i className="fa-light fa-location-check"></i>

                <div>
                  <p>العنوان</p>
                  <span>القاهرة مصر</span>
                </div>

                </div>

                <div className={cls.way}>

                <i className="fa-light fa-message"></i>

                <div>
                  <p>تفاصيل التواصل</p>
                  <span>civil.ahmad.eid@gmail.com</span>
                </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default ContactForm