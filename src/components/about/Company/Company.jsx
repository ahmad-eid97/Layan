import ProgressBar from '../../UIs/ProgressBar/ProgressBar';

import { useTranslation } from 'react-i18next';

import cls from './company.module.scss'

const Company = () => {
  // COMPONENT HOOK
  const { t } = useTranslation('common')

  return (
    <div className={cls.company}>

      <div className='container'>

        <div className={`${cls.row} row align-items-center`}>

        <div className='col-lg-6'>

          <div className={cls.text}>

            <span>{t('about.about')}</span>

            <h2>{t('about.doing')}</h2>

            <p>{t('about.text')}</p>

            <h4>{t('about.have')}</h4>

            <ProgressBar label={t('about.analytics')} percentage="95" />

            <ProgressBar label={t('about.solutions')} percentage="60" />

          </div>

        </div>

        <div className='col-lg-6'>

          <div className={cls.image}>

            <div className="blob"></div>

            <img src="/assets/images/man.png" alt="contactImage" />

          </div>

        </div>

        </div>

      </div>

    </div>
  )
}

export default Company