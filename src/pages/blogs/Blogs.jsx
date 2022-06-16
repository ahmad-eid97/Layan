import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import cls from './blogs.module.scss';

const Blogs = () => {
  // COMPONENT HOOKS 
  const { i18n } = useTranslation();
  const navigate = useNavigate()

  return (
    <div className={cls.blogs}>

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

        <div className='pagination'>

          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="/" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li className="page-item"><a className="page-link" href="#">1</a></li>
              <li className="page-item"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item">
                <a className="page-link" href="/" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>

        </div>

      </div>

    </div>
  )
}

export default Blogs