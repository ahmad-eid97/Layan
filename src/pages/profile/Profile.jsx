import { useState } from 'react';
import { PersonalInfoSection, ApplicationsSection } from '../../components';

import cls from './profile.module.scss';

const Profile = () => {
  // COMPONENT HOOKS
  const [currentTab, setCurrentTab] = useState('personal')

  return (
    <div className={cls.profile}>

      <div className='container'>

        <div className={cls.nav}>

          <span onClick={() => setCurrentTab('personal')} className={currentTab === 'personal' ? cls.active : ''}>المعلومات الشخصية</span>

          <span onClick={() => setCurrentTab('applications')} className={currentTab === 'applications' ? cls.active : ''}>الطلبات</span>

        </div>

        {currentTab === 'personal' && <PersonalInfoSection />}

        {currentTab === 'applications' && <ApplicationsSection />}

      </div>

    </div>
  )
}

export default Profile;