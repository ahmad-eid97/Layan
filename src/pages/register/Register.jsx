import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { userActions } from '../../store/slices/userSlice/userSlice';

import SelectBox from '../../components/UIs/SelectBox/Selectbox';

import DatePicker from "react-datepicker";

import axios from '../../Utils/axios';

import { useTranslation } from 'react-i18next';

import { toast } from 'react-toastify';

import "react-datepicker/dist/react-datepicker.css";
import cls from './register.module.scss';
import Loader from '../../components/UIs/Loader/Loader';

const genderList = [
  {
    title: 'ذكر',
    label: 'male'
  },
  {
    title: 'أنثي',
    label: 'female'
  }
]

const Register = () => {
  // COMPONENT HOOKS
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  let initialValues = {
    username: '',
    fname: '',
    lname: '',
    fatherName: '',
    motherName: '',
    passportNo: '',
    email: '',
    password: '',
    phone: '',
    status: '',
  }
  const [fields, setFields] = useState(initialValues);
  const [startDate, setStartDate] = useState(new Date());
  const [gender, setGender] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [emptyFields, setEmptyFields] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation('auth');
  const { t: translate } = useTranslation('common')
  const dispatch = useDispatch();
  // const [status, setStatus] = useState('on')
  // const [choosedLogoImage, setChoosedLogoImage] = useState();
  // const [choosedPassportImage, setChoosedPassportImage] = useState();

  // const inputRef = useRef();
  // const passportInputRef = useRef();

  // const inputClick = () => {
  //   inputRef.current.click()
  // }

  // const inputPassportClick = () => {
  //   passportInputRef.current.click()
  // }

  // const chooseLogoImage = (e) => {
  //   setChoosedLogoImage(e.target.files[0])
  // }

  // const deleteLogoImage = () => {
  //   setChoosedLogoImage('')
  //   inputRef.current.value = ''
  // }

  // const choosePassportImage = (e) => {
  //   setChoosedPassportImage(e.target.files[0])
  // }

  // const deletePassportImage = () => {
  //   setChoosedPassportImage('')
  //   passportInputRef.current.value = ''
  // }

  const handleFields = (e) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value
    })
  }

  // FETCH ALL COUNTRIES
  const fetchAllCountries = async () => {
    const response = await axios.get(`/crm/countries?lang=${i18n.language === 'ar' ? 2 : 1}&limit=30`).catch(err => {
      console.log(err)
    })

    if(!response) return;

    setCountries(response.data.data.countries)
  }

  // FETCH ALL COUNTRIES
  const fetchAllCities = async () => {
    const response = await axios.get(`/crm/cities?lang=${i18n.language === 'ar' ? 2 : 1}&limit=30`).catch(err => {
      console.log(err)
    })

    if(!response) return;

    setCities(response.data.data.cities)
  }

  useEffect(() => {
    // FETCH ALL COUNTRIES
    fetchAllCountries()
    // FETCH ALL COUNTRIES
    fetchAllCities()

  }, [])

  // COMPONENT HANDLERS
  const register = async () => {
    setLoading(true)
    const data = {
      username: fields.username,
      first_name: fields.fname,
      last_name: fields.lname,
      father_name: fields.fatherName,
      mother_name: fields.motherName,
      passport_no: fields.passportNo,
      gender: gender.label,
      phone: fields.phone,
      birth_date: startDate,
      country_id: country.id,
      city_id: city.id,
      email: fields.email,
      password: fields.password,
    }

    Object.values(data).forEach(one => {
      if(one === '') {
        setEmptyFields(true);
        setLoading(false)
      }
    })

    const response = await axios.post('/crm/students/auth/register', data);

    if(!response || !response.data.success) {

      setLoading(false)

      console.log('here')

      if(emptyFields === false) {

        errorNotify(translate('fields.error'));

      }

      return;
    };

    console.log(response)

    setLoading(false)

    dispatch(userActions.setUser(response.data.data.student))

    navigate('/')

  }

  const successNotify = (message) => toast.success(message)
  const errorNotify = (message) => toast.error(message)

  return (
    <div className={cls.register}>

      {loading && <Loader />}
        
      <div className="container">

        <h1 className='label'>

          <img src="/assets/images/cap.png" alt="titleImage" />

          <p>طلب التسجيل للحصول علي القبول الجامعى</p>

        </h1>

        <div className={cls.form}>

          <div className={`${cls.block} ${cls[i18n.language]}`}>

            <h4><i className="fa-light fa-user"></i> المعلومات الشخصية</h4>

            <div className="row">

              <div className="col-lg-6">

                <div className={cls.field}>

                  <label>إسم المستخدم</label>

                  <input 
                    type="text" 
                    placeholder='إسم المستخدم' 
                    name="username" 
                    value={fields.username} 
                    onChange={(e) => handleFields(e)}
                    className={emptyFields && fields.username === '' ? cls.error : ''}
                    />

                  {emptyFields && fields.username === '' &&
                  
                    <p>هذا الحقل لا يجب ان يكون فارغاَ</p>
                  
                  }

                </div>

              </div>

              <div className="col-lg-6">

                <div className={cls.field}>

                  <label>الإسم الاول</label>

                  <input 
                    type="text" 
                    placeholder='الإسم الاول' 
                    name="fname" 
                    value={fields.fname} 
                    onChange={(e) => handleFields(e)}
                    className={emptyFields && fields.fname === '' ? cls.error : ''}
                    />

                    {emptyFields && fields.fname === '' &&
                    
                      <p>هذا الحقل لا يجب ان يكون فارغاَ</p>
                    
                    }

                </div>

              </div>

              <div className="col-lg-6">

                <div className={cls.field}>

                  <label>الإسم الأخير</label>

                  <input 
                    type="text" 
                    placeholder='الإسم الأخير' 
                    name="lname" 
                    value={fields.lname} 
                    onChange={(e) => handleFields(e)} 
                    className={emptyFields && fields.lname === '' ? cls.error : ''}
                    />

                  {emptyFields && fields.lname === '' &&

                    <p>هذا الحقل لا يجب ان يكون فارغاَ</p>

                  }

                </div>

              </div>

              <div className="col-lg-6">

                <div className={cls.field}>

                  <label>إسم الأب</label>

                  <input 
                    type="text" 
                    placeholder='إسم الأب' 
                    name="fatherName" 
                    value={fields.fatherName} 
                    onChange={(e) => handleFields(e)} 
                    className={emptyFields && fields.fatherName === '' ? cls.error : ''}
                    />

                  {emptyFields && fields.fatherName === '' &&

                    <p>هذا الحقل لا يجب ان يكون فارغاَ</p>

                  }

                </div>

              </div>

              <div className="col-lg-6">

                <div className={cls.field}>

                  <label>إسم الأم</label>

                  <input 
                    type="text" 
                    placeholder='إسم الأم' 
                    name="motherName" 
                    value={fields.motherName} 
                    onChange={(e) => handleFields(e)} 
                    className={emptyFields && fields.motherName === '' ? cls.error : ''}
                    />

                    {emptyFields && fields.motherName === '' &&
  
                      <p>هذا الحقل لا يجب ان يكون فارغاَ</p>
  
                    }

                </div>

              </div>

              <div className="col-lg-6">

                <div className={cls.field}>

                  <label>تاريخ الميلاد</label>

                  <div className={`${cls.date} ${cls[i18n.language]}`}>

                    <i className="fa-light fa-calendar-days"></i>

                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className={emptyFields && startDate === '' ? cls.error : ''} />

                    {emptyFields && fields.startDate === '' &&

                      <p>هذا الحقل لا يجب ان يكون فارغاَ</p>

                    }

                  </div>

                </div>

              </div>

              <div className="col-lg-6">

                <div className={cls.field}>

                  <label>رقم جواز السفر</label>

                  <input 
                    type="text" 
                    placeholder='رقم جواز السفر' 
                    name="passportNo" 
                    value={fields.passportNo} 
                    onChange={(e) => handleFields(e)} 
                    className={emptyFields && fields.passportNo === '' ? cls.error : ''}
                    />

                  {emptyFields && fields.passportNo === '' &&

                    <p>هذا الحقل لا يجب ان يكون فارغاَ</p>

                  }

                </div>

              </div>

              <div className="col-lg-6">

                <div className={cls.field}>

                  <label>الجنس</label>

                  <SelectBox placeholder="الجنس" list={genderList} value={gender['title'] || ''} select={setGender} error={emptyFields && !gender ? true : false} />

                  {emptyFields && !gender &&

                    <p>هذا الحقل لا يجب ان يكون فارغاَ</p>

                  }

                </div>

              </div>

            </div>

          </div>

          <div className={`${cls.block} ${cls[i18n.language]}`}>

            <h4><i className="fa-light fa-lock-keyhole"></i> معلومات الحساب</h4>

            <div className="row">

              <div className="col-lg-6">

                <div className={cls.field}>

                  <label>البريد الإلكتروني</label>

                  <input 
                    type="text" 
                    placeholder='البريد الإلكتروني' 
                    name="email" value={fields.email} 
                    onChange={(e) => handleFields(e)} 
                    className={emptyFields && fields.email === '' ? cls.error : ''}
                  />

                  {emptyFields && !fields.email &&

                    <p>هذا الحقل لا يجب ان يكون فارغاَ</p>

                  }

                </div>

              </div>

              <div className="col-lg-6">

                <div className={cls.field}>

                  <label>كلمة المرور</label>

                  <input 
                    type="text" 
                    placeholder='كلمة المرور' 
                    name="password" 
                    value={fields.password} 
                    onChange={(e) => handleFields(e)} 
                    className={emptyFields && fields.password === '' ? cls.error : ''}
                  />

                  {emptyFields && !fields.password &&

                    <p>هذا الحقل لا يجب ان يكون فارغاَ</p>

                  }

                </div>

              </div>

              <div className="col-lg-6">

                <div className={cls.field}>

                  <label>رقم الهاتف</label>

                  <input 
                    type="text" 
                    placeholder='رقم الهاتف' 
                    name="phone" 
                    value={fields.phone} 
                    onChange={(e) => handleFields(e)}
                    className={emptyFields && fields.phone === '' ? cls.error : ''}
                  />

                  {emptyFields && !fields.phone &&

                    <p>هذا الحقل لا يجب ان يكون فارغاَ</p>

                  }

                </div>

              </div>

            </div>

          </div>

          {/* <div className={`${cls.block} ${cls[i18n.language]}`}>

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

          </div> */}

          <div className={`${cls.block} ${cls[i18n.language]}`}>

            <h4><i className="fa-light fa-earth-americas"></i> معلومات عامة</h4>

            <div className="row">

              <div className="col-lg-6">

                <div className={cls.field}>

                  <label>الدولة</label>

                  <SelectBox placeholder="الدولة" list={countries} value={country['title'] || ''} select={setCountry} error={emptyFields && !country ? true : false} />

                  {emptyFields && !country &&

                    <p>هذا الحقل لا يجب ان يكون فارغاَ</p>

                  }

                </div>

              </div>

              <div className="col-lg-6">

                <div className={cls.field}>

                  <label>المدينة</label>

                  <SelectBox placeholder="المدينة" list={cities} value={city['title'] || ''} select={setCity} error={emptyFields && !city ? true : false} />

                  {emptyFields && !city &&

                    <p>هذا الحقل لا يجب ان يكون فارغاَ</p>

                  }

                </div>

              </div>

              {/* <div className="col-lg-6">

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

                </div>

              </div> */}

            </div>

          </div>

          <div className={cls.btn}>

            <button onClick={register}>{t('register.register')}</button>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Register