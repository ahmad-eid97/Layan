import { useState } from 'react';

import axios from '../../../Utils/axios';

import { toast } from 'react-toastify';

import validator from 'validator';

import { useTranslation } from 'react-i18next';

import cls from './contactForm.module.scss';

const ContactForm = () => {
  // COMPONENT HOOKS
  const { t } = useTranslation('common');
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

    if (empty.length) {
      setEmptyFields(true)
    } else {

      if (validator.isEmail(fields.contact_email)) {
        const response = await axios.post('/contact', fields);

        if (!response) return;

        successNotify(t('contact.success'))
      } else {
        errorNotify(t('contact.emailInvalid'))
      }
    }
  }

  const successNotify = (message) => toast.success(message)
  const errorNotify = (message) => toast.error(message)

  return (
    <div className={cls.contactForm}>

      <div className='container'>

        <h1 className='label'>

          <img src="/assets/images/message.png" alt="titleImage" />

          <p>{t('contact.contact')}</p>

        </h1>

        <div className={`${cls.row} row`}>

          <div className='col-lg-8'>

            <div className={cls.form}>

              <div className="row">

                <div className="col-md-6">

                  <label>{t('contact.name')}<span>*</span></label>

                  <input type="text" placeholder={t('contact.name')} name='contact_name' value={fields.contact_name} onChange={(e) => handleFields(e)} className={emptyFields && !fields.contact_name ? cls.error : ''} />

                  {emptyFields && !fields.contact_name && <p>{t('contact.required')}</p>}

                </div>

                <div className="col-md-6">

                  <label>{t('contact.email')}<span>*</span></label>

                  <input type="text" placeholder={t('contact.email')} name='contact_email' value={fields.contact_email} onChange={(e) => handleFields(e)} className={emptyFields && !fields.contact_email ? cls.error : ''} />

                  {emptyFields && !fields.contact_email && <p>{t('contact.required')}</p>}

                </div>

                <div className="col-md-6">

                  <label>{t('contact.phone')}<span>*</span></label>

                  <input type="text" placeholder={t('contact.phone')} name='contact_phone' value={fields.contact_phone} onChange={(e) => handleFields(e)} className={emptyFields && !fields.contact_phone ? cls.error : ''} />

                  {emptyFields && !fields.contact_phone && <p>{t('contact.required')}</p>}

                </div>

                <div className="col-md-6">

                  <label>{t('contact.subject')}<span>*</span></label>

                  <input type="text" placeholder={t('contact.subject')} name='contact_subject' value={fields.contact_subject} onChange={(e) => handleFields(e)} className={emptyFields && !fields.contact_subject ? cls.error : ''} />

                  {emptyFields && !fields.contact_subject && <p>{t('contact.required')}</p>}

                </div>

                <div className="col-xs-12">

                  <label>{t('contact.message')}<span>*</span></label>

                  <textarea placeholder={t('contact.message')} name='contact_message' value={fields.contact_message} onChange={(e) => handleFields(e)} className={emptyFields && !fields.contact_message ? cls.error : ''}></textarea>

                  {emptyFields && !fields.contact_message && <p>{t('contact.required')}</p>}

                </div>

                <p className={cls.check}><input type="checkbox" />{t('contact.accept')}</p>

                <button onClick={sendMessage}>{t('contact.send')}</button>

              </div>

            </div>

          </div>

          <div className='col-lg-4'>

            <div className={cls.info}>

              <span>{t('contact.info')}</span>

              <h3>{t('contact.text')}</h3>

              <p>{t('contact.contactWith')}</p>

              <div className={cls.wayWrapper}>

                <div className={cls.way}>

                  <i className="fa-light fa-phone"></i>

                  <div>
                    <p>{t('contact.phoneCall')}</p>
                    <span>0097022973810</span>
                  </div>

                </div>

                <div className={cls.way}>

                  <i className="fa-light fa-location-check"></i>

                  <div>
                    <p>{t('contact.address')}</p>
                    <span>إسطنبول, تركيا</span>
                  </div>

                </div>

                <div className={cls.way}>

                  <i className="fa-light fa-message"></i>

                  <div>
                    <p>{t('contact.details')}</p>
                    <span>info@layanedu.com</span>
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