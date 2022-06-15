import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import MobSidebar from './MobSidebar/MobSidebar';

import LangSwitch from '../Switches/LangSwitch/LangSwitch';

import cls from './navbar.module.scss';

const Navbar = () => {
  // COMPONENT HOOKS
  const [mobSidebar, setMobSidebar] = useState(false);

  return (
    <div className={cls.navbar}>

      <div className={cls.topNav}>

        <div className='container'>

          <ul>
            <li><Link to="/about-us"> من نحن</Link></li>
            <li><Link to="/contact-us"> تواصل معنا</Link></li>
            <li><Link to="/questions"> الأسئلة الشائعة</Link></li>
            <li></li>
          </ul>
          
          <div>

            <ul>
              <li>تتبع الطلب</li>
              <li>طلب التسجيل</li>
              <li>كن وكيلنا</li>
            </ul>

            <LangSwitch />

          </div>

        </div>

      </div>

      <div className={cls.navLinks}>

        <div className='container'>

          <div className={cls.logo}>

            <Link to="/">

              <img src="/assets/images/logo.png" alt="logo" />

            </Link>

          </div>

          <ul>
            <li>خطوات الدراسة</li>
            <li>الجامعات</li>
            <li><NavLink to="/services"> خدماتنا</NavLink></li>
            <li><NavLink to="/news"> الأخبار</NavLink></li>
            <li>المقالات</li>
            <li>الدورات</li>
            <li>السكنات</li>
            <li>ميديا</li>
          </ul>
          
          <div>

            <div className={cls.icons}>
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-youtube"></i>
            </div>

            <button>سجل الاَن</button>
            
          </div>

        </div>

      </div>

      <div className={cls.mobileNav}>
        <div className='container'>

          <button>سجل الاَن</button>

          <Link to="/">

            <img src="/assets/images/logo.png" alt="logo" />

          </Link>

          <i className="fa-light fa-grid-2" onClick={() => setMobSidebar(true)}></i>

        </div>
      </div>

      <MobSidebar mobSidebar={mobSidebar} setMobSidebar={setMobSidebar} />

    </div>
  )
}

export default Navbar