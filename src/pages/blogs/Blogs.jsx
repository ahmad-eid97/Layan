import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from './../../Utils/axios';

import PagesLoader from '../../components/UIs/PagesLoader/PagesLoader' 

import { useTranslation } from 'react-i18next';

import cls from './blogs.module.scss';

const Blogs = () => {
  // COMPONENT HOOKS
  const [blogs, setBlogs] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  // DCOMPONENT HANDLERS
  const fetchBlogs = async () => {
    setLoading(true)

    const response = await axios.get(`/topics/7/page/1/count/30/${i18n.language}`);

    if(!response) return;

    setBlogs(response.data.topics);

    setCount(response.data.topics_count);

    setLoading(false)
  }

  useEffect(() => {
    fetchBlogs()
  }, [])

  const changePage = (pageNum) => {
    setCurrentPage(pageNum)
  }

  return (
    <div className={cls.blogs}>

      {loading && <PagesLoader />}

      <div className="container">
        
        <h3 className='label'>

          <img src="/assets/images/blog.png" alt="titleImage" />

          <p>أشهر المقالات المنشورة</p>
          
        </h3>

        <div className={`${cls.wrapper}`}>

          { blogs.map((blog, idx) => (

            // <div key={idx} className="col-md-6 col-lg-4">

              <div key={idx} className={`${cls.blog} quarterContainer`} onClick={() => navigate('/blogs/123')}>

                <div className={`${cls.badge} ${cls[i18n.language]}`}>

                  <span>11</span>

                  <span>OCT</span>

                </div>

                <img src={blog.photo_file} alt="blogImage" />

                <div className={cls.info}>

                  <span><i className="fa-regular fa-user"></i> بواسطة {blog.user.name}</span>

                  <h4>{blog.title}</h4>

                  <p dangerouslySetInnerHTML={{ __html: blog.details.substring(0, 400) }}></p>

                </div>

                <div className={`quarter ${i18n.language} second`}></div>
                <div className={`movingQuarter ${i18n.language} second`}></div>

              </div>

            // </div>

          )) }

        </div>

        {blogs.length && 

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

export default Blogs