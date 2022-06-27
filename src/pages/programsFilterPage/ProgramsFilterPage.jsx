import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from "react-router-dom";

import PagesLoader from '../../components/UIs/PagesLoader/PagesLoader';

import axios from '../../Utils/axios';

import cls from './programsFilterPage.module.scss';

const ProgramsFilterPage = () => {
  // COMPONENT HOOKS
  let [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [programs, setPrograms] = useState([])
  const endPoint = searchParams.get("endPoint");
  const navigate = useNavigate();

  // COMPONENT HOOKS  
  const fetchData = async () => {
    setLoading(true)

    const response = await axios.get(endPoint.replace(/--/g, "&"));

    if(!response) return;

    setPrograms(response.data.data.programs)

    setLoading(false)

    console.log(response)
  }

  useEffect(() => {
    fetchData(endPoint)
  }, [endPoint])

  return (
    <div className={cls.programsFilterPage}>

      {loading && <PagesLoader />}

      <div className='container'>
        
        <h3 className='label'>
  
          <img src="/assets/images/cap.png" alt="titleImage" />
  
          <p>سجل الاَن واحصل علي قبولك الجامعي</p>
          
        </h3>

        {programs.length ? 

          <>
            {programs.map((program, idx) => (

              <div key={idx} className={cls.program}>

                <div className={cls.image}>

                  <img src={program.logo_file} alt="programImage" />

                  <h6>{program.specialties.title}</h6>

                </div>

                <div className={cls.info}>

                  <div className={cls.tags}>

                    <span>{program.degrees.title}</span>
                    <span>{program.languages[0].title}</span>
                    <span>{program.specialties.title}</span>

                  </div>

                  <div className={cls.programDetails}>

                    <div className='row'>

                      <div className='col-4'>

                        <p>البرنامج</p>
                        <span>{program.specialties.title}</span>

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

                            <span>{university.cost - university.sale}</span>

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
            <p>لا توجد برامج في هذا التصنيف</p>
          </div>
        }

      </div>

    </div>
  )
}

export default ProgramsFilterPage;