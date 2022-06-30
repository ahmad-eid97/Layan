import { NavLink } from 'react-router-dom';

import LangSwitch from '../../Switches/LangSwitch/LangSwitch';

import { useTranslation } from 'react-i18next';

import cls from './MobSidebar.module.scss'

const MobSidebar = ({ mobSidebar, setMobSidebar }) => {
  // COMPONENT HOOKS
  const { i18n } = useTranslation();

  // COMPONENT HANDLERS
  const close = () => {
    setMobSidebar(false);
  }

  return (
    <div className={`${cls.wrapper} ${mobSidebar ? cls.show : cls.hide}`}>

      <div className={cls.dropLayer} onClick={() => setMobSidebar(false)}></div>

      <div className={`${cls.mobSidebar} ${cls[i18n.language]}`} sx={{ bgcolor: 'background.secondary' }}>

        <div className={cls.mobSidebar__mobileSwitch} sx={{bgcolor: 'background.default'}}>
          <LangSwitch />
          <i className="fa-light fa-xmark" onClick={() => setMobSidebar(false)}></i>
        </div>

        <ul>
          <li onClick={close}><NavLink to="/education"> خطوات الدراسة</NavLink></li>
          <li onClick={close}><NavLink to="/all-universities"> الجامعات</NavLink></li>
          <li onClick={close}><NavLink to="/services"> خدماتنا</NavLink></li>
          <li onClick={close}><NavLink to="/news"> الأخبار</NavLink></li>
          <li onClick={close}><NavLink to="/blogs"> المقالات</NavLink></li>
          {/* <li>الدورات</li>
          <li>السكنات</li>
          <li>ميديا</li> */}
          <li>تتبع الطلب</li>
          <li onClick={close}><NavLink to="/register"> طلب التسجيل</NavLink></li>
          <li onClick={close}><NavLink to="/agent"> كن وكيلنا</NavLink></li>
          <li onClick={close}><NavLink to="/about-us"> من نحن</NavLink></li>
          <li onClick={close}><NavLink to="/contact-us"> تواصل معنا</NavLink></li>
          <li onClick={close}><NavLink to="/questions"> الأسئلة الشائعة</NavLink></li>
        </ul>

      </div>

    </div>
  )
}

export default MobSidebar;