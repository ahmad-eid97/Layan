import { useState, useEffect } from 'react';

import { useTranslation } from 'react-i18next';

import axios from '../../../Utils/axios';

import cls from './blogs.module.scss';

const Blogs = () => {
  // COMPONENT HOOKS
  const [blogs, setBlogs] = useState([])
  const { t, i18n } = useTranslation('common');

  // COMPONENT HANDLERS
  const fetchNews = async () => {
    const response = await axios.get(`/topics/7/page/1/count/50/${i18n.language}`);

    if(!response) return;

    setBlogs(response.data.topics)

    console.log(response)
  }

  useEffect(() => {
    fetchNews()
  }, [])

  return (
    <div className={cls.blogs}>
        
      <h3 className='label'>

        <img src="/assets/images/cap.png" alt="titleImage" />

        <p>{t('home.blogs')}</p>
        
      </h3>

      <div className='container'>

        <div className={cls.wrapper}>

          {blogs.map((blog, idx) => (

            // <div key={idx} className='col-md-6 col-lg-4 col-xl-3'>

              <div key={idx} className={`${cls.blog} quarterContainer`}>

                <img src={blog.photo_file} alt="" />

                <div className={cls.info}>

                  <h6>{blog.title}</h6>

                  <p dangerouslySetInnerHTML={{ __html: blog.details.substring(0, 350) }}></p>

                  <span><i className="fa-light fa-clock"></i> <span>أضيفت في {blog.date}</span></span>

                </div>

                <div className={`quarter ${i18n.language}`}></div>
                <div className={`movingQuarter ${i18n.language}`}></div>

              </div>

            // </div>

          ))}

        </div>

      </div>

    </div>
  )
}

export default Blogs