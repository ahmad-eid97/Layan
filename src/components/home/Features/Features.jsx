import { useTranslation } from 'react-i18next';

import cls from './features.module.scss';

const Features = () => {
  // COMPONENT HOOKS
  const { t } = useTranslation('common');

  return (
    <div className={cls.features}>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-6'>
            <div className={cls.text}>
              <span>{t('home.why')}</span>
              <h1>{t('home.features')}</h1>
              <p>{t('home.about')}</p>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='row'>
              <div className='col-md-6'>
                <div className={cls.part}>
                  <img src="/assets/images/support.png" alt="image" loading="lazy" />
                  <h6>{t('home.support')}</h6>
                </div>
              </div>
              <div className='col-md-6'>
                <div className={cls.part}>
                  <img src="/assets/images/pay.png" alt="pay" loading="lazy" />
                  <h6>{t('home.pay')}</h6>
                </div>
              </div>
              <div className='col-md-6'>
                <div className={cls.part}>
                  <img src="/assets/images/report.png" alt="report" loading="lazy" />
                  <h6>{t('home.reports')}</h6>
                </div>
              </div>
              <div className='col-md-6'>
                <div className={cls.part}>
                  <img src="/assets/images/clock.png" alt="clock" loading="lazy" />
                  <h6>{t('home.response')}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Features