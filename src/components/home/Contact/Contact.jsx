import { useState } from 'react';

import SelectBox from '../../UIs/SelectBox/Selectbox';

import axios from '../../../Utils/axios';

import { toast } from 'react-toastify';

import Loader from '../../UIs/Loader/Loader';

import validator from 'validator'

import { useTranslation } from 'react-i18next';

import cls from './contact.module.scss';

const Contact = () => {
  // COMPONENT HOOKS
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState('');
  const [contact, setContact] = useState();
  const [emptyFields, setEmptyFields] = useState(false);
  const [contactMethod, setContactMethod] = useState();
  const [loading, setLoading] = useState(false)
  const { t } = useTranslation('common')

  const contactList = [
    {
      title: `${t('home.whatsapp')}`,
      label: 'whatsapp'
    },
    {
      title: `${t('home.facebook')}`,
      label: 'facebook'
    },
    {
      title: `${t('home.twitter')}`,
      label: 'twitter'
    },
    {
      title: `${t('home.phone')}`,
      label: 'phone'
    }
  ]

  const contactMethods = [
    {
      title: `${t('home.whatsapp')}`,
      label: 'whatsapp'
    },
    {
      title: `${t('home.meet')}`,
      label: 'interview'
    },
    {
      title: `${t('home.call')}`,
      label: 'call'
    }
  ]

  // COMPONENT HANDLERS
  const setContactWay = async () => {
    let data = {
      name,
      phone,
      interest,
      email,
      communication_method: contactMethod?.label || '',
      type_phone: contact?.label || ''
    }
    const checkEmpty = Object.values(data).filter(one => one === undefined || one === '')
    if (checkEmpty.length > 0) {
      setEmptyFields(true)
      errorNotify(t('home.fillFields'))
    } else if (!validator.isEmail(email)) {
      errorNotify(t('home.errorEmail'))
    } else {
      setLoading(true)
      setEmptyFields(false)
      const response = await axios.post('/crm/contact_us', data).catch(err => {
        errorNotify(t('agent.invalid'))
        setLoading(false)
      });
      if (!response) return;
      successNotify(t('home.sendSuccess'))
      setLoading(false)
    }
  }

  const successNotify = (message) => toast.success(message)
  const errorNotify = (message) => toast.error(message)

  return (
    <div className={cls.contact}>
      {loading && <Loader />}
      <div className='container'>
        <div className={`${cls.row} row align-items-center`}>
          <div className='col-md-6'>
            <div className={cls.form}>
              <h4>{t('home.offers')}</h4>
              <input type="text" placeholder={t('home.name')} value={name} onChange={(e) => setName(e.target.value)} />
              <input type="number" placeholder={t('home.phone')} value={phone} onChange={(e) => setPhone(e.target.value)} />
              <SelectBox placeholder={t('home.contact')} list={contactList} value={contact?.title || ''} select={setContact} />
              <input type="text" placeholder={t('home.email')} value={email} onChange={(e) => setEmail(e.target.value)} />
              <input type="text" placeholder={t('home.interests')} value={interest} onChange={(e) => setInterest(e.target.value)} />
              <label>{t('home.contactWay')}</label>
              <SelectBox placeholder={t('home.communication')} list={contactMethods} value={contactMethod?.title || ''} select={setContactMethod} />
              <div className={cls.btn}>
                <button onClick={setContactWay}>{t('home.registerContacting')}</button>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className={cls.image}>
              <div className="blob"></div>
              <img src="/assets/images/onePerson.png" alt="contactImage" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;