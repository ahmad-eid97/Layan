import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { NewsDetails as NewsDetailsComponent, NewsSpecs, Loader } from '../../components';

import axios from '../../Utils/axios';

import { useTranslation } from 'react-i18next';

import cls from './newsDetails.module.scss';

const NewsDetails = () => {
  // COMPONENT HOOKS
  const [newsDetails, setNewsDetails] = useState();
  const [loading, setLoading] = useState(false);
  const { newsId } = useParams();
  const { i18n } = useTranslation();

  const fetchNewsDetails = async () => {
    setLoading(true)
    const response = await axios.get(`/topic/${newsId}/${i18n.language}`).catch(err => console.log(err));
    if (!response || !response.data) return;
    setNewsDetails(response.data.topic[0]);
    setLoading(false)
  }

  useEffect(() => {
    fetchNewsDetails()
  }, [newsId])

  return (
    <div className={cls.newsDetails}>
      {loading && <Loader />}
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8'>
            <NewsDetailsComponent newsDetails={newsDetails} />
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