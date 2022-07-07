import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from './../../Utils/axios';

import PagesLoader from '../../components/UIs/PagesLoader/PagesLoader' 

import { useTranslation } from 'react-i18next';

import cls from './news.module.scss';

const News = () => {
  // COMPONENT HOOKS
  const [news, setNews] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const { t, i18n } = useTranslation('common');
  const navigate = useNavigate();

  // DCOMPONENT HANDLERS
  const fetchNews = async () => {
    setLoading(true)

    const response = await axios.get(`/topics/3/page/${currentPage}/count/30/${i18n.language}`);

    if(!response) return;

    setNews(response.data.topics);

    setCount(response.data.topics_count);

    setLoading(false)
  }

  useEffect(() => {
    fetchNews()
  }, [])

  const changePage = (pageNum) => {
    setCurrentPage(pageNum)
  }
  
  return (
    <div className={cls.news}>

      {loading && <PagesLoader />}

      <div className='container'>

        <div className={cls.newsHead}>
        
          <h3 className='label'>

            <img src="/assets/images/news.png" alt="titleImage" />
    
            <p>{t('news.latest')}</p>
            
          </h3>

          <div className={cls.search}>

            <input type="text" placeholder={t('news.searchNews')} className={cls[i18n.language]} />

            <button className={cls[i18n.language]}>{t('news.search')}</button>

          </div>

        </div>

        {news.length ?

          <div className={cls.wrapper}>

            {news.map((singleOne, idx) => (

              // <div key={idx} className='col-md-6 col-lg-4 col-xl-3'>

                <div key={idx} className={`${cls.singleNews} quarterContainer`} onClick={() => navigate(`/news/${singleOne.id}`)}>

                  <img src={singleOne.photo_file} alt="newsImage" />

                  <div className={cls.info}>

                    <h6>{singleOne.title}</h6>

                    <p>{t('news.addedBy')} {singleOne.user.name}</p>

                    <p dangerouslySetInnerHTML={{ __html: singleOne.details.substring(0, 350) + '...'}}></p>

                    <span><i className="fa-light fa-clock"></i> <span>{t('news.addedIn')} {singleOne.date}</span></span>

                  </div>

                  <div className={`quarter ${i18n.language} second`}></div>
                  <div className={`movingQuarter ${i18n.language} second`}></div>

                </div>

              // </div>

            ))}

          </div>

          :

          <div className='empty'>

            <img src="/assets/images/emptyUniversities.png" alt="empty" />

            <p>{t('news.noNews')}</p>

          </div>
        
        }

        {news.length && 

          <div className='pagination'>

            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className={`${currentPage === 1 ? 'disabled' : ''} page-item`}>
                  <a className="page-link" href="/" aria-label="Previous" onClick={() => changePage(currentPage -= 1)}>
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                {
                  Array(Math.ceil(count / 30)).fill(0).map((one, idx) => (

                    <li key={idx} className="page-item"><a className={`${currentPage === idx + 1 ? 'active' : ''} page-link`} href="#" onClick={() => changePage(idx + 1)}>{idx + 1}</a></li>

                  ))
                }
                <li className={`${Math.ceil(count / 30) === 1 ? 'disabled' : ''} page-item`}>
                  <a className="page-link" href="/" aria-label="Next" onClick={() => changePage(currentPage += 1)}>
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>

          </div>
        
        }

      </div>

    </div>
  )
}

export default News