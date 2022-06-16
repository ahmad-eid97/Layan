import { useTranslation } from 'react-i18next';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import cls from './platforms.module.scss';

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
    breakpoint: { max: 1024, min: 764 },
    items: 4
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

const platforms = [
  '/assets/images/udemy.png',
  '/assets/images/plat1.png',
  '/assets/images/plat2.png',
  '/assets/images/plat3.png',
  '/assets/images/plat4.png',
  '/assets/images/plat5.png',
]

const Platforms = () => {
  // COMPONENT HOOKS
  const { i18n } = useTranslation();

  return (
    <div className={cls.platforms}>

      <div className='container'>
        
        <h3 className='label'>

          <img src="/assets/images/cap.png" alt="titleImage" />

          <p>أشهر المنصات</p>
          
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

          {platforms.map((one, idx) => (

            <div key={idx} className={cls.slide}>
              <img src={one} alt="platform" />
            </div>

          ))}

        </Carousel>

      </div>

    </div>
  )
}

export default Platforms;