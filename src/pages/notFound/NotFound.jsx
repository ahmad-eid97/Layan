import { useTranslation } from 'react-i18next';

import cls from './notFound.module.scss';

const NotFound = () => {
  // COMPONENT HOOKS
  const { t } = useTranslation('common');

  return (
    <div className={cls.notFound}>
      <img src="/assets/images/warning.png" alt="notFound" loading="lazy" />
      <h5>{t('notFound.notFound')}</h5>
    </div>
  )
}

export default NotFound