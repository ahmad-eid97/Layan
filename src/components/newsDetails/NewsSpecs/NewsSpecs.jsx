import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import axios from '../../../Utils/axios';

import cls from './newsSpecs.module.scss';

const NewsSpecs = () => {
  // COMPONENT HOOKS
  const [news, setNews] = useState([])
  const { t, i18n } = useTranslation('common');
  const navigate = useNavigate();

  const fecthNews = async () => {
    const response = await axios.get(`/topics/3/page/1/count/4/${i18n.language}`).catch(err => console.log(err))

    if(!response) return;

    setNews(response.data.topics);

    console.log(response)
  }

  useEffect(() => {

    fecthNews()

  }, [])

  return (
    <div className={cls.newsSpecs}>

      <div className={`${cls.search} ${cls[i18n.language]}`}>

        <input type="text" placeholder={t('newsDetails.search')} />

        <i className="fa-light fa-magnifying-glass"></i>
        
      </div>

      <div className={cls.latest}>

        <h5>{t('newsDetails.latest')}</h5>

        {news.map((singleOne) => (

          <div key={singleOne.id} className={cls.one}>

            <img src={singleOne.photo_file} alt="latestImage" />

            <div className={cls.info}>

              <p onClick={() => navigate(`/news/${singleOne.id}`)}>{singleOne.title}</p>
              <span>{singleOne.date}</span>

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}

export default NewsSpecs