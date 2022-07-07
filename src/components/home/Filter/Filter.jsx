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

    const countriesRes = await axios.get(`/crm/countries?lang=${i18n.language}&limit=30`);

    if(!countriesRes) return;

    setCountries(countriesRes.data.data.countries)

    setLoading(false)
  }

  useEffect(() => {
    fetchCountries()
  }, [])

  const fetchUniversities = async () => {
    setLoading(true)

    const response = await axios.get(`/crm/universities?lang=${i18n.language}&country_id=${country.id}&limit=30`);

    if(!response) return;

    setUniversities(response.data.data.universities)

    setLoading(false)
  }

  const fetchDegrees = async () => {
    setLoading(true)

    const response = await axios.get(`/crm/degrees?lang=${i18n.language}&country_id=${country.id}&limit=30`);

    if(!response) return;

    setDegrees(response.data.data.degrees)

    setLoading(false)
  }

  useEffect(() => {
    fetchUniversities()
    fetchDegrees()
  }, [country])

  const updateUniversity = (university) => {
    setUniversity(university)
    console.log(university)
  }

  const fetchSpecialities = async () => {
    const response = await axios.get(`/crm/specialties?lang=${i18n.language}&limit=30`);

    if (!response) return;

    setPrograms(response.data.data.specialties);
  }

  useEffect(() => {
    fetchSpecialities()
  }, [])

  const getLanguages = async (speciality) => {
    setLoading(true)

    const response = await axios.get(`/crm/applications/languages/get_languages_by_program_ajax?lang=${i18n.language}&program_id=${speciality.id}`);

    console.log(response)

    if(!response) return;

    setLanguages(response.data.data || []);

    setLoading(false)
  }

  const updateSpeciality = async(speciality) => {
    setSpeciality(speciality)
    getLanguages(speciality)
    console.log(speciality)
  }

  const search = async () => {

    navigate(`/programs-filter?endPoint=/crm/programs/filter/search?lang=${i18n.language}--specialty_id=${speciality.id || ''}--degree_id=${degree.id || ''}--limit=10&university_id=${university.id || ''}--country_id=${country.id || ''}`)
  }

  return (
    <div className={cls.filter}>

      <div className='container'>

        {loading && <Loader />}

        <Selectbox placeholder={t('home.country')} list={countries} select={setCountry} value={country.title || ''} />

        <Selectbox placeholder={t('home.university')} list={universities} select={updateUniversity} value={university.title || ''} />

        <Selectbox placeholder={t('home.degree')} list={degrees} select={setDegree} value={degree.title || ''} />

        <Selectbox placeholder={t('home.speciality')} list={programs} select={updateSpeciality} value={speciality.title || ''} />
        
        <Selectbox placeholder={t('home.lang')} list={languages} select={setLanguage} value={language.title || ''} />

        <button onClick={search}>{t('home.search')}</button>

      </div>

    </div>
  )
}

export default Filter