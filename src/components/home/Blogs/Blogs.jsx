import { useTranslation } from 'react-i18next';

import cls from './blogs.module.scss';

const Blogs = () => {
  // COMPONENT HOOKS
  const { i18n } = useTranslation();

  return (
    <div className={cls.blogs}>
        
      <h3 className='label'>

        <img src="/assets/images/cap.png" alt="titleImage" />

        <p>المقالات</p>
        
      </h3>

      <div className='container'>

        <div className='row justify-content-center'>

          <div className='col-md-6 col-lg-4 col-xl-3'>

            <div className={`${cls.blog} quarterContainer`}>

              <img src="/assets/images/education.jpg" alt="" />

              <div className={cls.info}>

                <h6>جامعات مصرية معروفة</h6>

                <p>جامعة القاهرة الجديدة</p>

                <span><i className="fa-light fa-clock"></i> <span>أضيفت منذ 3 أشهر</span></span>

              </div>

              <div className={`quarter ${i18n.language}`}></div>
              <div className={`movingQuarter ${i18n.language}`}></div>

            </div>

          </div>

          <div className='col-md-6 col-lg-4 col-xl-3'>

            <div className={`${cls.blog} quarterContainer`}>

              <img src="/assets/images/education.jpg" alt="" />

              <div className={cls.info}>

                <h6>جامعات مصرية معروفة</h6>

                <p>جامعة القاهرة الجديدة</p>

                <span><i className="fa-light fa-clock"></i> <span>أضيفت منذ 3 أشهر</span></span>

              </div>

              <div className={`quarter ${i18n.language}`}></div>
              <div className={`movingQuarter ${i18n.language}`}></div>

            </div>

          </div>

          <div className='col-md-6 col-lg-4 col-xl-3'>

            <div className={`${cls.blog} quarterContainer`}>

              <img src="/assets/images/education.jpg" alt="" />

              <div className={cls.info}>

                <h6>جامعات مصرية معروفة</h6>

                <p>جامعة القاهرة الجديدة</p>

                <span><i className="fa-light fa-clock"></i> <span>أضيفت منذ 3 أشهر</span></span>

              </div>

              <div className={`quarter ${i18n.language}`}></div>
              <div className={`movingQuarter ${i18n.language}`}></div>

            </div>

          </div>

          <div className='col-md-6 col-lg-4 col-xl-3'>

            <div className={`${cls.blog} quarterContainer`}>

              <img src="/assets/images/education.jpg" alt="" />

              <div className={cls.info}>

                <h6>جامعات مصرية معروفة</h6>

                <p>جامعة القاهرة الجديدة</p>

                <span><i className="fa-light fa-clock"></i> <span>أضيفت منذ 3 أشهر</span></span>

              </div>

              <div className={`quarter ${i18n.language}`}></div>
              <div className={`movingQuarter ${i18n.language}`}></div>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Blogs