import { NewsDetails as NewsDetailsComponent, NewsSpecs } from '../../components';

import { useTranslation } from 'react-i18next';

import cls from './newsDetails.module.scss';

const NewsDetails = () => {
  // COMPONENT HOOKS
  const { i18n } = useTranslation();

  return (
    <div className={cls.newsDetails}>
      
      <div className='container'>

        <div className='row'>

          <div className='col-lg-8'>

            <NewsDetailsComponent />

          </div>

          <div className='col-lg-4'>

            <NewsSpecs />

          </div>

        </div>

      </div>
      
    </div>
  )
}

export default NewsDetails;