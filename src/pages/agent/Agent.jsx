import { useState, useEffect } from 'react';

import SelectBox from '../../components/UIs/SelectBox/Selectbox';
import Loader from '../../components/UIs/Loader/Loader';

import { useTranslation } from 'react-i18next';

import axios from '../../Utils/axios';

import { toast } from 'react-toastify';

import "react-datepicker/dist/react-datepicker.css";
import cls from './agent.module.scss';
import UploadField from '../../components/UIs/UploadField/UploadField';

const Agent = () => {
  // COMPONENT HOOKS
  let initialValues = {
    business_name: '',
    website_url: '',
    licence_no: '',
    number_experience: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    phone: '',
  }
  const [fields, setFields] = useState(initialValues);
  const { t, i18n } = useTranslation('common');
  const [logoAttach, setLogoAttach] = useState({file_url: '', name: `${t('agent.logo')}`});
  const [licenceAttach, setLicenceAttach] = useState({file_url: '', name: `${t('agent.licencePhoto')}`});
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState({});
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState({});
  const [emptyFields, setEmptyFields] = useState(false);
  const [loading, setLoading] = useState(false)

  const handleFields = (e) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value
    })
  }

  const updateLogoAttachment = (attach) => {
    setLogoAttach(attach);
  }

  const updateLicenceAttachment = (attach) => {
    setLicenceAttach(attach);
  }

  const fetchAllCountries = async () => {
    setLoading(true)

    const response = await axios.get(`/crm/countries?lang=${i18n.language}&limit=30`);

    if(!response) return;

    setCountries(response.data.data.countries)

    setLoading(false)
  }

  const fetchCity = async (countryId) => {
    setLoading(true)

    const response = await axios.get(`/crm/cities?lang=${i18n.language}&limit=30&country_id=${countryId}`);

    if(!response) return;

    setCities(response.data.data.cities)

    setCity(response.data.data.cities[0])

    setLoading(false)
  }

  useEffect(() => {

    fetchAllCountries();

  }, [])

  const selectCountry = (country) => {
    setCountry(country)
    fetchCity(country.id)
  }

  const register = async () => {
    const data = {
      ...fields,
      logo_file: logoAttach.file_url,
      licence_file: licenceAttach.file_url,
      country_id: country.id,
      city_id: city.id
    }

    Object.values(data).forEach(value => {
      if(!value) {
        setEmptyFields(true)
      }
    })

    const empties = Object.values(data).filter(one => one === undefined || one === '')

    if(empties.length <= 0) {
      
      const response = await axios.post('/crm/agents', data);

      if(!response || !response.data.success) {
        errorNotify(t('agent.invalid'))
        return;
      };

    }
  }

  const successNotify = (message) => toast.success(message)
  const errorNotify = (message) => toast.error(message)

  return (
    <div className={cls.register}>

      {loading && <Loader />}
        
      <div className="container">

        <h1 className='label'>

          <img src="/assets/images/cap.png" alt="titleImage" />

          <p>{t('agent.title')}</p>

        </h1>

        <div className={cls.info}>

          <div className="col-xs-12">

            <div  className={`${cls.section} ${cls[i18n.language]}`}>

              <h3><i className="fa-light fa-book-open-cover"></i> <span>{t('agent.agents')}</span></h3>

              <p>{t('agent.text')}</p>

            </div>

          </div>       

        </div>

        <div className={cls.form}>

          <div className={`${cls.block} ${cls[i18n.language]}`}>

            <h4><i className="fa-light fa-building"></i> {t('agent.institution')}</h4>

            <div className="row">

              <div className="col-lg-6">

                <div className={cls.field}>

                  <label>{t('agent.institutionName')}</label>

                  <input 
                    type="text" 
                    placeholder={t('agent.institutionName')} 
                    name="business_name" 
                    value={fields.business_name} 
                    onChange={(e) => handleFields(e)} 
                    className={emptyFields && fields.business_name === '' ? cls.error : ''}
                    />

                  {emptyFields && !fields.business_name &&

                    <p>{t('agent.required')}</p>

                  }

                </div>

              </div>

              <div className="col-lg-6">

                <div className={cls.field}>

                  <label>{t('agent.licenceName')}</label>

                  <input 
                    type="text" 
                    placeholder={t('agent.licenceName')}
                    name="licence_no" 
                    value={fields.licence_no} 
                    onChange={(e) => handleFields(e)}
                    className={emptyFields && fields.licence_no === '' ? cls.error : ''} 
                  />

                  {emptyFields && !fields.licence_no &&

                    <p>{t('agent.required')}</p>

                  }

                </div>

              </div>

              <div className="col-lg-6">

                <div className={cls.field}>

                  <label>{t('agent.years')}</label>

                  <input 
                    type="text" 
                    placeholder={t('agent.years')}
                    name="number_experience" 
                    value={fields.number_experience} 
                    onChange={(e) => handleFields(e)} 
                    className={emptyFields && fields.number_experience === '' ? cls.error : ''} 
                  />

                  {emptyFields && !fields.number_experience &&

                    <p>{t('agent.required')}</p>

                  }

                </div>

              </div>

              <div className="col-lg-6">

                <div className={cls.field}>

                  <label>{t('agent.website')}</label>

                  <input 
                    type="text" 
                    placeholder={t('agent.website')} 
                    name="website_url" 
                    value={fields.website_url} 
                    onChange={(e) => handleFields(e)} 
                    className={emptyFields && fields.website_url === '' ? cls.error : ''} 
                  />

                  {emptyFields && !fields.website_url &&

                    <p>{t('agent.required')}</p>

                  }

                </div>

              </div>

              <div className='col-lg-6'>

                <UploadField attach={logoAttach} updateAttachment={updateLogoAttachment} empty={!logoAttach.file_url && emptyFields ? true : false} />

              </div>

              <div className='col-lg-6'>

                <UploadField attach={licenceAttach} updateAttachment={updateLicenceAttachment} empty={!licenceAttach.file_url && emptyFields ? true : false} />

              </div>

            </div>

          </div>

          <div className={`${cls.block} ${cls[i18n.language]}`}>

            <h4><i className="fa-light fa-user-lock"></i> {t('agent.register')}</h4>

            <div className="row">

            <div className="col-lg-6">

              <div className={cls.field}>

                <label>{t('agent.fName')}</label>

                <input 
                  type="text" 
                  placeholder={t('agent.fName')}
                  name="first_name" 
                  value={fields.first_name} 
                  onChange={(e) => handleFields(e)} 
                  className={emptyFields && fields.first_name === '' ? cls.error : ''} 
                />

                {emptyFields && !fields.first_name &&

                  <p>{t('agent.required')}</p>

                }

              </div>

            </div>

            <div className="col-lg-6">

              <div className={cls.field}>

                <label>{t('agent.lName')}</label>

                <input 
                  type="text" 
                  placeholder={t('agent.lName')} 
                  name="last_name" 
                  value={fields.last_name} 
                  onChange={(e) => handleFields(e)} 
                  className={emptyFields && fields.last_name === '' ? cls.error : ''} 
                />

                {emptyFields && !fields.last_name &&

                  <p>{t('agent.required')}</p>

                }

              </div>

            </div>

              <div className="col-lg-6">

                <div className={cls.field}>

                  <label>{t('agent.email')}</label>

                  <input 
                    type="text" 
                    placeholder={t('agent.email')}
                    name="email" 
                    value={fields.email} 
                    onChange={(e) => handleFields(e)} 
                    className={emptyFields && fields.email === '' ? cls.error : ''} 
                  />

                  {emptyFields && !fields.email &&

                    <p>{t('agent.required')}</p>

                  }

                </div>

              </div>

              <div className="col-lg-6">

                <div className={cls.field}>

                  <label>{t('agent.password')}</label>

                  <input 
                    type="password" 
                    placeholder={t('agent.password')}
                    name="password" 
                    value={fields.password} 
                    onChange={(e) => handleFields(e)} 
                    className={emptyFields && fields.password === '' ? cls.error : ''} 
                  />

                  {emptyFields && !fields.password &&

                    <p>{t('agent.required')}</p>

                  }

                </div>

              </div>

              <div className="col-lg-6">

                <div className={cls.field}>

                  <label>{t('agent.country')}</label>

                  <SelectBox placeholder={t('agent.country')} list={countries} value={country.title || ''} select={selectCountry} error={emptyFields && !country.title ? true : false} />

                </div>

              </div>

              <div className="col-lg-6">

                <div className={cls.field}>

                  <label>{t('agent.city')}</label>

                  <SelectBox placeholder={t('agent.city')} list={cities} value={city.title || ''} select={setCity} error={emptyFields && !city.title ? true : false} />

                </div>

              </div>

              <div className="col-lg-6">

                <div className={cls.field}>

                  <label>{t('agent.phone')}</label>

                  <input 
                    type="text" 
                    placeholder={t('agent.phone')}
                    name="phone" 
                    value={fields.phone} 
                    onChange={(e) => handleFields(e)} 
                    className={emptyFields && fields.phone === '' ? cls.error : ''} 
                  />

                  {emptyFields && !fields.phone &&

                    <p>{t('agent.required')}</p>

                  }

                </div>

              </div>

            </div>

          </div>

          <div className={cls.btn}>

            <button onClick={register}>{t('agent.registerAgent')}</button>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Agent;