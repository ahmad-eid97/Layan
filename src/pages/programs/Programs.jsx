import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import PagesLoader from '../../components/UIs/PagesLoader/PagesLoader';

import axios from '../../Utils/axios';

import { useTranslation } from 'react-i18next';

import cls from './programs.module.scss';

const Programs = () => {
  // COMPONENT HOOKS
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(false)
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  // COMPONENT HANDLERS
  const fetchPrograms = async () => {
    setLoading(true)

    const response = await axios.get(`/crm/programs?lang=${i18n.language}&limit=30`);

    if(!response) return;

    setPrograms(response.data.data.programs);

    setLoading(false)
  }

  useEffect(() => {
    fetchPrograms();
  })
    
  return (
    <div className={cls.programs}>

      {loading && <PagesLoader />}

      <div className='container'>
        
        <h3 className='label'>
  
          <img src="/assets/images/report.png" alt="titleImage" />
  
          <p>برامج الجامعات</p>
          
        </h3>

        {programs.length ? 

          <>
            {programs && programs.map((program, idx) => (

              <div key={idx} className={cls.program}>

                <div className={cls.image}>

                  <img src={program.logo_file} alt="programImage" />

                  <h6>{program && program.specialties && program.specialties.title}</h6>

                </div>

                <div className={cls.info}>

                  <div className={cls.tags}>

                    <span>{program && program.degrees && program.degrees.title}</span>
                    <span>{program && program.languages[0] && program.languages[0].title}</span>
                    <span>{program && program.specialties && program.specialties.title}</span>

                  </div>

                  <div className={cls.programDetails}>

                    <div className='row'>

                      <div className='col-4'>

                        <p>البرنامج</p>
                        <span>{program && program.specialties && program.specialties.title}</span>

                      </div>

                      <div className='col-4'>

                        <p>الدراسة</p>
                        <span>{program.study_years}</span>

                      </div>

                      <div className='col-4'>

                        <p>السعر</p>
                        <span>{program.price_start_at}</span>

                      </div>

                    </div>

                  </div>

                  <div className={cls.university}>

                    <div className={cls.wrapper}>

                      <div className='row'>

                        <div className="col-1">

                          <p>الحالة</p>

                        </div>

                        <div className="col-3">

                          <p>الجامعة</p>

                        </div>

                        <div className="col-3">

                          <p>السعر قبل الخصم</p>

                        </div>

                        <div className="col-3">

                          <p>السعر بعد الخصم</p>

                        </div>

                        <div className="col-2">

                          <p>الخصم</p>

                        </div>

                      </div>

                      {program.universities.map((university, idx) => (

                        <div key={idx} className='row'>

                          <div className="col-1">

                            <span>{university.status === true ? 'نشط' : 'غير نشظ'}</span>

                          </div>

                          <div className="col-3">

                            <span>{university.title}</span>

                          </div>

                          <div className="col-3">

                            <span>{university.cost}</span>

                          </div>

                          <div className="col-3">

                            <span>{(university.cost - university.sale).toString()}</span>

                          </div>

                          <div className="col-2">

                            <span>{university.sale}</span>

                          </div>

                        </div>

                      ))}

                    </div>

                  </div>

                  <div className={cls.btn}>

                    <button onClick={() => navigate(`/program/${program.id}`)}>عرض التفاصيل</button>

                  </div>

                </div>

              </div>

            ))}
          </>

          :

          <div className='empty'>
            <img src="/assets/images/emptyUniversities.png" alt="" />
            <p>لا توجد برامج</p>
          </div>
        }

      </div>

    </div>
  )
}

export default Programs