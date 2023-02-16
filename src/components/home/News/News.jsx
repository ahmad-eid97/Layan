import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import axios from '../../../Utils/axios';

import cls from './news.module.scss';

const News = () => {
  // COMPONENT HOOKS
  const [news, setNews] = useState([]);
  const { t, i18n } = useTranslation('common');
  const navigate = useNavigate();

  // COMPONENT HANDLERS
  const fetchNews = async () => {
    const response = await axios.get(`/topics/3/page/1/count/4/${i18n.language}`);

    if(!response) return;

    setNews(response.data.topics)
  }

  useEffect(() => {
    fetchNews()
  }, [])

  return (
    <div className={cls.news}>
        
      <h3 className='label'>

        <img src="/assets/images/cap.png" alt="titleImage" />

        <p>{t('home.news')}</p>
        
      </h3>

      <div className='container'>

        <div className={cls.wrapper}>

          {news.reverse().slice(0, 8).map((one, idx) => (

            <div key={idx} className={`${cls.singleNews} quarterContainer`} onClick={() => navigate(`/news/${one.id}`)}>

              <img src={one.photo_file} alt="newsImage" />

              <div className={cls.info}>

                <h6>{one.title}</h6>

                <p><span>أضيف بواسطة {one.user.name}</span></p>

                <p dangerouslySetInnerHTML={{ __html: one.details.substring(0, 350) }}></p>

                <span><i className="fa-light fa-clock"></i> <span>أضيفت في {one.date}</span></span>

              </div>

              <div className={`quarter ${i18n.language} second`}></div>
              <div className={`movingQuarter ${i18n.language} second`}></div>

            </div>

          ))}

        </div>

      </div>

      <div className={cls.btn}>
        <Link to="/news">
          <button>{t("home.seeMore")}</button>
        </Link>
      </div>

    </div>
  )
}

export default News;