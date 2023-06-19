import { useTranslation } from 'react-i18next';

import cls from './universityInfo.module.scss';

const UniversityInfo = ({ university }) => {
  const { t } = useTranslation('common')

  return (
    <div className={cls.universityInfo}>
      <div className='container'>
        <div className={`${cls.analytics} row justify-content-center`}>
          <div className='col-md-6 col-lg-4'>
            <div className={cls.one}>
              <img src="/assets/images/planet2.png" alt="planet" loading="lazy" />
              <div>
                <span>{university.international_ranking}</span>
                <p>{t('university.international')}</p>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-lg-4'>
            <div className={cls.one}>
              <img src="/assets/images/location.png" alt="country" loading="lazy" />
              <div>
                <span>{university.local_ranking}</span>
                <p>{t('university.local')}</p>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-lg-4'>
            <div className={cls.one}>
              <img src="/assets/images/student.png" alt="student" loading="lazy" />
              <div>
                <span>{university.number_students}</span>
                <p>{t('university.student')}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={cls.data}>
          <div dangerouslySetInnerHTML={{ __html: university.bio }}></div>
        </div>
        <div className={cls.info}>
          <div dangerouslySetInnerHTML={{ __html: university.details }}></div>
        </div>
      </div>
    </div>
  )
}

export default UniversityInfo