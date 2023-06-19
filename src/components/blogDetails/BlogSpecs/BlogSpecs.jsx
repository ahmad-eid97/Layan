import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import axios from '../../../Utils/axios';

import cls from './blogSpecs.module.scss';

const BlogSpecs = ({ blogDetails }) => {
  // COMPONENT HOOKS
  const [blogs, setBlogs] = useState()
  const { t, i18n } = useTranslation('common');
  const navigate = useNavigate();

  const fetchBlogs = async () => {
    const response = await axios.get(`/topics/7/page/1/count/4/${i18n.language}`).catch(err => console.log(err));
    if (!response) return;
    setBlogs(response.data.topics)
  }

  useEffect(() => {
    fetchBlogs()
  }, [])

  return (
    <div className={cls.blogSpecs}>
      <div className={`${cls.search} ${cls[i18n.language]}`}>
        <input type="text" placeholder={t('blogDetails.search')} />
        <i className="fa-light fa-magnifying-glass"></i>
      </div>
      <div className={cls.categories}>
        <h5>{t('blogDetails.blogs')}</h5>
        <ul>
          {blogDetails?.Joined_categories.map((one, idx) => (
            <li key={one.id}><i className="fa-solid fa-circle-dashed"></i> {one.title}</li>
          ))}
        </ul>
      </div>
      <div className={cls.latest}>
        <h5>{t('blogDetails.latest')}</h5>
        {blogs?.map(blog => (
          <div key={blog.id} className={cls.one}>
            <img src={blog.photo_file} alt="latestImage" loading="lazy" />
            <div className={cls.info}>
              <p onClick={() => navigate(`/blogs/${blog.id}`)}>{blog.title}</p>
              <span>{blog.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BlogSpecs