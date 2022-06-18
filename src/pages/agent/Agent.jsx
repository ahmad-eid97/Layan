import { useState } from 'react';

import "react-datepicker/dist/react-datepicker.css";
import cls from './agent.module.scss';

const Agent = () => {
  // COMPONENT HOOKS
  let initialValues = {
    companyName: '',
    companyPhone: '',
    address: '',
    website: '',
    companyEmail: '',
    email: '',
    password: '',
    phone: '',
  }
  const [fields, setFields] = useState(initialValues);

  const handleFields = (e) => {
    console.log(e.target.value)
    setFields({
      ...fields,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className={cls.register}>
        
      <div className="container">

        <h1 className='label'>

          <img src="/assets/images/cap.png" alt="titleImage" />

          <p>طلب التسجيل للحصول علي القبول الجامعى</p>

        </h1>

        <div className={cls.info}>

          <div className="col-xs-12">

            <div  className={cls.section}>

              <h3><i className="fa-light fa-book-open-cover"></i> <span>رسالتنا</span></h3>

              <p>علمني شكرا شركة رائدة في مجال الخدمات الطلابية والقبول الجامعية. انشئت شركة علمني شكرا في عام 2015 حيث تهدف الي مساعدة الطلاب الاجانب للالتحاق بالجامعات التركية وتقديم خصومات دراسية مميزة والمساعدة في اختيار التخصص المناسب . وتمتلك شركة علمني شكرا فريق احترافي يمد يديه لجميع الطلاب ليس مقتصر فقط علي تقديم اوراق الطالب للجامعة وتوفير له قبول جامعي وانما استيعاب احتياجات الطالب بالكامل ابتداءا من تقديم له كافة الاستشارات الجامعية مرورا باستقبال المطار وتوفير له سكن مناسب وانهاء له كافة اجراءات اقامته في تركيا</p>

            </div>

          </div>       

        </div>

        <div className={cls.form}>

          <div className={cls.block}>

            <h4><i className="fa-light fa-building"></i> تفاصيل المؤسسة</h4>

            <div className="row">

              <div className="col-lg-6">

                <div className={cls.field}>

                  <label>إسم المؤسسة</label>

                  <input type="text" placeholder='إسم المؤسسة' name="companyName" value={fields.companyName} onChange={(e) => handleFields(e)} />

                </div>

              </div>

              <div className="col-lg-6">

                <div className={cls.field}>

                  <label>البريد الإلكتروني</label>

                  <input type="text" placeholder='البريد الإلكتروني' name="companyEmail" value={fields.companyEmail} onChange={(e) => handleFields(e)} />

                </div>

              </div>

              <div className="col-lg-6">

                <div className={cls.field}>

                  <label>رقم الهاتف</label>

                  <input type="text" placeholder='رقم الهاتف' name="companyPhone" value={fields.companyPhone} onChange={(e) => handleFields(e)} />

                </div>

              </div>

              <div className="col-lg-6">

                <div className={cls.field}>

                  <label>العنوان</label>

                  <input type="text" placeholder='العنوان' name="address" value={fields.address} onChange={(e) => handleFields(e)} />

                </div>
    
              </div>

              <div className="col-lg-6">

                <div className={cls.field}>

                  <label>الموقع الإلكتروني</label>

                  <input type="text" placeholder='الموقع الإلكتروني' name="website" value={fields.website} onChange={(e) => handleFields(e)} />

                </div>

              </div>

            </div>

          </div>

          <div className={cls.block}>

            <h4><i className="fa-light fa-user-lock"></i> تفاصيل تسجيل الدخول</h4>

            <div className="row">

              <div className="col-lg-6">

                <div className={cls.field}>

                  <label>البريد الإلكتروني</label>

                  <input type="text" placeholder='البريد الإلكتروني' name="email" value={fields.email} onChange={(e) => handleFields(e)} />

                </div>

              </div>

              <div className="col-lg-6">

                <div className={cls.field}>

                  <label>كلمة المرور</label>

                  <input type="password" placeholder='كلمة المرور' name="password" value={fields.password} onChange={(e) => handleFields(e)} />

                </div>

              </div>

              <div className="col-lg-6">

                <div className={cls.field}>

                  <label>رقم الهاتف</label>

                  <input type="text" placeholder='رقم الهاتف' name="phone" value={fields.phone} onChange={(e) => handleFields(e)} />

                </div>

              </div>

            </div>

          </div>

          <div className={cls.btn}>

            <button>طلب التسجيل</button>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Agent