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
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  // DCOMPONENT HANDLERS
  const fetchBlogs = async () => {
    setLoading(true)

    const response = await axios.get(`/topics/3/page/1/count/30/${i18n.language}`);

    if(!response) return;

    setBlogs(response.data.topics);

    setCount(response.data.topics_count);

    setLoading(false)

    console.log(response);
  }

  useEffect(() => {
    fetchBlogs()
  }, [])

  return (
    <div className={cls.blogs}>

      {loading && <PagesLoader />}

      <div className="container">
        
        <h3 className='label'>

          <img src="/assets/images/blog.png" alt="titleImage" />

          <p>أشهر المقالات المنشورة</p>
          
        </h3>

        <div className={`${cls.row} row justify-content-center`}>

          <div className="col-md-6 col-lg-4">

            <div className={`${cls.blog} quarterContainer`} onClick={() => navigate('/blogs/123')}>

              <div className={`${cls.badge} ${cls[i18n.language]}`}>

                <span>11</span>

                <span>OCT</span>

              </div>

              <img src="/assets/images/blog.jpg" alt="blogImage" />

              <div className={cls.info}>

                <span><i className="fa-regular fa-user"></i> بواسطة ahmad</span>

                <h4>تقديم حلول أفضل للأجيال القادمة</h4>

                <p>هذا النص لملئ الفراغات ليس إلا هذا النص لملئ الفراغات ليس إلا هذا النص لملئ الفراغات ليس إلا هذا النص لملئ الفراغات ليس إلا هذا النص لملئ الفراغات ليس إلا </p>

              </div>

              <div className={`quarter ${i18n.language} second`}></div>
              <div className={`movingQuarter ${i18n.language} second`}></div>

            </div>

          </div>

          <div className="col-md-6 col-lg-4">

            <div className={`${cls.blog} quarterContainer`} onClick={() => navigate('/blogs/123')}>

              <div className={`${cls.badge} ${cls[i18n.language]}`}>

                <span>11</span>

                <span>OCT</span>

              </div>

              <img src="/assets/images/blog.jpg" alt="blogImage" />

              <div className={cls.info}>

                <span><i className="fa-regular fa-user"></i> بواسطة ahmad</span>

                <h4>تقديم حلول أفضل للأجيال القادمة</h4>

                <p>هذا النص لملئ الفراغات ليس إلا هذا النص لملئ الفراغات ليس إلا هذا النص لملئ الفراغات ليس إلا هذا النص لملئ الفراغات ليس إلا هذا النص لملئ الفراغات ليس إلا </p>

              </div>

              <div className={`quarter ${i18n.language} second`}></div>
              <div className={`movingQuarter ${i18n.language} second`}></div>

            </div>

          </div>

          <div className="col-md-6 col-lg-4">

            <div className={`${cls.blog} quarterContainer`} onClick={() => navigate('/blogs/123')}>

              <div className={`${cls.badge} ${cls[i18n.language]}`}>

                <span>11</span>

                <span>OCT</span>

              </div>

              <img src="/assets/images/blog.jpg" alt="blogImage" />

              <div className={cls.info}>

                <span><i className="fa-regular fa-user"></i> بواسطة ahmad</span>

                <h4>تقديم حلول أفضل للأجيال القادمة</h4>

                <p>هذا النص لملئ الفراغات ليس إلا هذا النص لملئ الفراغات ليس إلا هذا النص لملئ الفراغات ليس إلا هذا النص لملئ الفراغات ليس إلا هذا النص لملئ الفراغات ليس إلا </p>

              </div>

              <div className={`quarter ${i18n.language} second`}></div>
              <div className={`movingQuarter ${i18n.language} second`}></div>

            </div>

          </div>

          <div className="col-md-6 col-lg-4">

            <div className={`${cls.blog} quarterContainer`} onClick={() => navigate('/blogs/123')}>

              <div className={`${cls.badge} ${cls[i18n.language]}`}>

                <span>11</span>

                <span>OCT</span>

              </div>

              <img src="/assets/images/blog.jpg" alt="blogImage" />

              <div className={cls.info}>

                <span><i className="fa-regular fa-user"></i> بواسطة ahmad</span>

                <h4>تقديم حلول أفضل للأجيال القادمة</h4>

                <p>هذا النص لملئ الفراغات ليس إلا هذا النص لملئ الفراغات ليس إلا هذا النص لملئ الفراغات ليس إلا هذا النص لملئ الفراغات ليس إلا هذا النص لملئ الفراغات ليس إلا </p>

              </div>

              <div className={`quarter ${i18n.language} second`}></div>
              <div className={`movingQuarter ${i18n.language} second`}></div>

            </div>

          </div>

          <div className="col-md-6 col-lg-4">

            <div className={`${cls.blog} quarterContainer`} onClick={() => navigate('/blogs/123')}>

              <div className={`${cls.badge} ${cls[i18n.language]}`}>

                <span>11</span>

                <span>OCT</span>

              </div>

              <img src="/assets/images/blog.jpg" alt="blogImage" />

              <div className={cls.info}>

                <span><i className="fa-regular fa-user"></i> بواسطة ahmad</span>

                <h4>تقديم حلول أفضل للأجيال القادمة</h4>

                <p>هذا النص لملئ الفراغات ليس إلا هذا النص لملئ الفراغات ليس إلا هذا النص لملئ الفراغات ليس إلا هذا النص لملئ الفراغات ليس إلا هذا النص لملئ الفراغات ليس إلا </p>

              </div>

              <div className={`quarter ${i18n.language} second`}></div>
              <div className={`movingQuarter ${i18n.language} second`}></div>

            </div>

          </div>

          <div className="col-md-6 col-lg-4">

            <div className={`${cls.blog} quarterContainer`} onClick={() => navigate('/blogs/123')}>

              <div className={`${cls.badge} ${cls[i18n.language]}`}>

                <span>11</span>

                <span>OCT</span>

              </div>

              <img src="/assets/images/blog.jpg" alt="blogImage" />

              <div className={cls.info}>

                <span><i className="fa-regular fa-user"></i> بواسطة ahmad</span>

                <h4>تقديم حلول أفضل للأجيال القادمة</h4>

                <p>هذا النص لملئ الفراغات ليس إلا هذا النص لملئ الفراغات ليس إلا هذا النص لملئ الفراغات ليس إلا هذا النص لملئ الفراغات ليس إلا هذا النص لملئ الفراغات ليس إلا </p>

              </div>

              <div className={`quarter ${i18n.language} second`}></div>
              <div className={`movingQuarter ${i18n.language} second`}></div>

            </div>

          </div>

          <div className="col-md-6 col-lg-4">

            <div className={`${cls.blog} quarterContainer`}>

              <div className={`${cls.badge} ${cls[i18n.language]}`}>

                <span>11</span>

                <span>OCT</span>

              </div>

              <img src="/assets/images/blog.jpg" alt="blogImage" />

              <div className={cls.info}>

                <span><i className="fa-regular fa-user"></i> بواسطة ahmad</span>

                <h4>تقديم حلول أفضل للأجيال القادمة</h4>

                <p>هذا النص لملئ الفراغات ليس إلا هذا النص لملئ الفراغات ليس إلا هذا النص لملئ الفراغات ليس إلا هذا النص لملئ الفراغات ليس إلا هذا النص لملئ الفراغات ليس إلا </p>

              </div>

              <div className={`quarter ${i18n.language} second`}></div>
              <div className={`movingQuarter ${i18n.language} second`}></div>

            </div>

          </div>

          <div className="col-md-6 col-lg-4">

            <div className={`${cls.blog} quarterContainer`} onClick={() => navigate('/blogs/123')}>

              <div className={`${cls.badge} ${cls[i18n.language]}`}>

                <span>11</span>

                <span>OCT</span>

              </div>

              <img src="/assets/images/blog.jpg" alt="blogImage" />

              <div className={cls.info}>

                <span><i className="fa-regular fa-user"></i> بواسطة ahmad</span>

                <h4>تقديم حلول أفضل للأجيال القادمة</h4>

                <p>هذا النص لملئ الفراغات ليس إلا هذا النص لملئ الفراغات ليس إلا هذا النص لملئ الفراغات ليس إلا هذا النص لملئ الفراغات ليس إلا هذا النص لملئ الفراغات ليس إلا </p>

              </div>

              <div className={`quarter ${i18n.language} second`}></div>
              <div className={`movingQuarter ${i18n.language} second`}></div>

            </div>

          </div>

        </div>

        {blogs.length && 

          <div className='pagination'>

            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="/" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                {
                  Array(Math.ceil(count / 30)).fill(0).map((one, idx) => (

                    <li key={idx} className="page-item"><a className="page-link" href="#">{idx + 1}</a></li>

                  ))
                }
                <li className="page-item">
                  <a className="page-link" href="/" aria-label="Next">
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