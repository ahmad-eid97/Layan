import { Details, BlogSpecs } from '../../components';

import { useTranslation } from 'react-i18next';

import cls from './blogDetails.module.scss';

const BlogDetails = () => {
  // COMPONENT HOOKS
  const { i18n } = useTranslation();

  return (
    <div className={cls.blogDetails}>
      
      <div className='container'>

        <div className='row'>

          <div className='col-lg-8'>

            <Details />

          </div>

          <div className='col-lg-4'>

            <BlogSpecs />

          </div>

        </div>

      </div>
      
    </div>
  )
}

export default BlogDetails;