import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import PagesLoader from './../../components/UIs/PagesLoader/PagesLoader';
import { ProgramDetailsInfo, ProgramDetailsUniversities } from './../../components';

import axios from '../../Utils/axios';

import { useTranslation } from 'react-i18next';

import cls from './programDetails.module.scss';

const ProgramDetails = () => {
  // COMPONENT HOOKS
  const [program, setProgram] = useState({});
  const [loading, setLoading] = useState(false)
  const { id } = useParams();
  const { i18n } = useTranslation();

  // COMPONENT HANDLERS
  const fetchProgram = async () => {
    setLoading(true)

    const response = await axios.get(`/crm/programs/${id}?lang=${i18n.language}`);

    if(!response) return;

    setProgram(response.data.data)

    console.log(response)

    setLoading(false)
  } 

  useEffect(() => {

    fetchProgram();

  }, [])

  return (
    <div className={cls.programDetails}>

      {loading && <PagesLoader />}

      <div className={cls.head}>

        <div className="container">

          <img src={setProgram.logo_file} alt="" />

        </div>

      </div>

      <ProgramDetailsInfo program={program} />

      <ProgramDetailsUniversities program={program} />

    </div>
  )
}

export default ProgramDetails;