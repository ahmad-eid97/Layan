import { Link } from "react-router-dom";

import Carousel from "react-material-ui-carousel";

import { useTranslation } from 'react-i18next';

import cls from './header.module.scss';

const Header = () => {
  // COMPONENT HOOKS
  const { t, i18n } = useTranslation('common');

  return (
    <div className={cls.header}>

      
      <Carousel
        className={cls.carousel}
        stopAutoPlayOnHover={false}
        indicators={false}
        swipe={false}
        interval={8000}
      >
        {/* SLIDE */}
        <div className={cls.slide}>

          <div className={`${cls.row} row align-items-center`}>

            <div className={`${cls.triangle} col-lg-6 col-xl-4`}>

              <div className={`${cls.text} ${cls[i18n.language]}`}>

                <div className={cls.content}>

                  <span>{t('home.deserve')}</span>

                  <h1>{t('home.layan')}</h1>

                  <Link to="/register">
                    <button>{t('home.register')}</button>
                  </Link>

                </div>

              </div>

            </div>

            <div className='col-lg-6 col-xl-4'>

              <div className={cls.middle}>

                <h1>{t('home.dontLetGo')}</h1>

                <p>{t('home.student')}</p>

                <Link to="/about-us">
                  <button>{t('home.know')}</button>
                </Link>

              </div>

            </div>

            <div className='col-lg-6 col-xl-4'>

              <div className={cls.image}>

                <img src="/assets/images/person.png" alt="" />

              </div>

            </div>

          </div>

          <div className={`${cls.bottom} ${cls[i18n.language]}`}>

            <div className={`${cls.wrapper} container`}>

              <div className={cls.part}>
                <i className="fa-solid fa-phone"></i>
                <div>
                  <p>{t('home.contacting')}</p>
                  <span>0097022973810</span>
                </div>
              </div>

              <div className={cls.part}>
                <i className="fa-solid fa-phone"></i>
                <div>
                  <p>{t('home.contacting')}</p>
                  <span>info@lyanedu.com</span>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* SLIDE */}
        <div className={cls.slide}>

          <div className={`${cls.row} row align-items-center`}>

            <div className={`${cls.triangle} col-lg-6 col-xl-4`}>

              <div className={`${cls.text} ${cls[i18n.language]}`}>

                <div className={cls.content}>

                  <span>{t('home.deserve')}</span>

                  <h1>{t('home.layan')}</h1>

                  <Link to="/register">
                    <button>{t('home.register')}</button>
                  </Link>

                </div>

              </div>

            </div>

            <div className='col-lg-6 col-xl-4'>

              <div className={cls.middle}>

                <h1>{t('home.dontLetGo')}</h1>

                <p>{t('home.student')}</p>

                <Link to="/about-us">
                  <button>{t('home.know')}</button>
                </Link>

              </div>

            </div>

            <div className='col-lg-6 col-xl-4'>

              <div className={cls.image}>

                <img src="/assets/images/slide1.png" alt="" />

              </div>

            </div>

          </div>

          <div className={`${cls.bottom} ${cls[i18n.language]}`}>

            <div className={`${cls.wrapper} container`}>

              <div className={cls.part}>
                <i className="fa-solid fa-phone"></i>
                <div>
                  <p>{t('home.contacting')}</p>
                  <span>0097022973810</span>
                </div>
              </div>

              <div className={cls.part}>
                <i className="fa-solid fa-phone"></i>
                <div>
                  <p>{t('home.contacting')}</p>
                  <span>info@lyanedu.com</span>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* SLIDE */}
        <div className={cls.slide}>

          <div className={`${cls.row} row align-items-center`}>

            <div className={`${cls.triangle} col-lg-6 col-xl-4`}>

              <div className={`${cls.text} ${cls[i18n.language]}`}>

                <div className={cls.content}>

                  <span>{t('home.deserve')}</span>

                  <h1>{t('home.layan')}</h1>

                  <button>{t('home.register')}</button>

                </div>

              </div>

            </div>

            <div className='col-lg-6 col-xl-4'>

              <div className={cls.middle}>

                <h1>{t('home.dontLetGo')}</h1>

                <p>{t('home.student')}</p>

                <button>{t('home.know')}</button>

              </div>

            </div>

            <div className='col-lg-6 col-xl-4'>

              <div className={cls.image}>

                <img src="/assets/images/slide2.png" alt="" />

              </div>

            </div>

          </div>

          <div className={`${cls.bottom} ${cls[i18n.language]}`}>

            <div className={`${cls.wrapper} container`}>

              <div className={cls.part}>
                <i className="fa-solid fa-phone"></i>
                <div>
                  <p>{t('home.contacting')}</p>
                  <span>0097022973810</span>
                </div>
              </div>

              <div className={cls.part}>
                <i className="fa-solid fa-phone"></i>
                <div>
                  <p>{t('home.contacting')}</p>
                  <span>info@lyanedu.com</span>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* SLIDE */}
        <div className={cls.slide}>

          <div className={`${cls.row} row align-items-center`}>

            <div className={`${cls.triangle} col-lg-6 col-xl-4`}>

              <div className={`${cls.text} ${cls[i18n.language]}`}>

                <div className={cls.content}>

                  <span>{t('home.deserve')}</span>

                  <h1>{t('home.layan')}</h1>

                  <button>{t('home.register')}</button>

                </div>

              </div>

            </div>

            <div className='col-lg-6 col-xl-4'>

              <div className={cls.middle}>

                <h1>{t('home.dontLetGo')}</h1>

                <p>{t('home.student')}</p>

                <button>{t('home.know')}</button>

              </div>

            </div>

            <div className='col-lg-6 col-xl-4'>

              <div className={cls.image}>

                <img src="/assets/images/slide3.png" alt="" />

              </div>

            </div>

          </div>

          <div className={`${cls.bottom} ${cls[i18n.language]}`}>

            <div className={`${cls.wrapper} container`}>

              <div className={cls.part}>
                <i className="fa-solid fa-phone"></i>
                <div>
                  <p>{t('home.contacting')}</p>
                  <span>0097022973810</span>
                </div>
              </div>

              <div className={cls.part}>
                <i className="fa-solid fa-phone"></i>
                <div>
                  <p>{t('home.contacting')}</p>
                  <span>info@lyanedu.com</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </Carousel>

    </div>
  )
}

export default Header