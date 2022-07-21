/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import PagesLoader from '../../components/UIs/PagesLoader/PagesLoader';

import axios from '../../Utils/axios';

import { useTranslation } from 'react-i18next';

import cls from './programs.module.scss';

const Programs = () => {
  // COMPONENT HOOKS
  const [programs, setPrograms] = useState([]);
  const [links, setLinks] = useState([]);
  const [paginationPages, setPaginationPages] = useState([])
  const [meta, setMeta] = useState([]);
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(0);
  const { t, i18n } = useTranslation('common');
  const navigate = useNavigate();

  // COMPONENT HANDLERS
  const fetchPrograms = async () => {
    setLoading(true)
    const response = await axios.get(`/crm/programs?lang=${i18n.language}&limit=10`).catch(err => console.log(err))

    if(!response) return;

    console.log(response)

    setPrograms(response.data.data.programs);

    setLinks(response.data.data.links)

    setMeta(response.data.data.meta)

    let META = response.data.data.meta;

    if (META.current_page === META.last_page && META.total >= 31) {
      setPaginationPages([META.current_page - 2, META.current_page - 1, META.current_page]);
    } else if(META.total <= 10) {
      setPaginationPages([META.current_page])
    } else if(META.total <= 20 && META.total > 10) {
      setPaginationPages([META.current_page, META.current_page + 1]);
    } else {
      setPaginationPages([META.current_page, META.current_page + 1, META.current_page + 2]);
    }

    setLoading(false)
  }

  useEffect(() => {
    fetchPrograms();
  }, [])

  const changePage = async (e, link, page) => {
    e.preventDefault();

    setLoading(true)

    const response = await axios.get(link);

    if(!response) return;

    console.log(response)

    setPrograms(response.data.data.programs);

    setLinks(response.data.data.links)

    setCurrentPage(page)

    let META = response.data.data.meta;

    if (META.current_page === META.last_page && META.total >= 31) {
      setPaginationPages([META.current_page - 2, META.current_page - 1, META.current_page]);
    } else if(META.total <= 10) {
      setPaginationPages([META.current_page])
    } else if(META.total <= 20 && META.total > 10) {
      setPaginationPages([META.current_page, META.current_page + 1]);
    } else {
      setPaginationPages([META.current_page, META.current_page + 1, META.current_page + 2]);
    }

    setMeta(response.data.data.meta)

    setLoading(false)

  }
    
  return (
    <div className={cls.programs}>

      {loading && <PagesLoader />}

      <div className='container'>
        
        <h3 className='label'>
  
          <img src="/assets/images/report.png" alt="titleImage" />
  
          <p>{t('programs.programs')}</p>
          
        </h3>

        {programs.length ? 

          <>
            {programs && programs.map((program, idx) => (

              <div key={idx} className={cls.program}>

                <div className={cls.image}>

                  {program.logo_file ?
                    <img src={program.logo_file} alt="programImage" />
                    :
                    <img src='/assets/images/logo.png' alt="programImage" />  
                  }

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

                        <p>{t('programs.program')}</p>
                        <span>{program && program.specialties && program.specialties.title}</span>

                      </div>

                      <div className='col-4'>

                        <p>{t('programs.study')}</p>
                        <span>{program.study_years}</span>

                      </div>

                      <div className='col-4'>

                        <p>{t('programs.price')}</p>
                        <span>{program.price_start_at}</span>

                      </div>

                    </div>

                  </div>

                  <div className={cls.university}>

                    <div className={cls.wrapper}>

                      <div className='row'>

                        <div className="col-1">

                          <p>{t('programs.status')}</p>

                        </div>

                        <div className="col-3">

                          <p>{t('programs.university')}</p>

                        </div>

                        <div className="col-3">

                          <p>{t('programs.priceBefore')}</p>

                        </div>

                        <div className="col-2">

                          <p>{t('programs.discount')}</p>

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

                          <div className="col-4">

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
            <img src="/assets/images/emptyUniversities.png" alt="empty" />
            <p>{t('programs.noPrograms')}</p>
          </div>
        }

      </div>

      {/* {programs.length && 
        
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

      } */}

      {programs.length && 
        
        <div className='pagination'>

          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className={`${!links.prev ? 'disabled' : '' } page-item`} onClick={(e) => changePage(e, links.prev, currentPage - 1)}>
                <a className='page-link' aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              {
                paginationPages.map((pageNumber, idx) => ( // fill for looping to fill array => Array(2)
                  <li className='page-item' key={idx}>
                    <a 
                      className={`${pageNumber === currentPage ? 'active' : ''} page-link`} 
                      onClick={(e) => changePage(e, `${meta.path}?page=${pageNumber}`, pageNumber)}
                      href="#"
                    >
                      { pageNumber }
                    </a>
                  </li>
                ))
              }
              {Array(Math.ceil(meta.total)).length > +meta.per_page * 3 &&
              
                <>
                
                  <span>........</span>

                  <li className='page-item'>
                    <a className={`${meta.current_page === meta.last_page ? 'active' : ''} page-link`} href="#" onClick={(e) => changePage(e, `${meta.path}?page=${meta.last_page}`)}>{meta.last_page}</a>
                  </li>

                </>
              
              }
              
              <li className={`${!links.next ? 'disabled' : '' } page-item`} onClick={(e) => changePage(e, links.next, currentPage + 1)}>
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

export default Programs