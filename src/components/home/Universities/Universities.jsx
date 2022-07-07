import { useState, useEffect } from 'react';

import Loader from '../../../components/UIs/Loader/Loader';

import { useTranslation } from 'react-i18next';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import axios from '../../../Utils/axios';

import cls from './universities.module.scss';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 8
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
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

const Universities = () => {
  // COMPONENT HOOKS
  const [universities, setUniversities] = useState([])
  const [selectedUinversity, setSelectedUniversity] = useState(null);
  const { t, i18n } = useTranslation('common');

  // COMPONENT HANDLERS
  const fetchUniversities = async () => {

    const response = await axios.get(`/crm/universities?lang=${i18n.language}&limit=30`);

    if(!response) return;

    setUniversities(response.data.data.universities);
    console.log(response.data.data.universities);
  }

  useEffect(() => {
    fetchUniversities();
  }, [])

  return (
    <div className={cls.universities}>

      <div className='container'>
        
        <h3 className='label'>

          <img src="/assets/images/cap.png" alt="titleImage" />

          <p>{t('home.universities')}</p>
          
        </h3>

        <Carousel
          className={cls.carousel}
          draggable={true}
          showDots={false}
          responsive={responsive}
          autoPlay={true}
          infinite={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          transitionDuration={500}
          arrows={false}
        >

          {universities && universities.map((one, idx) => (

            <div key={idx} className={cls.slide} onClick={() => setSelectedUniversity(one)}>
              <img src={one.photo_file} alt="university" />
              <p>{one.title}</p>
            </div>

          ))}

        </Carousel>

        {selectedUinversity && 

          <div className={cls.description}>

            <h6><i className="fa-light fa-graduation-cap"></i> <span>{selectedUinversity.title}</span></h6>

            <i className={`${cls[i18n.language]} fa-light fa-xmark`} onClick={() => setSelectedUniversity(null)}></i>

              <Carousel
                className={cls.carousel}
                draggable={true}
                showDots={false}
                responsive={responsive}
                autoPlay={true}
                infinite={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                transitionDuration={500}
                arrows={false}
              >

                {selectedUinversity.specialties.map((one, idx) => (

                  <div key={idx} className={cls.smallSlide}>
                    <p>{one.title}</p>
                  </div>

                ))}

              </Carousel>

          </div>
        
        }

      </div>

    </div>
  )
}

export default Universities