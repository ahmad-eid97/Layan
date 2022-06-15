import { useTranslation } from 'react-i18next';

import cls from './progressBar.module.scss';

const ProgressBar = ({ label, percentage }) => {
  // COMPONENT HOOKS
  const { i18n } = useTranslation();

  return (
    <div className={cls.progressBar}>

      <div className={cls.data}>

        <span 
          className={`${cls.percentage} ${cls[i18n.language]}`} 
          style={i18n.language === 'ar' ? { right: `calc(${percentage}% - 20px)`, left: 'unset' } : 
          { left: `calc(${percentage}% - 20px)`, right: 'unset' }}
          >

          %{ percentage }

          <span className={cls.drop}></span>

        </span>

        <span className={cls.label}>{ label }</span>

      </div>

      <div className={cls.progress}>

        <span className={cls[i18n.language]} style={{ width: `${percentage}%` }}></span>

      </div>

    </div>
  )
}

export default ProgressBar