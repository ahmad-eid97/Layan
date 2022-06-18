import { useRef, useState } from 'react';

import SelectBox from '../../components/UIs/SelectBox/Selectbox';

import DatePicker from "react-datepicker";

import { useTranslation } from 'react-i18next';

import "react-datepicker/dist/react-datepicker.css";
import cls from './register.module.scss';

const genderList = [
  'ذكر',
  'أنثى'
]

const countries = [
  'Egypt',
  'Saudi Arabia',
  'United Arab Emirates',
  'Kuwait',
  'Oman',
  'Bahrain',
  'Qatar',
  'Jordan'
]

const cities = [
  'Cairo',
  'Alexandria',
  'Giza',
  'Sharqia',
  'Sohag',
  'Dahra',
  'Kuwait City',
  'Amman'
]

const Register = () => {
  // COMPONENT HOOKS
  let initialValues = {
    username: '',
    fname: '',
    lname: '',
    fatherName: '',
    mothername: '',
    passportNo: '',
    email: '',
    password: '',
    phone: '',
    country: '',
    city: '',
    status: '',
  }
  const [fields, setFields] = useState(initialValues);
  const [startDate, setStartDate] = useState(new Date());
  const [gender, setGender] = useState('')
  const [country, setCountry] = useState('')
  const [city, setCity] = useState('')
  const [status, setStatus] = useState('on')
  const { i18n } = useTranslation()
  const [choosedLogoImage, setChoosedLogoImage] = useState();
  const [choosedPassportImage, setChoosedPassportImage] = useState();
  const inputRef = useRef();
  const passportInputRef = useRef();

  const inputClick = () => {
    inputRef.current.click()
  }

  const inputPassportClick = () => {
    passportInputRef.current.click()
  }

  const chooseLogoImage = (e) => {
    setChoosedLogoImage(e.target.files[0])
  }

  const deleteLogoImage = () => {
    setChoosedLogoImage('')
    inputRef.current.value = ''
  }

  const choosePassportImage = (e) => {
    setChoosedPassportImage(e.target.files[0])
  }

  const deletePassportImage = () => {
    setChoosedPassportImage('')
    passportInputRef.current.value = ''
  }

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

        <div className={cls.form}>

          <div className={cls.block}>

            <h4><i className="fa-light fa-user"></i> المعلومات الشخصية</h4>

            <div className="row">

              <div className="col-lg-6">

                <div className={cls.field}>

                  <label>إسم المستخدم</label>

                  <input type="text" placeholder='إسم المستخدم' name="username" value={fields.username} onChange={(e) => handleFields(e)} />

                </div>

              </div>

              <div className="col-lg-6">

                <div className={cls.field}>

                  <label>الإسم الاول</label>

                  <input type="text" placeholder='الإسم الاول' name="fname" value={fields.fname} onChange={(e) => handleFields(e)} />

                </div>

              </div>

              <div className="col-lg-6">

                <div className={cls.field}>

                  <label>الإسم الأخير</label>

                  <input type="text" placeholder='الإسم الأخير' name="lname" value={fields.lname} onChange={(e) => handleFields(e)} />

                </div>

              </div>

              <div className="col-lg-6">

                <div className={cls.field}>

                  <label>إسم الأب</label>

                  <input type="text" placeholder='إسم الأب' name="fatherName" value={fields.fatherName} onChange={(e) => handleFields(e)} />

                </div>

              </div>

              <div className="col-lg-6">

                <div className={cls.field}>

                  <label>إسم الأم</label>

                  <input type="text" placeholder='إسم الأم' name="motherName" value={fields.motherName} onChange={(e) => handleFields(e)} />

                </div>

              </div>

              <div className="col-lg-6">

                <div className={cls.field}>

                  <label>تاريخ الميلاد</label>

                  <div className={`${cls.date} ${cls[i18n.language]}`}>

                    <i className="fa-light fa-calendar-days"></i>

                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />

                  </div>

                </div>

              </div>

              <div className="col-lg-6">

                <div className={cls.field}>

                  <label>رقم جواز السفر</label>

                  <input type="text" placeholder='رقم جواز السفر' name="passportNo" value={fields.pasportNo} onChange={(e) => handleFields(e)} />

                </div>

              </div>

              <div className="col-lg-6">

                <div className={cls.field}>

                  <label>الجنس</label>

                  <SelectBox placeholder="الجنس" list={genderList} value={gender} select={setGender} />

                </div>

              </div>

            </div>

          </div>

          <div className={cls.block}>

            <h4><i className="fa-light fa-lock-keyhole"></i> معلومات الحساب</h4>

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

                  <input type="text" placeholder='كلمة المرور' name="password" value={fields.password} onChange={(e) => handleFields(e)} />

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

          <div className={cls.block}>

            <h4><i className="fa-light fa-camera-retro"></i> الوثائق</h4>

            <div className="row">

              <div className="col-lg-6">

                <div className={cls.field}>

                  <label>الشعار</label>

                  <div className={cls.imageArea}>

                    {choosedLogoImage ? 

                      <>
                        
                        <div className={cls.images}>

                          <div className={cls.image}>

                            <img src={URL.createObjectURL(choosedLogoImage)} alt="uploadedImage" />

                            <i className="fa-regular fa-xmark" onClick={deleteLogoImage}></i>

                          </div>

                          {choosedLogoImage.name.substring(0, 20) + '...'}

                        </div>

                      </>

                      : 

                      <div onClick={inputClick}>

                        <i className="fa-light fa-cloud-arrow-up"></i>
                        
                        <p>
                          إضغط لرفع ملف
                        </p>

                      </div>

                      }

                      <input type="file" style={{ display: 'none' }} ref={inputRef} onChange={chooseLogoImage} />

                  </div>

                </div>

              </div>

              <div className="col-lg-6">

                <div className={cls.field}>

                  <label>ملف جواز السفر</label>

                  <div className={cls.imageArea}>

                    {choosedPassportImage ? 

                      <>
                        
                        <div className={cls.images}>

                          <div className={cls.image}>

                            <img src={URL.createObjectURL(choosedPassportImage)} alt="uploadedImage" />

                            <i className="fa-regular fa-xmark" onClick={deletePassportImage}></i>

                          </div>

                          {choosedPassportImage.name.substring(0, 20) + '...'}

                        </div>

                      </>

                      : 

                      <div onClick={inputPassportClick}>

                        <i className="fa-light fa-cloud-arrow-up"></i>
                        
                        <p>
                          إضغط لرفع ملف
                        </p>

                      </div>

                      }

                      <input type="file" style={{ display: 'none' }} ref={passportInputRef} onChange={choosePassportImage} />

                  </div>

                </div>

              </div>

            </div>

          </div>

          <div className={cls.block}>

            <h4><i className="fa-light fa-earth-americas"></i> معلومات عامة</h4>

            <div className="row">

              <div className="col-lg-6">

                <div className={cls.field}>

                  <label>الدولة</label>

                  <SelectBox placeholder="الدولة" list={countries} value={country} select={setCountry} />

                </div>

              </div>

              <div className="col-lg-6">

                <div className={cls.field}>

                  <label>المدينة</label>

                  <SelectBox placeholder="المدينة" list={cities} value={city} select={setCity} />

                </div>

              </div>

              <div className="col-lg-6">

                <div className={`${cls.field} ${cls.radio}`}>

                  <label>الحالة</label>

                  <div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onChange={() => setStatus('on')} checked={status === 'on'} />
                    <span>
                      نشط
                    </span>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onChange={() => setStatus('off')} checked={status === 'off'} />
                    <span>
                      غير نشط
                    </span>
                  </div>
                  </div>

                  {/* <input type="text" placeholder='الحالة' name="status" value={fields.status} onChange={(e) => handleFields(e)} /> */}

                </div>

              </div>

            </div>

          </div>

          <div className={cls.btn}>

            <button>تسجيل طلب الإلتحاق</button>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Register