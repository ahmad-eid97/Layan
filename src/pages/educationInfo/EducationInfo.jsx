import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

import SelectBox from '../../components/UIs/SelectBox/Selectbox';
import Choose from './../../components/UIs/Choose/Choose';
import Loader from './../../components/UIs/Loader/Loader';
import UploadField from '../../components/UIs/UploadField/UploadField';

import { useTranslation } from 'react-i18next';

import Cookies from 'universal-cookie';

import axios from '../../Utils/axios';

import "react-datepicker/dist/react-datepicker.css";
import cls from './educationInfo.module.scss';
import { toast } from 'react-toastify';

const cookie = new Cookies();

const EducationInfo = () => {
  // COMPONENT HOOKS
  const [semesters, setSemesters] = useState([]);
  const [degrees, setDegrees] = useState([]);
  const [universities, setUniversities] = useState([]);
  const [programs, setPrograms] = useState([])
  const [primaryLanguages, setPrimaryLanguages] = useState([]);
  const [secondLanguages, setSecondLanguages] = useState([]);
  const [attachments, setAttachments] = useState([])
  const [semester, setSemester] = useState('');
  const [degree, setDegree] = useState('');
  const [university, setUniversity] = useState('');
  const [primaryProgram, setPrimaryProgram] = useState('');
  const [primaryLang, setPrimaryLang] = useState({});
  const [secondProgram, setSecondProgram] = useState('');
  const [secondLang, setSecondLang] = useState('');
  const [loading, setLoading] = useState(false);
  const [emptyFields, setEmptyFields] = useState(false);
  const { t, i18n } = useTranslation('common');
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleChoosedUniversity = async () => {
    setLoading(true);

    const response = await axios.get(`/crm/universities/${searchParams.get('university')}?lang=${i18n.language}`).catch(err => console.log(err))

    if(!response) return;

    console.log(response)

    setUniversity(response.data.data.university);

    setLoading(false);
  }

  useEffect(() => {
    if(searchParams.get('university')) {
      console.log('here')
      handleChoosedUniversity()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams.get('university')])

  // COMPONENT HANDLERS
  const fetchData = async () => {
    if(!searchParams.get('university')) setLoading(true);
  
    let setters = [
      {name: 'semesters', set: setSemesters},
      {name: 'degrees', set: setDegrees},
      {name: 'universities', set: setUniversities},
      {name: 'programs', set: setPrograms},
    ]

    const requests = [
      axios.get(`/crm/semesters?lang=${i18n.language}&limit=500`),
      axios.get(`/crm/degrees?lang=${i18n.language}&limit=500`),
      axios.get(`/crm/universities?lang=${i18n.language}&limit=500`),
      axios.get(`/crm/programs?lang=${i18n.language}&limit=500`)
    ]

    let responses = await Promise.all(requests);

    responses.forEach((res, i) => {
      if(!res) return;
      console.log(res)
      setters[i].set(res.data.data[setters[i].name]);
    })

    if(!searchParams.get('university')) setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [])

  const handleChooseUniversity = async (univer) => {
    setLoading(true)

    setUniversity(univer)

    const response = await axios.get(`/crm/degrees?lang=${i18n.language}&university=${univer.id}&limit=500`);

    if (!response) return;

    setDegrees(response.data.data.degrees);

    setLoading(false)

  }

  const getFilesByDegree = async () => {

    if(degree) {
      setLoading(true)
      const response = await axios.get(`/crm/applications/attachments/get_files_by_degree/${degree.id}?lang=${i18n.language}`)

      if(!response) return;

      setAttachments(response.data.data)
      
      setLoading(false)
    }

  }

  useEffect(() => {

    getFilesByDegree()

  }, [degree])

  const getPrimaryLangByProgram = async () => {
    
    if(primaryProgram) {
      setLoading(true)

      const response = await axios.get(`/crm/applications/languages/get_languages_by_program_ajax?lang=${i18n.language}&program_id=${primaryProgram.id}`)

      if(!response) return;

      setPrimaryLanguages(response.data.data)

      setLoading(false)
    }

  }

  useEffect(() => {

    getPrimaryLangByProgram()

  }, [primaryProgram])

  const getSecondaryLangByProgram = async () => {
    
    if(secondProgram) {
      setLoading(true)

      const response = await axios.get(`/crm/applications/languages/get_languages_by_program_ajax?lang=${i18n.language}&program_id=${secondProgram.id}`)

      if(!response) return;

      setSecondLanguages(response.data.data)

      setLoading(false)
    }

  }

  useEffect(() => {

    getSecondaryLangByProgram()

  }, [secondProgram]);

  const updateAttachment = (attach) => {
    const updatedAttach = attachments.findIndex(att => att.key === attach.key)

    attachments.splice(updatedAttach, 1, attach)
    
    setAttachments([...attachments])
  }

  const saveApplication = async () => {
    const data = {
      degree_id: degree.id,
      semester_id: semester.id,
      university_id: university.id,
      primary_program_id: primaryProgram.id,
      second_program_id: secondProgram.id,
      language_id_1: primaryLang.id,
      language_id_2: secondLang.id
    }

    let appData = new FormData()

    Object.keys(data).forEach(key => {
      appData.append(key, data[key])
    })

    attachments.forEach(att => {

      if(!att.file_url) {
        setEmptyFields(true)
      }

      appData.append(att.key, att.file_url)

    })

    Object.values(data).forEach(one => {
      if(!one) {
        setEmptyFields(true)
      }
    })

    if(Object.values(data).findIndex(one => one === undefined || one === '') <= -1) {

      setLoading(true)

      const response = await axios.post(`/crm/applications?lang=${i18n.language}`, appData, {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${cookie.get('layanAuth')}`
        }
      })
  
      if(!response) return;

      setLoading(false)

      navigate('/profile')

      successNotify(t('agent.application'))

    }
  }

  const successNotify = (message) => toast.success(message);
  const errorNotify = (message) => toast.error(message);

  return (
    <div className={cls.educationInfo}>

      {loading && <Loader />}
        
      <div className="container">

        <h1 className='label'>

          <img src="/assets/images/cap.png" alt="titleImage" />

          <p>{t('info.register')}</p>

        </h1>

        <div className={cls.form}>

          <div className={cls.block}>

            <h4><i className="fa-light fa-file-chart-column"></i> {t('info.programInfo')}</h4>

            <div className="row">

              <div className="col-lg-6">

                <div className={cls.field}>

                  <label>{t('info.semester')}</label>
        
                  <Choose placeholder={t('info.semester')} keyword='title' results={semesters} choose={setSemester} value={semester.title || ''} error={emptyFields && !semester.title ? true : false} />

                </div>

              </div>

              <div className="col-lg-6">

                <div className={cls.field}>

                  <label>{t('info.university')}</label>
        
                  <Choose placeholder={t('info.university')} keyword='title' results={universities} choose={handleChooseUniversity} value={university.title || ''} error={emptyFields && !university.title ? true : false} />

                </div>

              </div>

              <div className="col-lg-12">

                <div className={cls.field}>

                  <label>{t('info.degree')}</label>
        
                  <Choose placeholder={t('info.degree')} keyword='title' results={degrees} choose={setDegree} value={degree.title || ''} error={emptyFields && !degree.title ? true : false} />

                </div>

              </div>

              <div className="col-lg-6">

                <div className={cls.field}>

                  <label>{t('info.mainProgram')}</label>
        
                  <Choose placeholder={t('info.mainProgram')} keyword='specialties.title' results={programs} choose={setPrimaryProgram} value={primaryProgram.specialties && primaryProgram.specialties.title || ''}  error={emptyFields && !primaryProgram?.specialties?.title ? true : false} />

                </div>

              </div>

              <div className="col-lg-6">

                <div className={cls.field}>

                  <label>{t('info.mainLang')}</label>
        
                  <Choose placeholder={t('info.mainLang')} keyword='title' results={primaryLanguages} choose={setPrimaryLang} value={primaryLang.title || ''} error={emptyFields && !primaryLang.title ? true : false} />

                </div>

              </div>

              <div className="col-lg-6">

                <div className={cls.field}>

                  <label>{t('info.secondProgram')}</label>
        
                  <Choose placeholder={t('info.secondProgram')} keyword='specialties.title' results={programs} choose={setSecondProgram} value={secondProgram.specialties && secondProgram.specialties.title || ''}  error={emptyFields && !secondProgram?.specialties?.title ? true : false} />

                </div>

              </div>

              <div className="col-lg-6">

                <div className={cls.field}>

                  <label>{t('info.secondLang')}</label>
        
                  <Choose placeholder={t('info.secondLang')} keyword='title' results={secondLanguages} choose={setSecondLang} value={secondLang.title || ''} error={emptyFields && !secondLang.title ? true : false} />

                </div>

              </div>

              {attachments && attachments.map((attach, idx) => (

                <div key={idx} className="col-lg-6">

                  {console.log(attach)}

                  <UploadField attach={attach} updateAttachment={updateAttachment} empty={emptyFields && !attach.file_url} />

                </div>

              ))}

            </div>

          </div>

          <div className={cls.btn}>

            <button onClick={saveApplication}>{t('info.save')}</button>

          </div>

        </div>

      </div>

    </div>
  )
}

export default EducationInfo;