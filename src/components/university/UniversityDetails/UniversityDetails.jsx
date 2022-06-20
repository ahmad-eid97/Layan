import { useState } from 'react';

import cls from './universityDetails.module.scss';
import UniversityAccordion from './../../UIs/UniversityAccordion/UniversityAccordion';

const data =[
  {
    label: 'العلاج الطبيعي والتأهيل',
    data: {
      lang: 'العربية',
      education: '3 سنوات',
      afterPrice: '200 جنية',
      beforePrice: '300 جنية',
      cash: '2990 جنية',
    }
  },
  {
    label: 'علم السمعيات',
    data: {
      lang: 'العربية',
      education: '3 سنوات',
      afterPrice: '200 جنية',
      beforePrice: '300 جنية',
      cash: '2990 جنية',
    }
  },
  {
    label: 'تقنيات التطوير الطبي',
    data: {
      lang: 'العربية',
      education: '3 سنوات',
      afterPrice: '200 جنية',
      beforePrice: '300 جنية',
      cash: '2990 جنية',
    }
  },
  {
    label: 'تقنيات المختبرات الطبية',
    data: {
      lang: 'العربية',
      education: '3 سنوات',
      afterPrice: '200 جنية',
      beforePrice: '300 جنية',
      cash: '2990 جنية',
    }
  },
  {
    label: 'العلاج الإشعاعي',
    data: {
      lang: 'العربية',
      education: '3 سنوات',
      afterPrice: '200 جنية',
      beforePrice: '300 جنية',
      cash: '2990 جنية',
    }
  },
  {
    label: 'خدمة غرف العمليات',
    data: {
      lang: 'العربية',
      education: '3 سنوات',
      afterPrice: '200 جنية',
      beforePrice: '300 جنية',
      cash: '2990 جنية',
    }
  },
  {
    label: 'الوثائق الطبية والسكرتاريه',
    data: {
      lang: 'العربية',
      education: '3 سنوات',
      afterPrice: '200 جنية',
      beforePrice: '300 جنية',
      cash: '2990 جنية',
    }
  },
  {
    label: 'الإسعافات الأولية والطوارئ',
    data: {
      lang: 'العربية',
      education: '3 سنوات',
      afterPrice: '200 جنية',
      beforePrice: '300 جنية',
      cash: '2990 جنية',
    }
  },
]

const UniversityDetails = () => {
  // COMPONENT HOOKS
  const [type, setType] = useState('inistitute')

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

            <li onClick={() => setType('inistitute')} className={type === 'inistitute' ? cls.selected : ''}>معاهد</li>

            <li onClick={() => setType('ba')} className={type === 'ba' ? cls.selected : ''}>بكالوريوس</li>

            <li onClick={() => setType('master')} className={type === 'master' ? cls.selected : ''}>مجاستير</li>

            <li onClick={() => setType('phd')} className={type === 'phd' ? cls.selected : ''}>دكتوراه</li>

          </ul>

        </div>

        {type === 'inistitute' && 

          <div className={cls.spec}>

            <div className='row'>

              {data.map((singleData, idx) => (

                <div key={idx} className='col-lg-6'>

                  <UniversityAccordion data={singleData} />

                </div>

              ))}

            </div>

          </div>
        
        }

        {type === 'ba' && 

          <div className={cls.spec}>

            <div className='row'>

              {data.map((singleData, idx) => (

                <div key={idx} className='col-lg-6'>

                  <UniversityAccordion data={singleData} />

                </div>

              ))}

            </div>

          </div>
        
        }

        {type === 'master' && 

          <div className={cls.spec}>

            <div className='row'>

              {data.map((singleData, idx) => (

                <div key={idx} className='col-lg-6'>

                  <UniversityAccordion data={singleData} />

                </div>

              ))}

            </div>

          </div>
        
        }

        {type === 'phd' && 

          <div className={cls.spec}>

            <div className='row'>

              {data.map((singleData, idx) => (

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