import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import Carousel from "react-material-ui-carousel";

import { useTranslation } from 'react-i18next';

import axios from '../../../Utils/axios';

import cls from './header.module.scss';

const Header = () => {
  // COMPONENT HOOKS
  const [banners, setBanners] = useState([{ title: '', details: '', file: '' }])
  const { t, i18n } = useTranslation('common');

  const fetchSlides = async () => {
    try {
      const response = await axios.get(`/banners/1/${i18n.language}`);
      setBanners(response.data.banners)
    } catch (err) {
      console.log(err)
    }

  }

  useEffect(() => {
    fetchSlides()
  }, [])

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
        {banners.map(banner => (
          <div className={cls.slide} key={banner.id}>

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

                  <h1>{banner.title}</h1>

                  <p>{banner.details}</p>

                  <a href={banner.link_url} target="_blank">
                    <button>{t('home.know')}</button>
                  </a>

                </div>

              </div>

              <div className='col-lg-6 col-xl-4'>

                <div className={cls.image}>

                  <img src={banner.file ? banner.file : "/assets/images/person.png"} alt={banner.title} />

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
                    <span>info@layanedu.com</span>
                  </div>
                </div>

              </div>

            </div>

          </div>
        ))}

      </Carousel>

    </div>
  )
}

export default Header