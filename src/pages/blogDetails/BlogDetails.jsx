import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Details, BlogSpecs, Loader } from '../../components';

import { useTranslation } from 'react-i18next';

import axios from '../../Utils/axios';

import cls from './blogDetails.module.scss';

const BlogDetails = () => {
  // COMPONENT HOOKS
  const [blogDetails, setBlogDetails] = useState();
  const [loading, setLoading] = useState(false);
  const { blogId } = useParams();
  const { i18n } = useTranslation();

  const fetchBlogDetails = async () => {
    setLoading(true)
    const response = await axios.get(`/topic/${blogId}/${i18n.language}`).catch(err => console.log(err));
    if (!response || !response.data) return;
    setBlogDetails(response.data.topic[0]);
    setLoading(false)
  }

  useEffect(() => {
    fetchBlogDetails();
  }, [blogId])

  return (
    <div className={cls.blogDetails}>
      {loading && <Loader />}
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8'>
            <Details blogDetails={blogDetails} blogId={blogId} fetchBlogDetails={fetchBlogDetails} />
          </div>
          <div className='col-lg-4'>
            <BlogSpecs blogDetails={blogDetails} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogDetails;