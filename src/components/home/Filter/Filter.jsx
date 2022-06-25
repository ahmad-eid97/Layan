import { useState, useEffect } from 'react';

import Selectbox from '../../UIs/SelectBox/Selectbox';
import Loader from '../../UIs/Loader/Loader';

import axios from '../../../Utils/axios';

import { useTranslation } from 'react-i18next';

import cls from './filter.module.scss';

const gradeList = [
  {
    title: "الأولي",
    label: 'الأولي'
  },
  {
    title: "الأولي",
    label: 'الأولي'
  },
  {
    title: "الأولي",
    label: 'الأولي'
  },
  {
    title: "الأولي",
    label: 'الأولي'
  },
  {
    title: "الأولي",
    label: 'الأولي'
  }
]

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
  const { i18n } = useTranslation();

  const fetchCountries = async () => {
    setLoading(true)

    const countriesRes = await axios.get(`/crm/countries?lang=${i18n.language}&limit=30`);

    if(!countriesRes) return;

    setCountries(countriesRes.data.data.countries)

    setLoading(false)

    console.log(countriesRes)
  }

  useEffect(() => {
    fetchCountries()
  }, [])

  const fetchUniversities = async () => {
    setLoading(true)

    const response = await axios.get(`/crm/universities?lang=${i18n.language}&country_id=${country.id}&limit=30`);

    if(!response) return;

    setUniversities(response.data.data.universities)
    console.log(response.data.data.universities)

    setLoading(false)
  }

  useEffect(() => {
    fetchUniversities()
  }, [country])

  const updateUniversity = (university) => {
    setUniversity(university)
    setDegrees(university.degrees)
  }

  const fetchSpecialities = async () => {
    const response = await axios.get(`/crm/specialties?lang=${i18n.language}&limit=30`);

    if (!response) return;

    setPrograms(response.data.data.specialties);

    console.log(response)
  }

  useEffect(() => {
    fetchSpecialities()
  }, [])

  const getLanguages = async (speciality) => {
    setLoading(true)

    const response = await axios.get(`/crm/applications/languages/get_languages_by_program_ajax?lang=${i18n.language}&program_id=${speciality.id}`);

    if(!response) return;

    setLanguages(response.data.data);
    console.log(response);

    setLoading(false)
  }

  const updateSpeciality = async(speciality) => {
    setSpeciality(speciality)
    getLanguages(speciality)
  }

  const search = async () => {
    const response = await axios.get(`/crm/programs/filter/search?lang=${i18n.language}&specialty_id=${speciality.id}&degree_id=${degree.id}&limit=30&university_id=${university.id}&country_id=${country.id}`);

    if(!response) return;

    console.log(response)
  }

  return (
    <div className={cls.filter}>

      <div className='container'>

        {loading && <Loader />}

        <Selectbox placeholder="البلد" list={countries} select={setCountry} value={country.title || ''} />

        <Selectbox placeholder="الجامعة" list={universities} select={updateUniversity} value={university.title || ''} />

        <Selectbox placeholder="الدرجة العلمية" list={degrees} select={setDegree} value={degree.title || ''} />

        <Selectbox placeholder="التخصص" list={programs} select={updateSpeciality} value={speciality.title || ''} />
        
        <Selectbox placeholder="اللغة" list={languages} select={setLanguage} value={language.title || ''} />

        <button onClick={search}>بحث</button>

      </div>

    </div>
  )
}

export default Filter