import { useState } from 'react';

import { useTranslation } from 'react-i18next';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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

const universities = [
  {
    name: 'جامعة القاهرة',
    image: '/assets/images/university.png',
    specs: [
      'الطب',
      'العلوم',
      'التكنولوجيا',
      'الهندسة',
      'الإقتصاد',
    ]
  },
  {
    name: 'جامعة حلب',
    image: '/assets/images/halab.png',
    specs: [
      'الطب',
      'العلوم',
      'التكنولوجيا',
      'الهندسة',
      'الإقتصاد',
    ]
  },
  {
    name: 'جامعة إسطنبول',
    image: '/assets/images/istanbul.png',
    specs: [
      'الطب',
      'العلوم',
      'التكنولوجيا',
      'الهندسة',
      'الإقتصاد',
    ]
  },
  {
    name: 'جامعة فلسطين',
    image: '/assets/images/palastine.png',
    specs: [
      'الطب',
      'العلوم',
      'التكنولوجيا',
      'الهندسة',
      'الإقتصاد',
    ]
  },
  {
    name: 'الجامعة الأمريكية',
    image: '/assets/images/auc.png',
    specs: [
      'الطب',
      'العلوم',
      'التكنولوجيا',
      'الهندسة',
      'الإقتصاد',
    ]
  },
  {
    name: 'جامعة القاهرة',
    image: '/assets/images/university.png',
    specs: [
      'الطب',
      'العلوم',
      'التكنولوجيا',
      'الهندسة',
      'الإقتصاد',
    ]
  }
]

const Universities = () => {
  // COMPONENT HOOKS
  const [selectedUinversity, setSelectedUniversity] = useState(null);
  const { t, i18n } = useTranslation('common');

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

          {universities.map((one, idx) => (

            <div key={idx} className={cls.slide} onClick={() => setSelectedUniversity(one)}>
              <img src={one.image} alt="university" />
              <p>{one.name}</p>
            </div>

          ))}

        </Carousel>

        {selectedUinversity && 

          <div className={cls.description}>

            <h6><i className="fa-light fa-graduation-cap"></i> <span>{selectedUinversity.name}</span></h6>

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

                {selectedUinversity.specs.map((one, idx) => (

                  <div key={idx} className={cls.smallSlide}>
                    <p>{one}</p>
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