import { useState } from 'react';
import { PersonalInfoSection, ApplicationsSection } from '../../components';

import { useTranslation } from 'react-i18next';

import cls from './profile.module.scss';

const Profile = () => {
  // COMPONENT HOOKS
  const [currentTab, setCurrentTab] = useState('personal');
  const { t } = useTranslation('common');

  return (
    <div className={cls.profile}>
      <div className='container'>
        <div className={cls.nav}>
          <span onClick={() => setCurrentTab('personal')} className={currentTab === 'personal' ? cls.active : ''}>{t('profile.personal')}</span>
          <span onClick={() => setCurrentTab('applications')} className={currentTab === 'applications' ? cls.active : ''}>{t('profile.applications')}</span>
        </div>
        {currentTab === 'personal' && <PersonalInfoSection />}
        {currentTab === 'applications' && <ApplicationsSection />}
      </div>
    </div>
  )
}

export default Profile;