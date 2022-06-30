import { useState } from 'react';

import SelectBox from '../../UIs/SelectBox/Selectbox';

import axios from '../../../Utils/axios';

import { toast } from 'react-toastify';

import cls from './contact.module.scss';

const contactList = [
  {
    title: 'واتساب',
    label: 'whatsapp'
  },
  {
    title: 'فيس بوك',
    label: 'facebook'
  },
  {
    title: 'تويتر',
    label: 'twitter'
  },
  {
    title: 'رقم الهاتف',
    label: 'phone'
  }
]

const contactMethods = [
  {
    title: 'واتساب',
    label: 'whatsapp'
  },
  {
    title: 'مقابلة',
    label: 'interview'
  },
  {
    title: 'الإتصال',
    label: 'call'
  }
]

const Contact = () => {
  // COMPONENT HOOKS
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState('');
  const [contact, setContact] = useState();
  const [emptyFields, setEmptyFields] = useState(false)
  const [contactMethod, setContactMethod] = useState();

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

    if(checkEmpty.length > 0) {

      setEmptyFields(true)

      errorNotify('يجب إدخال البيانات كاملة')

    } else {

      setEmptyFields(false)

      const response = await axios.post('/crm/contact_us', data).catch(err => console.log(err));
  
      if(!response) return;

      successNotify('تم إرسال البيانات بنجاح')
  
      console.log(response)

    }
  }

  const successNotify = (message) => toast.success(message)
  const errorNotify = (message) => toast.error(message)

  return (
    <div className={cls.contact}>

      <div className='container'>

        <div className={`${cls.row} row align-items-center`}>

          <div className='col-md-6'>

            <div className={cls.form}>

              <h4>تابع عروض الجامعات المميزة</h4>

              <input type="text" placeholder='الإسم' value={name} onChange={(e) => setName(e.target.value)} />

              <input type="number" placeholder='رقم الهاتف' value={phone} onChange={(e) => setPhone(e.target.value)} />

              <SelectBox placeholder='الإتصال' list={contactList} value={contact?.title || ''} select={setContact} />

              <input type="text" placeholder='البريد الإلكتروني' value={email} onChange={(e) => setEmail(e.target.value)} />

              <input type="text" placeholder='الإهتمامات' value={interest} onChange={(e) => setInterest(e.target.value)} />

              <label>إختر طريقة التواصل</label>

              <SelectBox placeholder='التواصل' list={contactMethods} value={contactMethod?.title || ''} select={setContactMethod} />

              <div className={cls.btn}>

                <button onClick={setContactWay}>سجل تواصلك</button>

              </div>

            </div>

          </div>

          <div className='col-md-6'>

            <div className={cls.image}>

              <div className="blob"></div>

              <img src="/assets/images/onePerson.png" alt="contactImage" />

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Contact