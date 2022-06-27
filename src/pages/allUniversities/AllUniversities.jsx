import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

import PagesLoader from '../../components/UIs/PagesLoader/PagesLoader';
import Loader from '../../components/UIs/Loader/Loader';

import { useTranslation } from 'react-i18next';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import axios from '../../Utils/axios';

import cls from './allUniversities.module.scss';

const AllUniversities = () => {
  // COMPONENT HOOKS
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(false);
  const [countries, setCountries] = useState([]);
  const [universities, setUniversities] = useState([])
  const [choosedCountry, setChoosedCountry] = useState(null);
  const [resMeta, setResMeta] = useState({})
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 10
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6
    },
    tablet: {
      breakpoint: { max: 1024, min: 664 },
      items: 3
    },
    small: {
      breakpoint: { max: 664, min: 465 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  useEffect(() => {
    
  }, [i18n.language])

  const fetchAllCountries = async () => {
    setPageLoading(true)

    const response = await axios.get(`/crm/countries?lang=${i18n.language}&limit=30`);

    if(!response && !response.data.data.success) return;

    setCountries(response.data.data.countries);

    setChoosedCountry(response.data.data.countries[0]);

    setPageLoading(false)
  }

  const fetchAllUniversities = async () => {
    setLoading(true)

    if(choosedCountry) {
      const response = await axios.get(`/crm/universities?lang=${i18n.language}&country_id=${choosedCountry.id}&limit=30`);

      if(!response) return;

      setUniversities(response.data.data.universities);

      setResMeta({ meta: response.data.data.meta, links: response.data.data.links })

      setLoading(false)
    }
  }

  const changePage = async (e, link) => {
    e.preventDefault();

    setLoading(true)

    const response = await axios.get(`${link}&lang=${i18n.language}&country_id=${choosedCountry.id}`);

    if(!response) return;

    setUniversities(response.data.data.universities);

    setResMeta({ meta: response.data.data.meta, links: response.data.data.links })

    setLoading(false)

  }

  useEffect(() => {

    fetchAllCountries();

  }, [])

  useEffect(() => {

    fetchAllUniversities();

  }, [choosedCountry])

  
  const breakpoints = {
    // when window width is >= 320px
    100: {
      slidesPerView: 2,
      spaceBetween: 5
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 5
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 5
    },
    992: {
      slidesPerView: 6,
      spaceBetween: 5
    },
    1200: {
      slidesPerView: 7,
      spaceBetween: 5
    }
  }

  return (
    <div className={cls.allUniversities}>

      {pageLoading && <PagesLoader />}

      {loading && <Loader />}
        
      <h3 className='label'>

        <img src="/assets/images/universityBuilding.png" alt="titleImage" />

        <p>الجامعات حسب الدول</p>
        
      </h3>

      <div className='container'>

        <Swiper 
          spaceBetween={5}
          className={`${cls.carousel} ${cls[i18n.language]}`}
          dir='rtl'
          breakpoints={breakpoints}
        >

          {countries.map((one, idx) => (

            <SwiperSlide key={idx} className={`${cls.smallSlide} ${choosedCountry.id === one.id ? cls.choosed : ''}`} onClick={() => setChoosedCountry(one)}>

              <p>{one.title}</p>

            </SwiperSlide>

          ))}

        </Swiper>

      </div>

      <div className='container'>

        <div className={cls.search}>

          <input type="text" placeholder='بحث عن جامعة' className={cls[i18n.language]} />

          <button className={cls[i18n.language]}>بحث</button>

        </div>

        {universities.length ?
        
          <div className={cls.universities}>

            <div className='row justify-content-center'>

              {universities.map((one, idx) => (

                <div key={idx} className='col-md-6 col-lg-3'>

                  <div className={cls.single}>

                    <img src={one.photo_file} alt="platform" />

                    <h6>{one.title}</h6>

                    <button onClick={() => navigate(`/university/${one.id}`)}>عرض التفاصيل</button>

                  </div>

                </div>

              ))}

            </div>

          </div>

          :

          <div className='empty'>

            <img src="/assets/images/emptyUniversities.png" alt="empty" />

            <p>لا توجد جامعات لدينا في هذه الدولة</p>

          </div>
      
        }

      </div>

      {universities.length && choosedCountry && choosedCountry.universities_count >= 1 && 
        
        <div className='pagination'>

          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className={`${!resMeta.links.prev ? 'disabled' : '' } page-item`} onClick={(e) => changePage(e, resMeta.links.prev)}>
                <a className='page-link' aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              {
                Array(Math.ceil(resMeta.meta.total / 30)).fill().map((one, idx) => ( // fill for looping to fill array => Array(2)
                  <li className='page-item' key={idx}>
                    <a className={`${resMeta.meta.current_page === idx + 1 ? 'active' : ''} page-link`} href="#" onClick={(e) => changePage(e, `http://layanedu.com/api/v1/crm/universities?page=${idx+1}`)}>{ idx + 1 }</a>
                  </li>
                ))
              }
              <li className={`${!resMeta.links.next ? 'disabled' : '' } page-item`} onClick={(e) => changePage(e, resMeta.links.next)}>
                <a className="page-link" href="/" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>

        </div>

      }
    
    </div>
  )
}

export default AllUniversities