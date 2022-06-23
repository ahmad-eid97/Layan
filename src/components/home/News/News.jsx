import { useTranslation } from 'react-i18next';

import cls from './news.module.scss';

const News = () => {
  // COMPONENT HOOKS
  const { t, i18n } = useTranslation('common');

  return (
    <div className={cls.news}>
        
      <h3 className='label'>

        <img src="/assets/images/cap.png" alt="titleImage" />

        <p>{t('home.news')}</p>
        
      </h3>

      <div className='container'>

        <div className='row justify-content-center'>

          <div className='col-md-6 col-lg-4 col-xl-3'>

            <div className={`${cls.singleNews} quarterContainer`}>

              <img src="/assets/images/news.jpg" alt="newsImage" />

              <div className={cls.info}>

                <h6>تخرج دفعة 2022</h6>

                <p>جامعة القاهرة الجديدة</p>

                <span><i className="fa-light fa-clock"></i> <span>أضيفت منذ 3 أشهر</span></span>

              </div>

              <div className={`quarter ${i18n.language} second`}></div>
              <div className={`movingQuarter ${i18n.language} second`}></div>

            </div>

          </div>

          <div className='col-md-6 col-lg-4 col-xl-3'>

            <div className={`${cls.singleNews} quarterContainer`}>

              <img src="/assets/images/news.jpg" alt="newsImage" />

              <div className={cls.info}>

                <h6>إنتهاء مشروع تخرج 2022</h6>

                <p>جامعة القاهرة الجديدة</p>

                <span><i className="fa-light fa-clock"></i> <span>أضيفت منذ 3 أشهر</span></span>

              </div>

              <div className={`quarter ${i18n.language} second`}></div>
              <div className={`movingQuarter ${i18n.language} second`}></div>

            </div>

          </div>

          <div className='col-md-6 col-lg-4 col-xl-3'>

            <div className={`${cls.singleNews} quarterContainer`}>

              <img src="/assets/images/news.jpg" alt="newsImage" />

              <div className={cls.info}>

                <h6>بداية سنة 2022 الدراسية</h6>

                <p>جامعة القاهرة الجديدة</p>

                <span><i className="fa-light fa-clock"></i> <span>أضيفت منذ 3 أشهر</span></span>

              </div>

              <div className={`quarter ${i18n.language} second`}></div>
              <div className={`movingQuarter ${i18n.language} second`}></div>

            </div>

          </div>

          <div className='col-md-6 col-lg-4 col-xl-3'>

            <div className={`${cls.singleNews} quarterContainer`}>

              <img src="/assets/images/news.jpg" alt="newsImage" />

              <div className={cls.info}>

                <h6>بداية سنة 2022 الدراسية</h6>

                <p>جامعة القاهرة الجديدة</p>

                <span><i className="fa-light fa-clock"></i> <span>أضيفت منذ 3 أشهر</span></span>

              </div>

              <div className={`quarter ${i18n.language} second`}></div>
              <div className={`movingQuarter ${i18n.language} second`}></div>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default News;