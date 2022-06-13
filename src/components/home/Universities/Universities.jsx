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

const Universities = () => {
  return (
    <div className={cls.universities}>

      <div className='container'>

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

          <div className={cls.slide}>
            <img src="/assets/images/university.png" alt="university" />
            <p>جامعة القاهرة</p>
          </div>

          <div className={cls.slide}>
            <img src="/assets/images/university.png" alt="university" />
            <p>جامعة القاهرة</p>
          </div>

          <div className={cls.slide}>
            <img src="/assets/images/university.png" alt="university" />
            <p>جامعة القاهرة</p>
          </div>

          <div className={cls.slide}>
            <img src="/assets/images/university.png" alt="university" />
            <p>جامعة القاهرة</p>
          </div>

          <div className={cls.slide}>
            <img src="/assets/images/university.png" alt="university" />
            <p>جامعة القاهرة</p>
          </div>

          <div className={cls.slide}>
            <img src="/assets/images/university.png" alt="university" />
            <p>جامعة القاهرة</p>
          </div>

          <div className={cls.slide}>
            <img src="/assets/images/university.png" alt="university" />
            <p>جامعة القاهرة</p>
          </div>

          <div className={cls.slide}>
            <img src="/assets/images/university.png" alt="university" />
            <p>جامعة القاهرة</p>
          </div>

          <div className={cls.slide}>
            <img src="/assets/images/university.png" alt="university" />
            <p>جامعة القاهرة</p>
          </div>

          <div className={cls.slide}>
            <img src="/assets/images/university.png" alt="university" />
            <p>جامعة القاهرة</p>
          </div>

        </Carousel>

      </div>

    </div>
  )
}

export default Universities