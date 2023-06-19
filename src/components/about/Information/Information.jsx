import { useTranslation } from 'react-i18next';

import cls from './information.module.scss';

const Information = () => {
  // COMPONENT HOOKS
  const { t, i18n } = useTranslation('common');

  return (
    <div className={cls.information}>
      <div className='container'>
        <div className='row'>
          <div className="col-xs-12">
            <div className={`${cls.section} ${cls[i18n.language]}`}>
              <h3><i className="fa-light fa-user-cowboy"></i> <span>{t('about.who')}</span></h3>
              <p>{t('about.text1')}</p>
            </div>
          </div>
          <div className="col-xs-12 col-lg-6">
            <div className={`${cls.section} ${cls[i18n.language]}`}>
              <h3><i className="fa-light fa-glasses"></i> <span>{t('about.vision')}</span></h3>
              <p>{t('about.text2')}</p>
            </div>
          </div>
          <div className="col-xs-12 col-lg-6">
            <div className={`${cls.section} ${cls[i18n.language]}`}>
              <h3><i className="fa-light fa-briefcase"></i> <span>{t('about.mission')}</span></h3>
              <p>{t('about.text3')}</p>
            </div>
          </div>
          <div className="col-xs-12">
            <div className={`${cls.section} ${cls[i18n.language]}`}>
              <h3><i className="fa-light fa-book-open-cover"></i> <span>{t('about.message')}</span></h3>
              <p>{t('about.text4')}</p>
            </div>
          </div>
        </div>
        <div className={`${cls.features} row`}>
          <h3 className={`${cls.label} label`}>
            <img src="/assets/images/cap.png" alt="titleImage" loading="lazy" />
            <p>{t('about.platform')}</p>
          </h3>
          <div className='col-sm-6 col-md-3 col-lg-3'>
            <div>
              <i className="fa-light fa-comment-smile"></i>
              <span>+15,000</span>
              <p>{t('about.students')}</p>
            </div>
          </div>
          <div className='col-sm-6 col-md-3 col-lg-3'>
            <div>
              <i className="fa-light fa-city"></i>
              <span>+15,000</span>
              <p>{t('about.university')}</p>
            </div>
          </div>
          <div className='col-sm-6 col-md-3 col-lg-3'>
            <div>
              <i className="fa-light fa-graduation-cap"></i>
              <span>+15,000</span>
              <p>{t('about.uni')}</p>
            </div>
          </div>
          <div className='col-sm-6 col-md-3 col-lg-3'>
            <div>
              <i className="fa-light fa-users-medical"></i>
              <span>+15,000</span>
              <p>{t('about.team')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Information