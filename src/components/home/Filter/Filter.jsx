import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Selectbox from '../../UIs/SelectBox/Selectbox';
import Loader from '../../UIs/Loader/Loader';

import axios from '../../../Utils/axios';

import { useTranslation } from 'react-i18next';

import cls from './filter.module.scss';

const Filter = () => {
  // COMPONENT HOOKS
  const [countries, setCountries] = useState([]);
  const [universities, setUniversities] = useState([]);
  const [degrees, setDegrees] = useState([]);
  const [programs, setPrograms] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [speciality, setSpeciality] = useState('');
  const [degree, setDegree] = useState('');
  const [university, setUniversity] = useState('');
  const [country, setCountry] = useState('');
  const [language, setLanguage] = useState('');
  const [loading, setLoading] = useState(false);
  const { t, i18n } = useTranslation('common');
  const navigate = useNavigate();

  const fetchCountries = async () => {
    setLoading(true)

    const countriesRes = await axios.get(`/crm/countries?lang=${i18n.language}`);

    if(!countriesRes) return;

    countriesRes.data.data.countries.unshift({title: 'الكل', id: null})

    setCountries(countriesRes.data.data.countries)

    setLoading(false)
  }

  const fetchAllData = async () => {

    const response = await axios.get(`/crm/programs/filter/get_search_program?lang=${i18n.language}`).catch(err => console.log(err))

    if(!response) return;

    setUniversities(response.data.data.universities)

    setDegrees(response.data.data.degrees)

    setPrograms(response.data.data.specialties)

    setLanguages(response.data.data.languages)

    setLoading(false)

  }

  useEffect(() => {
    fetchCountries();
    fetchAllData()
  }, [])

  const chooseCountryHandler = async (countryChoosed) => {
    setLoading(true)

    setCountry(countryChoosed)

    const response = await axios.get(`/crm/programs/filter/get_search_program?lang=${i18n.language}&country_id=${countryChoosed.id}`).catch(err => console.log(err))

    if(!response) return;

    setUniversities(response.data.data.universities)

    setDegrees(response.data.data.degrees)

    setPrograms(response.data.data.specialties)

    setLanguages(response.data.data.languages)

    setUniversity('')
    setDegree('')
    setSpeciality('')
    setLanguage('')

    setLoading(false)

    console.log(response)
  }

  // useEffect(() => {
  //   fetchData()
  // }, [country])

  // const fetchUniversities = async () => {
  //   setLoading(true)

  //   const response = await axios.get(`/crm/universities?lang=${i18n.language}&country_id=${country.id}&limit=30`);

  //   if(!response) return;

  //   setUniversities(response.data.data.universities)

  //   setLoading(false)
  // }

  // const fetchDegrees = async () => {
  //   setLoading(true)

  //   const response = await axios.get(`/crm/degrees?lang=${i18n.language}&country_id=${country.id}&limit=30`);

  //   if(!response) return;

  //   setDegrees(response.data.data.degrees)

  //   setLoading(false)
  // }

  // useEffect(() => {
  //   fetchUniversities()
  //   fetchDegrees()
  // }, [country])

  const updateUniversity = async(university) => {
    setLoading(true)

    setUniversity(university)

    const response = await axios.get(`/crm/programs/filter/get_search_program?lang=${i18n.language}&university_id=${university.id}`).catch(err => console.log(err))

    if(!response) return;

    setDegrees(response.data.data.degrees)

    setPrograms(response.data.data.specialties)

    setLanguages(response.data.data.languages)

    setLoading(false)
  }

  // const fetchSpecialities = async () => {
  //   const response = await axios.get(`/crm/specialties?lang=${i18n.language}&limit=30`);

  //   if (!response) return;

  //   setPrograms(response.data.data.specialties);
  // }

  // useEffect(() => {
  //   fetchSpecialities()
  // }, [])

  // const getLanguages = async (speciality) => {
  //   setLoading(true)

  //   const response = await axios.get(`/crm/applications/languages/get_languages_by_program_ajax?lang=${i18n.language}&program_id=${speciality.id}`);

  //   console.log(response)

  //   if(!response) return;

  //   setLanguages(response.data.data || []);

  //   setLoading(false)
  // }

  const updateSpeciality = async(speciality) => {
    setLoading(true)

    setSpeciality(speciality)

    const response = await axios.get(`/crm/programs/filter/get_search_program?lang=${i18n.language}&specialty_id=${speciality.id}`).catch(err => console.log(err))

    if(!response) return;

    setUniversities(response.data.data.universities)

    setDegrees(response.data.data.degrees)

    setPrograms(response.data.data.specialties)

    setLanguages(response.data.data.languages)

    console.log(response)

    setLoading(false)
  }

  const updateDegree = async (degree) => {
    setLoading(true)

    setDegree(degree)

    const response = await axios.get(`/crm/programs/filter/get_search_program?lang=${i18n.language}&degree_id=${degree.id}`).catch(err => console.log(err))

    if(!response) return;

    setUniversities(response.data.data.universities)

    setDegrees(response.data.data.degrees)

    setPrograms(response.data.data.specialties)

    setLanguages(response.data.data.languages)

    console.log(response)

    setLoading(false)
  }

  const updateLanguage = async (lang) => {
    setLoading(true)

    setLanguage(lang)

    const response = await axios.get(`/crm/programs/filter/get_search_program?lang=${i18n.language}&language_id=${lang.id}`).catch(err => console.log(err))

    if(!response) return;

    setUniversities(response.data.data.universities)

    setDegrees(response.data.data.degrees)

    setPrograms(response.data.data.specialties)

    setLanguages(response.data.data.languages)

    console.log(response)

    setLoading(false)
  }

  const search = async () => {
    navigate(`/programs-filter?endPoint=/crm/programs/filter/search?lang=${i18n.language}--country_id=${country.id || ''}--specialty_id=${speciality.id || ''}--degree_id=${degree.id || ''}--university_id=${university.id || ''}--limit=10`, {state: {countryId: country.id, universityId: university.id}})
  }

  return (
    <div className={cls.filter}>

      <div className='container'>

        {loading && <Loader />}

        <Selectbox placeholder={t('home.country')} type="specialCountries" list={countries} select={chooseCountryHandler} value={country.title || ''} />

        <Selectbox placeholder={t('home.university')} type="unis" list={universities} select={updateUniversity} value={university[`title_${i18n.language}`] || ''} />

        <Selectbox placeholder={t('home.degree')} type="degs" list={degrees} select={updateDegree} value={degree[`title_${i18n.language}`] || ''} />

        <Selectbox placeholder={t('home.speciality')} type="specs" list={programs} select={updateSpeciality} value={speciality[`title_${i18n.language}`] || ''} />
        
        <Selectbox placeholder={t('home.lang')} list={languages} select={updateLanguage} value={language.title || ''} />

        <button onClick={search}>{t('home.search')}</button>

      </div>

    </div>
  )
}

export default Filter