import { useTranslation } from 'react-i18next';

import { format } from 'date-fns'

import cls from './details.module.scss';

const Details = ({ newsDetails }) => {
  // COMPONENT HOOKS
  const { t, i18n } = useTranslation('common');

  return (
    <div className={cls.details}>
      <div className={`${cls.news}`}>
        <div className={`${cls.badge} ${cls[i18n.language]}`}>
          {newsDetails &&
            <>
              <span>{format(new Date(newsDetails?.date), 'dd')}</span>
              <span>{format(new Date(newsDetails?.date), 'MMM')}</span>
            </>
          }
        </div>
        <img src={newsDetails?.photo_file} alt="newsImage" className={cls.newsImage} loading="lazy" />
        <div className={cls.info}>
          <span className={cls[i18n.language]}><i className="fa-regular fa-user"></i> {t('newsDetails.addedBy')} {newsDetails?.user.name} </span>
          <span className={cls[i18n.language]}><i className="fa-regular fa-message-dots"></i> {newsDetails?.comments_count} {t('newsDetails.comments')}</span>
          <h4>{newsDetails?.title}</h4>
          <p dangerouslySetInnerHTML={{ __html: newsDetails?.details }}></p>
        </div>
      </div>
    </div>
  )
}

export default Details