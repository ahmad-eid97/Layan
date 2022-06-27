import { useState } from 'react';

import cls from './universityDetails.module.scss';
import UniversityAccordion from './../../UIs/UniversityAccordion/UniversityAccordion';
import { useEffect } from 'react';

const UniversityDetails = ({ degrees }) => {
  // COMPONENT HOOKS
  const [type, setType] = useState({})

  useEffect(() => {
    setType(degrees[0])
  }, [degrees])

  return (
    <div className={cls.universityDetails}>

      <div className='container'>
        
        <h3 className='label'>
  
          <img src="/assets/images/cap.png" alt="titleImage" />
  
          <p>تفاصيل الجامعة</p>
          
        </h3>

        <div className={cls.specs}>

          <h3>التخصصات</h3>

          <ul>

            {degrees && degrees.map((degree, idx) => (

              <li key={idx} onClick={() => setType(degree)} className={type?.name === degree.name ? cls.selected : ''}>{degree.name}</li>

            ))}

            {/* <li onClick={() => setType('ba')} className={type === 'ba' ? cls.selected : ''}>بكالوريوس</li>

            <li onClick={() => setType('master')} className={type === 'master' ? cls.selected : ''}>مجاستير</li>

            <li onClick={() => setType('phd')} className={type === 'phd' ? cls.selected : ''}>دكتوراه</li> */}

          </ul>

        </div>

        {type && type.programs &&

          <div className={cls.spec}>

            <div className='row'>

              {type.programs.map((singleData, idx) => (

                <div key={idx} className='col-lg-6'>

                  <UniversityAccordion data={singleData} />

                </div>

              ))}

            </div>

          </div>
        
        }

      </div>

    </div>
  )
}

export default UniversityDetails;