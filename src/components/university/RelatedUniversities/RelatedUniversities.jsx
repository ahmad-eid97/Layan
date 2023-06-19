import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import cls from './relatedUniversities.module.scss';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 7
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 764 },
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

const RelatedUniversities = ({ relatedUniversities }) => {
  // COMPONENT HOOKS
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className={cls.relatedUniversities}>
      <div className='container'>
        <h3 className='label'>
          <img src="/assets/images/cap.png" alt="titleImage" loading="lazy" />
          <p>جامعات أخرى</p>
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
          {relatedUniversities.map((one, idx) => (
            <div key={idx} className={cls.slide}>
              <img src={one.photo_file} alt="platform" loading="lazy" />
              <h6>{one.title}</h6>
              <button onClick={() => navigate(`/university/${one.id}`)}>عرض التفاصيل</button>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default RelatedUniversities;