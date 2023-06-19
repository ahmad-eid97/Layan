import { useNavigate } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import cls from './programDetailsUniversities.module.scss';

const ProgramDetailsUniversities = ({ program }) => {
  // COMPONENT HOOKS
  const navigate = useNavigate();
  const { t } = useTranslation('common');

  return (
    <div className={cls.programDetailsUniversities}>
      <div className='container'>
        <h2>{t('university.universities')}</h2>
        {program && program.universities && program.universities.map((university, idx) => (
          <div className='row align-items-center justify-content-center' key={idx}>
            <div className='col-lg-3'>
              <div className={cls.block}>
                <p>{t('university.university')}</p>
                <span>{university.title}</span>
              </div>
            </div>
            <div className='col-lg-2'>
              <div className={cls.block}>
                <p>{t('university.price')}</p>
                <span>{university.cost}</span>
              </div>
            </div>
            <div className='col-lg-3'>
              <div className={cls.block}>
                <p>{t('university.discount')}</p>
                <span>{university.sale}</span>
              </div>
            </div>
            <div className='col-lg-3'>
              <div className={cls.block}>
                <p>{t('university.register')}</p>
                <span><button onClick={() => navigate(`/register`)}>{t('university.registerNow')}</button></span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProgramDetailsUniversities