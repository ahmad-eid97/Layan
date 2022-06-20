import { useTranslation } from 'react-i18next';

import cls from './allUniversities.module.scss';

const universities = [
  {
    image: '/assets/images/halab.png',
    name: 'جامعة حلب',
  },
  {
    image: '/assets/images/istanbul.png',
    name: 'جامعة إسطنبول',
  },
  {
    image: '/assets/images/palastine.png',
    name: 'جامعة فلسطين',
  },
  {
    image: '/assets/images/university.png',
    name: 'جامعة القاهرة',
  },
  {
    image: '/assets/images/halab.png',
    name: 'جامعة حلب',
  },
  {
    image: '/assets/images/istanbul.png',
    name: 'جامعة إسطنبول',
  },
  {
    image: '/assets/images/palastine.png',
    name: 'جامعة فلسطين',
  },
  {
    image: '/assets/images/university.png',
    name: 'جامعة القاهرة',
  },
]

const AllUniversities = () => {
  // COMPONENT HOOKS
  const { i18n } = useTranslation();

  return (
    <div className={cls.allUniversities}>
        
      <h3 className='label'>

        <img src="/assets/images/universityBuilding.png" alt="titleImage" />

        <p>الجامعات</p>
        
      </h3>

      <div className='container'>

        <div className={cls.search}>

          <input type="text" placeholder='بحث عن جامعة' className={cls[i18n.language]} />

          <button className={cls[i18n.language]}>بحث</button>

        </div>

        <div className={cls.universities}>

          <div className='row justify-content-center'>

            {universities.map((one, idx) => (

              <div className='col-md-6 col-lg-3'>

                <div key={idx} className={cls.single}>

                  <img src={one.image} alt="platform" />

                  <h6>{one.name}</h6>

                  <button>عرض التفاصيل</button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>
    
    </div>
  )
}

export default AllUniversities