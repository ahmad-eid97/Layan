import { useNavigate } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import cls from './news.module.scss';

const News = () => {
  // COMPONENT HOOKS
  const { i18n } = useTranslation();
  const navigate = useNavigate()
  
  return (
    <div className={cls.news}>

      <div className='container'>

        <div className={cls.newsHead}>
        
          <h3 className='label'>

            <img src="/assets/images/news.png" alt="titleImage" />
    
            <p>أحدث الأخبار</p>
            
          </h3>

          <div className={cls.search}>

            <input type="text" placeholder='بحث عن خبر' className={cls[i18n.language]} />

            <button className={cls[i18n.language]}>بحث</button>

          </div>

        </div>

        <div className='row justify-content-center'>

          <div className='col-md-6 col-lg-4 col-xl-3'>

            <div className={`${cls.singleNews} quarterContainer`} onClick={() => navigate('/news/123')}>

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

            <div className={`${cls.singleNews} quarterContainer`} onClick={() => navigate('/news/123')}>

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

            <div className={`${cls.singleNews} quarterContainer`} onClick={() => navigate('/news/123')}>

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

            <div className={`${cls.singleNews} quarterContainer`} onClick={() => navigate('/news/123')}>

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

            <div className={`${cls.singleNews} quarterContainer`} onClick={() => navigate('/news/123')}>

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

            <div className={`${cls.singleNews} quarterContainer`} onClick={() => navigate('/news/123')}>

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

            <div className={`${cls.singleNews} quarterContainer`} onClick={() => navigate('/news/123')}>

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

            <div className={`${cls.singleNews} quarterContainer`} onClick={() => navigate('/news/123')}>

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

export default News