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
  const { i18n } = useTranslation()
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

              <span>لدرجة العلمية: </span>

              { application.degree.title }

            </p>

            <div className={cls.side}>

              <p>

                <span>اللغة الاولي: </span>

                { application.language_primary.title }

              </p>

              <p>

                <span>اللغة الثانية: </span>

                { application.language_second.title }

              </p>

            </div>

            <div>

              <span>البرنامج الرئيسي: </span>

              <p dangerouslySetInnerHTML={{ __html: application.primary_program.details }}></p>

            </div>
            
            <div>

              <span>البرنامج الثانوي: </span>

              <p dangerouslySetInnerHTML={{ __html: application.second_program.details }}></p>

            </div>

            <div className={cls.side}>

              <p>

                <span>الفصل الدراسي: </span>

                { application.semester.title }

              </p>
              <p>

                <span>الجامعة: </span>

                { application.university.title }

              </p>

            </div>

            <p>

              <span>حالة الطلب: </span>

              { application.status }

            </p>

          </div>

        ))}

      </div>

      <div className={cls.btn}>

        <button onClick={() => navigate('/education-info')}>إنشاء طلب</button>

      </div>

    </div>
  )
}

export default ApplicationsSection