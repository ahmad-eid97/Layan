import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import axios from '../../../Utils/axios';

import Cookies from 'universal-cookie';

import { useTranslation } from 'react-i18next';

import Loader from '../../UIs/Loader/Loader';

import cls from './applicationsSection.module.scss';

const cookie = new Cookies()

const ApplicationsSection = () => {
  // COMPONENT HOOKS
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(false)
  const { t, i18n } = useTranslation('common')
  const navigate = useNavigate()

  // COMPONENT HANDLERS
  const fetchApplications = async () => {
    setLoading(true)

    const response = await axios.get(`/crm/applications?lang=${i18n.language}&limit=30`, {
      headers: {
        Authorization: `Bearer ${cookie.get('layanAuth')}`,
        Accept: 'application/json'
      }
    })

    if(!response) return;

    setApplications(response.data.data.applications)

    setLoading(false)

    console.log(response)
  }

  useEffect(() => {
    fetchApplications()
  }, [])

  return (
    <div className={cls.applicationsSection}>

      {loading && <Loader />}

      <div className={cls.wrapper}>

        {applications.map((application, idx) => (

          <div key={idx} className={cls.app}>

            <p>

              <span>{t('profile.degree')}: </span>

              { application.degree.title }

            </p>

            <div className={cls.side}>

              {(application.selected_program === 'primary_program' || !application.selected_program) &&

                <p>

                  <span>{t('profile.fLang')}: </span>

                  { application.language_primary.title }

                </p>

              }

              {(application.selected_program === 'second_program' || !application.selected_program) &&

                <p>

                  <span>{t('profile.sLang')}: </span>

                  { application.language_second.title }

                </p>

              }

            </div>

            {(application.selected_program === 'primary_program' || !application.selected_program) &&
              
              <div>

                <span>{t('profile.mainProgram')}: </span>

                <h1>{ application.primary_program.specialties.title }</h1>

              </div>
            
            }
            

            {(application.selected_program === 'second_program' || !application.selected_program) && 
              
              <div>

                <span>{t('profile.secondProgram')}: </span>

                <h1>{ application.second_program.specialties.title }</h1>

              </div>
            
            }

            <div className={cls.side}>

              <p>

                <span>{t('profile.semester')}: </span>

                { application.semester.title }

              </p>
              <p>

                <span>{t('profile.university')}: </span>

                { application.university.title }

              </p>

            </div>

            <p>

              <span>{t('profile.status')}: </span>

              { application.status }

            </p>

            {application.status_notes && 
            
              <p className={cls.note}><i className="fa-regular fa-message-exclamation"></i> { application.status_notes }</p>
            
            }

          </div>

        ))}

      </div>

      <div className={cls.btn}>

        <button onClick={() => navigate('/education-info')}>{t('profile.createApp')}</button>

      </div>

    </div>
  )
}

export default ApplicationsSection