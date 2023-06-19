import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import axios from '../../../Utils/axios';

import cls from './blogs.module.scss';

const Blogs = () => {
  // COMPONENT HOOKS
  const [blogs, setBlogs] = useState([])
  const { t, i18n } = useTranslation('common');
  const navigate = useNavigate();

  // COMPONENT HANDLERS
  const fetchNews = async () => {
    const response = await axios.get(`/topics/7/page/1/count/50/${i18n.language}`);
    if (!response) return;
    setBlogs(response.data.topics)
  }

  useEffect(() => {
    fetchNews()
  }, [])

  return (
    <div className={cls.blogs}>
      <h3 className='label'>
        <img src="/assets/images/cap.png" alt="titleImage" loading="lazy" />
        <p>{t('home.blogs')}</p>
      </h3>
      <div className='container'>
        <div className={cls.wrapper}>
          {blogs.reverse().slice(0, 8).map((blog, idx) => (
            <div key={idx} className={`${cls.blog} quarterContainer`} onClick={() => navigate(`/blogs/${blog.id}`)}>
              <img src={blog.photo_file} alt="blog image" loading="lazy" />
              <div className={cls.info}>
                <h6>{blog.title}</h6>
                <p dangerouslySetInnerHTML={{ __html: blog.details.substring(0, 350) }}></p>
                <span><i className="fa-light fa-clock"></i> <span>{t('home.addedIn')} {blog.date}</span></span>
              </div>
              <div className={`quarter ${i18n.language}`}></div>
              <div className={`movingQuarter ${i18n.language}`}></div>
            </div>
          ))}
        </div>
      </div>
      <div className={cls.btn}>
        <Link to="/blogs">
          <button>{t("home.seeMore")}</button>
        </Link>
      </div>
    </div>
  )
}

export default Blogs