import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import SelectBox from '../../components/UIs/SelectBox/Selectbox';
import Loader from './../../components/UIs/Loader/Loader';
import UploadField from '../../components/UIs/UploadField/UploadField';

import { useTranslation } from 'react-i18next';

import Cookies from 'universal-cookie';

import axios from '../../Utils/axios';

import "react-datepicker/dist/react-datepicker.css";
import cls from './educationInfo.module.scss';

const students = [
  {
    title: 'أحمد',
    label: 'أحمد'
  },
  {
    title: 'علي',
    label: 'علي'
  },
  {
    title: 'ندي',
    label: 'ندي'
  },
  {
    title: 'سعد',
    label: 'سعد'
  },
  {
    title: 'محمد',
    label: 'محمد'
  }
]

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
  const [student, setStudent] = useState('');
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
  const [searchParams, setSearchParams] = useSearchParams()

  console.log(searchParams.get('university'))

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
      axios.get(`/crm/semesters?lang=${i18n.language}&limit=30`),
      axios.get(`/crm/degrees?lang=${i18n.language}&limit=30`),
      axios.get(`/crm/universities?lang=${i18n.language}&limit=30`),
      axios.get(`/crm/programs?lang=${i18n.language}&limit=30`)
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

    const response = await axios.get(`/crm/degrees?lang=${i18n.language}&university=${univer.id}&limit=30`);

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
    }

    attachments.forEach(att => {

      data[att.key] = att.file_url

    })

    Object.values(data).forEach(one => {

      if(!one) {
        setEmptyFields(true)
      }

    })

    if(Object.values(data).findIndex(one => one === undefined || one === '') <= -1) {

      const response = await axios.post(`/crm/applications?lang=${i18n.language}`, {
        headers: {
          Authorization: `Bearer ${cookie.get('layanAuth')}`
        }
      })
  
      if(!response) return;

    }
  }

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

              {/* <div className="col-lg-6">

                <div className={cls.field}>

                  <label>{t('info.student')}</label>

                  <SelectBox placeholder={t('info.student')} list={students} value={student.title || ''} select={setStudent} error={emptyFields && !student.title ? true : false} />

                  {emptyFields && !student.title &&

                    <p>{t('info.required')}</p>

                  }

                </div>

              </div> */}

              <div className="col-lg-6">

                <div className={cls.field}>

                  <label>{t('info.semester')}</label>

                  <SelectBox placeholder={t('info.semester')} list={semesters} value={semester.title || ''} select={setSemester} />

                </div>

              </div>

              <div className="col-lg-6">

                <div className={cls.field}>

                  <label>{t('info.university')}</label>

                  <SelectBox placeholder={t('info.university')} list={universities} value={university.title || ''} select={handleChooseUniversity} />

                </div>

              </div>

              <div className="col-lg-12">

                <div className={cls.field}>

                  <label>{t('info.degree')}</label>

                  <SelectBox placeholder={t('info.degree')} list={degrees} value={degree.title || ''} select={setDegree} />

                </div>

              </div>

              <div className="col-lg-6">

                <div className={cls.field}>

                  <label>{t('info.mainProgram')}</label>

                  <SelectBox placeholder={t('info.mainProgram')} list={programs} value={primaryProgram.specialties && primaryProgram.specialties.title || ''} select={setPrimaryProgram} />

                </div>

              </div>

              <div className="col-lg-6">

                <div className={cls.field}>

                  <label>{t('info.mainLang')}</label>

                  <SelectBox placeholder={t('info.mainLang')} list={primaryLanguages} value={primaryLang.title || ''} select={setPrimaryLang} />

                </div>

              </div>

              <div className="col-lg-6">

                <div className={cls.field}>

                  <label>{t('info.secondProgram')}</label>

                  <SelectBox placeholder={t('info.secondProgram')} list={programs} value={secondProgram.specialties && secondProgram.specialties.title || ''} select={setSecondProgram} />

                </div>

              </div>

              <div className="col-lg-6">

                <div className={cls.field}>

                  <label>{t('info.secondLang')}</label>

                  <SelectBox placeholder={t('info.secondLang')} list={secondLanguages} value={secondLang.title || ''} select={setSecondLang} />

                </div>

              </div>

              {attachments && attachments.map((attach, idx) => (

                <div key={idx} className="col-lg-6">

                  <UploadField attach={attach} updateAttachment={updateAttachment} />

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