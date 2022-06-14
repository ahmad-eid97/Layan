import { useState } from 'react';

import SelectBox from '../../UIs/SelectBox/Selectbox';

import cls from './contact.module.scss';

const contactList = [
  'واتساب',
  'فيس بوك',
  'تويتر',
  'رقم الهاتف'
]

const contactMethods = [
  'واتساب',
  'مقابلة',
  'الإتصال'
]

const Contact = () => {
  // COMPONENT HOOKS
  const [contact, setContact] = useState('واتساب');
  const [contactMethod, setContactMethod] = useState('مقابلة');

  return (
    <div className={cls.contact}>

      <div className='container'>

        <div className={`${cls.row} row align-items-center`}>

          <div className='col-md-6'>

            <div className={cls.form}>

              <h4>تابع عروض الجامعات المميزة</h4>

              <input type="text" placeholder='الإسم' />

              <input type="number" placeholder='رقم الهاتف' />

              <SelectBox placeholder='الإتصال' list={contactList} value={contact} select={setContact} />

              <input type="text" placeholder='البريد الإلكتروني' />

              <input type="text" placeholder='الإهتمامات' />

              <label>إختر طريقة التواصل</label>

              <SelectBox placeholder='التواصل' list={contactMethods} value={contactMethod} select={setContactMethod} />

            </div>

          </div>

          <div className='col-md-6'>

            <div className={cls.image}>

              <div className="blob">

              </div>

              <img src="/assets/images/girl.png" alt="contactImage" />

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Contact