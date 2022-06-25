import { useState } from 'react';

import Selectbox from '../../UIs/SelectBox/Selectbox';

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
  const [speciality, setSpeciality] = useState('');
  const [degree, setDegree] = useState('');
  const [university, setUniversity] = useState('');
  const [country, setCountry] = useState('');
  const [language, setLanguage] = useState('');
  const { i18n } = useTranslation();

  const search = async () => {
    const response = await axios.get(`/crm/programs/filter/search?lang=${i18n.language}&specialty_id=${speciality.id}&degree_id=${degree.id}&limit=30&university_id=${university.id}&country_id=${country.id}`);

    if(!response) return;

    console.log(response)
  }

  return (
    <div className={cls.filter}>

      <div className='container'>

        <Selectbox placeholder="التخصص" list={gradeList} select={setSpeciality} value={speciality} />

        <Selectbox placeholder="الدرجة العلمية" list={gradeList} select={setDegree} value={degree} />

        <Selectbox placeholder="الجامعة" list={gradeList} select={setUniversity} value={university} />

        <Selectbox placeholder="البلد" list={gradeList} select={setCountry} value={country} />
        
        <Selectbox placeholder="اللغة" list={gradeList} select={setLanguage} value={language} />

        <button onClick={search}>بحث</button>

      </div>

    </div>
  )
}

export default Filter