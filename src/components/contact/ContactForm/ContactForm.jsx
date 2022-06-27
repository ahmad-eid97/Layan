import { useState } from 'react';

import axios from '../../../Utils/axios';

import { toast } from 'react-toastify';

import cls from './contactForm.module.scss';

const ContactForm = () => {
  // COMPONENT HOOKS
  const [fields, setFields] = useState({
    contact_name: '',
    contact_email: '',
    contact_phone: '',
    contact_subject: '',
    contact_message: '',
  })
  const [emptyFields, setEmptyFields] = useState(false)

  // COMPONENT HANDLERS
  const handleFields = (e) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value
    })
  }

  const sendMessage = async () => {
    const empty = Object.values(fields).filter(one => one === '');

    if(empty.length) {
      setEmptyFields(true)
    } else {

      const response = await axios.post('/contact', fields);

      if(!response) return;

      console.log(response)

      successNotify('تم إرسال الرسالة بنجاح')
    }
  }

  const successNotify = (message) => toast.success(message)

  return (
    <div className={cls.contactForm}>

      <div className='container'>
        
        <h1 className='label'>

          <img src="/assets/images/message.png" alt="titleImage" />

          <p>إرسل لنا رسالة نصية وسنتواصل معك</p>
          
        </h1>

        <div className={`${cls.row} row`}>

          <div className='col-lg-8'>

            <div className={cls.form}>

              <div className="row">

                <div className="col-md-6">

                  <label>الإسم<span>*</span></label>

                  <input type="text" placeholder='الإسم' name='contact_name' value={fields.contact_name} onChange={(e) => handleFields(e)} className={emptyFields && !fields.contact_name ? cls.error : ''} />

                  {emptyFields && !fields.contact_name && <p>هذا الحقل لا يجب ان يكون فارغاَ</p>}

                </div>

                <div className="col-md-6">

                  <label>البريد الإلكتروني<span>*</span></label>

                  <input type="text" placeholder='البريد الإلكتروني' name='contact_email' value={fields.contact_email} onChange={(e) => handleFields(e)} className={emptyFields && !fields.contact_email ? cls.error : ''} />

                  {emptyFields && !fields.contact_email && <p>هذا الحقل لا يجب ان يكون فارغاَ</p>}

                </div>

                <div className="col-md-6">

                  <label>رقم الهاتف<span>*</span></label>

                  <input type="text" placeholder='رقم الهاتف' name='contact_phone' value={fields.contact_phone} onChange={(e) => handleFields(e)} className={emptyFields && !fields.contact_phone ? cls.error : ''} />

                  {emptyFields && !fields.contact_phone && <p>هذا الحقل لا يجب ان يكون فارغاَ</p>}

                </div>

                <div className="col-md-6">

                  <label>الموضوع<span>*</span></label>

                  <input type="text" placeholder='الموضوع' name='contact_subject' value={fields.contact_subject} onChange={(e) => handleFields(e)} className={emptyFields && !fields.contact_subject ? cls.error : ''} />

                  {emptyFields && !fields.contact_subject && <p>هذا الحقل لا يجب ان يكون فارغاَ</p>}

                </div>

                <div className="col-xs-12">

                  <label>الرسالة<span>*</span></label>

                  <textarea placeholder='الرسالة' name='contact_message' value={fields.contact_message} onChange={(e) => handleFields(e)} className={emptyFields && !fields.contact_message ? cls.error : ''}></textarea>

                  {emptyFields && !fields.contact_message && <p>هذا الحقل لا يجب ان يكون فارغاَ</p>}

                </div>

                <p className={cls.check}><input type="checkbox" />قبول الشروط والأحكام وسياسات الخصوصية !؟</p>

                <button onClick={sendMessage}>إرسال</button>

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
                    <span>0097022973810</span>
                  </div>

                </div>

                <div className={cls.way}>

                <i className="fa-light fa-location-check"></i>

                <div>
                  <p>العنوان</p>
                  <span>إسطنبول, تركيا</span>
                </div>

                </div>

                <div className={cls.way}>

                <i className="fa-light fa-message"></i>

                <div>
                  <p>تفاصيل التواصل</p>
                  <span>info@lyanedu.com</span>
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