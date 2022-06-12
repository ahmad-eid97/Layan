import LangSwitch from '../../Switches/LangSwitch/LangSwitch';

import { useTranslation } from 'react-i18next';

import cls from './MobSidebar.module.scss'

const MobSidebar = ({ mobSidebar, setMobSidebar }) => {
  // COMPONENT HOOKS
  const { i18n } = useTranslation()

  return (
    <div className={`${cls.wrapper} ${mobSidebar ? cls.show : cls.hide}`}>

      <div className={cls.dropLayer} onClick={() => setMobSidebar(false)}></div>

      <div className={`${cls.mobSidebar} ${cls[i18n.language]}`} sx={{ bgcolor: 'background.secondary' }}>

        <div className={cls.mobSidebar__mobileSwitch} sx={{bgcolor: 'background.default'}}>
          <LangSwitch />
          <i className="fa-light fa-xmark" onClick={() => setMobSidebar(false)}></i>
        </div>

        <ul>
          <li>خطوات الدراسة</li>
          <li>الجامعات</li>
          <li>خدماتنا</li>
          <li>الاخبار</li>
          <li>المقالات</li>
          <li>الدورات</li>
          <li>السكنات</li>
          <li>ميديا</li>
          <li>تتبع الطلب</li>
          <li>طلب التسجيل</li>
          <li>كن وكيلنا</li>
          <li>من نحن</li>
          <li>تواصل معنا</li>
          <li>الاسئله الشائعة</li>
        </ul>

      </div>

    </div>
  )
}

export default MobSidebar;