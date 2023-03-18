import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { userActions } from '../../store/slices/userSlice/userSlice';

import SelectBox from '../../components/UIs/SelectBox/Selectbox';
import Choose from '../../components/UIs/Choose/Choose';

import DatePicker from "react-datepicker";

import axios from '../../Utils/axios';

import Loader from '../../components/UIs/Loader/Loader';

import validator from 'validator';

import { useTranslation } from 'react-i18next';

import { toast } from 'react-toastify';

import "react-datepicker/dist/react-datepicker.css";
import cls from './register.module.scss';

import Cookies from 'universal-cookie';

const cookie = new Cookies();

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
  const [errorFields, setErrorFields] = useState({})
  const navigate = useNavigate();
  const { t, i18n } = useTranslation('auth');
  const dispatch = useDispatch();

  const handleFields = (e) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value
    })
  }

  // FETCH ALL COUNTRIES
  const fetchAllCountries = async () => {
    const response = await axios.get(`/crm/countries?lang=${i18n.language === 'ar' ? 'ar' : 1}&limit=500`).catch(err => {
      console.log(err)
    })

    if(!response) return;

    setCountries(response.data.data.countries)
  }

  // FETCH ALL COUNTRIES
  const fetchAllCities = async () => {
    const response = await axios.get(`/crm/cities?lang=${i18n.language === 'ar' ? 'ar' : 1}&limit=500`).catch(err => {
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

    const emptyCheck = Object.values(data).filter(one => one === undefined || one === '');

    if(emptyCheck.length <= 0) {

      if(!validator.isEmail(fields.email)) {
        setLoading(false)
        return errorNotify(t('contact.emailInvalid'))
      }

      const response = await axios.post('/crm/students/auth/register', data);
  
      if(!response || !response.data.success) {
        setErrorFields(response.data.errors)

        if(Object.values(response.data.errors).length) {
          Object.values(response.data.errors).forEach(error => {
            errorNotify(error[0])
          })
        } else {
          errorNotify(t('agent.invalid'))
        }
  
        setLoading(false)
  
        return;
      };
  
      setLoading(false)
  
      dispatch(userActions.setUser(response.data.data.student))
  
      navigate('/registered')

    }

  }

  const chooseCountry = async (country) => {
    setCountry(country);

    setLoading(true)

    const citiesResponse = await axios.get(`/crm/cities?lang=${i18n.language}&limit=30&country_id=${country.id}`);

    if(!citiesResponse) return;

    setLoading(false)

    setCities(citiesResponse.data.data.cities)

    setCity(citiesResponse.data.data.cities[0])
  }

  const successNotify = (message) => toast.success(message);
  const errorNotify = (message) => toast.error(message);

  if (cookie.get('layanAuth')) return null;

  return (
    <div className={cls.register}>

      {loading && <Loader />}
        
      <div className="container">

        <h1 className='label'>

          <img src="/assets/images/cap.png" alt="titleImage" />

          <p>{t('register.title')}</p>

        </h1>

        <div className={cls.form}>

          <div className={`${cls.block} ${cls[i18n.language]}`}>

            <h4><i className="fa-light fa-user"></i> {t('register.personal')}</h4>

            <div className="row">

              <div className="col-lg-6">

                <div className={cls.field}>

                  <label>{t('register.name')}</label>

                  <input 
                    type="text" 
                    placeholder={t('register.name')}  
                    name="username" 
                    value={fields.username} 
                    onChange={(e) => handleFields(e)}
                    className={(emptyFields && fields.username === '') || errorFields.username ? cls.error : ''}
                    />

                  {emptyFields && fields.username === '' &&
                  
                    <p>{t('register.required')} </p>
                  
                  }

                  {errorFields.username &&
                  
                    <p>{errorFields.username}</p>
                  
                  }

                </div>

              </div>

              <div className="col-lg-6">

                <div className={cls.field}>

                  <label>{t('register.fName')} </label>

                  <input 
                    type="text" 
                    placeholder={t('register.fName')}  
                    name="fname" 
                    value={fields.fname} 
                    onChange={(e) => handleFields(e)}
                    className={(emptyFields && fields.fname === '') || errorFields.first_name ? cls.error : ''}
                    />

                    {emptyFields && fields.fname === '' &&
                    
                      <p>{t('register.required')} </p>
                    
                    }

                    {errorFields.first_name &&
                    
                      <p>{errorFields.first_name}</p>
                    
                    }

                </div>

              </div>

              <div className="col-lg-6">

                <div className={cls.field}>

                  <label>{t('register.lName')} </label>

                  <input 
                    type="text" 
                    placeholder={t('register.lName')} 
                    name="lname" 
                    value={fields.lname} 
                    onChange={(e) => handleFields(e)} 
                    className={(emptyFields && fields.lname === '') || errorFields.last_name ? cls.error : ''}
                    />

                  {emptyFields && fields.lname === '' &&

                    <p>{t('register.required')}</p>

                  }

                  {errorFields.last_name &&
                  
                    <p>{errorFields.last_name}</p>
                  
                  }

                </div>

              </div>

              <div className="col-lg-6">

                <div className={cls.field}>

                  <label>{t('register.fatherName')}</label>

                  <input 
                    type="text" 
                    placeholder={t('register.fatherName')}
                    name="fatherName" 
                    value={fields.fatherName} 
                    onChange={(e) => handleFields(e)} 
                    className={(emptyFields && fields.fatherName === '') || errorFields.father_name ? cls.error : ''}
                  />

                  {emptyFields && fields.fatherName === '' &&

                    <p>{t('register.required')}</p>

                  }

                  {errorFields.father_name &&
                  
                    <p>{errorFields.father_name}</p>
                  
                  }

                </div>

              </div>

              <div className="col-lg-6">

                <div className={cls.field}>

                  <label>{t('register.motherName')}</label>

                  <input 
                    type="text" 
                    placeholder={t('register.motherName')}
                    name="motherName" 
                    value={fields.motherName} 
                    onChange={(e) => handleFields(e)} 
                    className={(emptyFields && fields.motherName === '') || errorFields.mother_name ? cls.error : ''}
                    />

                    {emptyFields && fields.motherName === '' &&
  
                      <p>{t('register.required')}</p>
  
                    }

                    {errorFields.mother_name &&
                    
                      <p>{errorFields.mother_name}</p>
                    
                    }

                </div>

              </div>

              <div className="col-lg-6">

                <div className={cls.field}>

                  <label>{t('register.birthDate')}</label>

                  <div className={`${cls.date} ${cls[i18n.language]}`}>

                    <i className="fa-light fa-calendar-days"></i>

                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className={emptyFields && startDate === '' ? cls.error : ''} showYearDropdown yearDropdownItemNumber={50} maxDate={Date.now()} scrollableYearDropdown />

                    {emptyFields && fields.startDate === '' &&

                      <p>{t('register.required')} </p>

                    }

                  </div>

                </div>

              </div>

              <div className="col-lg-6">

                <div className={cls.field}>

                  <label>{t('register.passportNo')} </label>

                  <input 
                    type="number" 
                    placeholder={t('register.passportNo')} 
                    name="passportNo" 
                    value={fields.passportNo} 
                    onChange={(e) => handleFields(e)} 
                    className={(emptyFields && fields.passportNo === '') || errorFields.passport_no ? cls.error : ''}
                    />

                  {emptyFields && fields.passportNo === '' &&

                    <p>{t('register.required')}</p>

                  }

                  {errorFields.passport_no &&
                  
                    <p>{errorFields.passport_no}</p>
                  
                  }

                </div>

              </div>

              <div className="col-lg-6">

                <div className={cls.field}>

                  <label>{t('register.gender')}</label>

                  <SelectBox placeholder={t('register.gender')} list={genderList} value={gender['title'] || ''} select={setGender} error={emptyFields && !gender ? true : false} />

                  {emptyFields && !gender &&

                    <p>{t('register.required')}</p>

                  }

                </div>

              </div>

            </div>

          </div>

          <div className={`${cls.block} ${cls[i18n.language]}`}>

            <h4><i className="fa-light fa-lock-keyhole"></i> {t('register.accountInfo')}</h4>

            <div className="row">

              <div className="col-lg-6">

                <div className={cls.field}>

                  <label>{t('register.email')}</label>

                  <input 
                    type="text" 
                    placeholder={t('register.email')}  
                    name="email" value={fields.email} 
                    onChange={(e) => handleFields(e)} 
                    className={(emptyFields && fields.email === '') || errorFields.email ? cls.error : ''}
                  />

                  {emptyFields && !fields.email &&

                    <p>{t('register.required')} </p>

                  }

                  {errorFields.email &&
                  
                    <p>{errorFields.email}</p>
                  
                  }

                </div>

              </div>

              <div className="col-lg-6">

                <div className={cls.field}>

                  <label>{t('register.password')}</label>

                  <input 
                    type="password" 
                    placeholder={t('register.password')} 
                    name="password" 
                    value={fields.password} 
                    onChange={(e) => handleFields(e)} 
                    className={(emptyFields && fields.password === '') || errorFields.password ? cls.error : ''}
                  />

                  {emptyFields && !fields.password &&

                    <p>{t('register.required')}</p>

                  }

                  {errorFields.password &&
                  
                    <p>{errorFields.password}</p>
                  
                  }

                </div>

              </div>

              <div className="col-lg-6">

                <div className={cls.field}>

                  <label>{t('register.phone')}</label>

                  <input 
                    type="number" 
                    placeholder={t('register.phone')} 
                    name="phone" 
                    value={fields.phone} 
                    onChange={(e) => handleFields(e)}
                    className={(emptyFields && fields.phone === '') || errorFields.phone ? cls.error : ''}
                  />

                  {emptyFields && !fields.phone &&

                    <p>{t('register.required')}</p>

                  }

                  {errorFields.phone &&
                  
                    <p>{errorFields.phone}</p>
                  
                  }

                </div>

              </div>

            </div>

          </div>

          <div className={`${cls.block} ${cls[i18n.language]}`}>

            <h4><i className="fa-light fa-earth-americas"></i> {t('register.generalInfo')}</h4>

            <div className="row">

              <div className="col-lg-6">

                <div className={cls.field}>

                  <label>{t('register.country')}</label>
        
                  <Choose placeholder={t('register.country')} keyword='title' results={countries} choose={chooseCountry} value={country['title'] || ''}  error={emptyFields && !country ? true : false} />

                </div>

              </div>

              <div className="col-lg-6">

                <div className={cls.field}>

                  <label>{t('register.city')}</label>
        
                  <Choose placeholder={t('register.city')} keyword='title' results={cities} choose={setCity} value={city?.title || ''}  error={emptyFields && !city ? true : false} />

                </div>

              </div>

            </div>

          </div>

          <div className={cls.btn}>

            <button onClick={register}>{t('register.registerNew')}</button>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Register