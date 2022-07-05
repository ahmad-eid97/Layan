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
  const [links, setLinks] = useState([]);
  const [meta, setMeta] = useState([]);
  const navigate = useNavigate();

  console.log()

  // COMPONENT HOOKS  
  const fetchData = async () => {
    setLoading(true)

    console.log(endPoint)

    const response = await axios.get(endPoint.replace(/--/g, "&"));
    console.log(response)

    if(!response) return;

    setPrograms(response.data.data.programs)

    setLinks(response.data.data.links)

    setMeta(response.data.data.meta)

    setLoading(false)
  }

  useEffect(() => {
    fetchData(endPoint)
  }, [endPoint])

  const changePage = async (e, link) => {
    e.preventDefault();

    setLoading(true)

    const response = await axios.get(link);

    if(!response) return;

    setPrograms(response.data.data.programs);

    setLinks(response.data.data.links)

    setMeta(response.data.data.meta)

    setLoading(false)

  }

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

                  <h6>{program?.specialties?.title}</h6>

                </div>

                <div className={cls.info}>

                  <div className={cls.tags}>

                    <span>{program?.degrees?.title}</span>
                    <span>{program?.languages[0]?.title}</span>
                    <span>{program?.specialties?.title}</span>

                  </div>

                  <div className={cls.programDetails}>

                    <div className='row'>

                      <div className='col-4'>

                        <p>البرنامج</p>
                        <span>{program?.specialties?.title}</span>

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

      {programs.length && 
        
        <div className='pagination'>

          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className={`${!links.prev ? 'disabled' : '' } page-item`} onClick={(e) => changePage(e, links.prev)}>
                <a className='page-link' aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              {
                Array(Math.ceil(meta.total / 200)).fill().map((one, idx) => ( // fill for looping to fill array => Array(2)
                  <li className='page-item' key={idx}>
                    <a className={`${meta.current_page === idx + 1 ? 'active' : ''} page-link`} href="#" onClick={(e) => changePage(e, `https://layanedu.com/dash/api/v1/crm/programs?page=${idx + 1}`)}>{ idx + 1 }</a>
                  </li>
                ))
              }
              <li className={`${!links.next ? 'disabled' : '' } page-item`} onClick={(e) => changePage(e, links.next)}>
                <a className="page-link" href="/" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>

        </div>

      }

    </div>
  )
}

export default ProgramsFilterPage;