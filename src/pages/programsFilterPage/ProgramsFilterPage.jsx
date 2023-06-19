/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams, useLocation } from "react-router-dom";

import PagesLoader from '../../components/UIs/PagesLoader/PagesLoader';

import { useTranslation } from 'react-i18next';

import axios from '../../Utils/axios';

import cls from './programsFilterPage.module.scss';

const ProgramsFilterPage = () => {
  // COMPONENT HOOKS
  let [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [paginationPages, setPaginationPages] = useState([])
  const [loading, setLoading] = useState(false);
  const [programs, setPrograms] = useState([])
  const endPoint = searchParams.get("endPoint");
  const [links, setLinks] = useState([]);
  const [meta, setMeta] = useState([]);
  const navigate = useNavigate();
  const state = useLocation()
  const { t } = useTranslation('common')

  // COMPONENT HOOKS  
  const fetchData = async () => {
    setLoading(true)
    const response = await axios.get(endPoint.replace(/--/g, "&"));
    if (!response) return;
    setPrograms(response.data.data.programs)
    setLinks(response.data.data.links)
    setMeta(response.data.data.meta)
    let META = response.data.data.meta;
    if (META.current_page === META.last_page && META.total >= 31) {
      setPaginationPages([META.current_page - 2, META.current_page - 1, META.current_page]);
    } else if (META.total <= 10) {
      setPaginationPages([META.current_page])
    } else if (META.total <= 20 && META.total > 10) {
      setPaginationPages([META.current_page, META.current_page + 1]);
    } else {
      setPaginationPages([META.current_page, META.current_page + 1, META.current_page + 2]);
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchData(endPoint)
  }, [endPoint])

  const changePage = async (e, link, page) => {
    e.preventDefault();
    setLoading(true)
    setCurrentPage(page)
    const response = await axios.get(`${link}&${endPoint.replace(/--/g, "&").split('?')[1]}`);
    if (!response) return;
    setPrograms(response.data.data.programs);
    setLinks(response.data.data.links)
    setMeta(response.data.data.meta)
    let META = response.data.data.meta;
    if (META.current_page === META.last_page) {
      setPaginationPages([META.current_page - 3, META.current_page - 2, META.current_page - 1]);
    } else if (META.current_page === META.last_page - 1) {
      setPaginationPages([META.current_page - 1, META.current_page, META.current_page + 1]);
    } else {
      setPaginationPages([META.current_page, META.current_page + 1, META.current_page + 2]);
    }
    setLoading(false)

  }

  return (
    <div className={cls.programsFilterPage}>
      {loading && <PagesLoader />}
      <div className='container'>
        <h3 className='label'>
          <img src="/assets/images/cap.png" alt="titleImage" loading="lazy" />
          <p>{t('programData.register')}</p>
        </h3>
        {programs.length ?
          <>
            {programs.map((program, idx) => (
              <div key={idx} className={cls.program}>
                <div className={cls.image}>
                  {program.logo_file ?
                    <img src={program.logo_file} alt="programImage" loading="lazy" />
                    :
                    <img src='/assets/images/logo.png' alt="programImage" loading="lazy" />
                  }
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
                        <p>{t('programData.program')}</p>
                        <span>{program?.specialties?.title}</span>
                      </div>
                      <div className='col-4'>
                        <p>{t('programData.study')}</p>
                        <span>{program.study_years}</span>
                      </div>
                      <div className='col-4'>
                        <p>{t('programData.price')}</p>
                        <span>{program.price_start_at}</span>
                      </div>
                    </div>
                  </div>
                  <div className={cls.university}>
                    <div className={cls.wrapper}>
                      <div className='row'>
                        <div className="col-1">
                          <p>{t('programData.status')}</p>
                        </div>
                        <div className="col-3">
                          <p>{t('programData.university')}</p>
                        </div>
                        <div className="col-3">
                          <p>{t('programData.cost')}</p>
                        </div>
                        <div className="col-4">
                          <p>{t('programData.discount')}</p>
                        </div>
                      </div>
                      {program.universities.map((university, idx) => (
                        <div key={idx} className={`${cls.oneUni} row`}>
                          {state.state.countryId && !state.state.universityId &&
                            <>
                              {university.country.id === state.state.countryId &&
                                <>
                                  <div className="col-1">
                                    <span>{university.status === true ? `${t('programData.active')}` : `${t('programData.notActive')}`}</span>
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
                                </>
                              }
                            </>
                          }
                          {!state.state.countryId && state.state.universityId &&
                            <>
                              {university.id === state.state.universityId &&
                                <>
                                  <div className="col-1">
                                    <span>{university.status === true ? `${t('programData.active')}` : `${t('programData.notActive')}`}</span>
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
                                </>
                              }
                            </>
                          }
                          {state.state.countryId && state.state.universityId &&
                            <>
                              {university.id === state.state.universityId && university.country.id === state.state.countryId &&
                                <>
                                  <div className="col-1">
                                    <span>{university.status === true ? `${t('programData.active')}` : `${t('programData.notActive')}`}</span>
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
                                </>
                              }
                            </>
                          }
                          {!state.state.countryId && !state.state.universityId &&
                            <>
                              <div className="col-1">
                                <span>{university.status === true ? `${t('programData.active')}` : `${t('programData.notActive')}`}</span>
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
                            </>
                          }
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={cls.btn}>
                    <button onClick={() => navigate(`/program/${program.id}`)}>{t('programData.details')}</button>
                  </div>
                </div>
              </div>
            ))}
          </>
          :
          <div className='empty'>
            <img src="/assets/images/emptyUniversities.png" alt="empty" loading="lazy" />
            <p>{t('programData.empty')}</p>
          </div>
        }
      </div>
      {programs.length &&
        <div className='pagination'>
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className={`${!links.prev ? 'disabled' : ''} page-item`} onClick={(e) => changePage(e, links.prev, currentPage - 1)}>
                <a className='page-link' aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              {
                paginationPages.map((pageNumber, idx) => (
                  <li className='page-item' key={idx}>
                    <a
                      className={`${pageNumber === currentPage ? 'active' : ''} page-link`}
                      onClick={(e) => changePage(e, `${meta.path}?page=${pageNumber}`, pageNumber)}
                      href="#"
                    >
                      {pageNumber}
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
              <li className={`${!links.next ? 'disabled' : ''} page-item`} onClick={(e) => changePage(e, links.next, currentPage + 1)}>
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