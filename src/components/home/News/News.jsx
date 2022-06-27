import { useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';

import axios from '../../../Utils/axios';

import cls from './news.module.scss';

const News = () => {
  // COMPONENT HOOKS
  const [news, setNews] = useState([])
  const { t, i18n } = useTranslation('common');

  // COMPONENT HANDLERS
  const fetchNews = async () => {
    const response = await axios.get(`/topics/3/page/1/count/50/${i18n.language}`);

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

          {news.map((one, idx) => (

            // <div key={idx} className='col-md-6 col-lg-4 col-xl-3'>

              <div key={idx} className={`${cls.singleNews} quarterContainer`}>

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

            // </div>

          ))}

        </div>

      </div>

    </div>
  )
}

export default News;