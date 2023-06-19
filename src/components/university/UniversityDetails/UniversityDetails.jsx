import { useEffect, useState } from 'react';

import UniversityAccordion from './../../UIs/UniversityAccordion/UniversityAccordion';

import { useTranslation } from 'react-i18next';

import cls from './universityDetails.module.scss';

const UniversityDetails = ({ degrees }) => {
  // COMPONENT HOOKS
  const { t } = useTranslation('common');
  const [type, setType] = useState({});

  useEffect(() => {
    setType(degrees[0])
  }, [degrees])

  return (
    <div className={cls.universityDetails}>
      <div className='container'>
        <h3 className='label'>
          <img src="/assets/images/cap.png" alt="titleImage" loading="lazy" />
          <p>{t('university.universityDetails')}</p>
        </h3>
        <div className={cls.specs}>
          <h3>{t('university.specialities')}</h3>
          <ul>
            {degrees && degrees.map((degree, idx) => (
              <li key={idx} onClick={() => setType(degree)} className={type?.name === degree.name ? cls.selected : ''}>{degree.name}</li>
            ))}
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