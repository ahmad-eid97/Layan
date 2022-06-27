import { useEffect } from 'react';

import axios from '../../Utils/axios';

import { useTranslation } from 'react-i18next';

import cls from './applications.module.scss';

const Applications = () => {
  // COMPONENT HOOKS
  const { i18n } = useTranslation();

  // COMPONENT HANDLERS
  const fetchApplications = async () => {
    const response = await axios.get(`/crm/applications?lang=${i18n.language}&limit=30`);
    
    if(!response) return;
  }

  useEffect(() => {
    fetchApplications()
  }, [])

  return (
    <div className={cls.applications}>

      <div className='container'>
        
        <h3 className='label'>

          <img src="/assets/images/blog.png" alt="titleImage" />

          <p>طلبات التقديم</p>
          
        </h3>

      </div>

    </div>
  )
}

export default Applications