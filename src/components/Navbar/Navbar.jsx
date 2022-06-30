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
              <li><Link to="/register"> طلب التسجيل</Link></li>
              <li><Link to="/agent"> كن وكيلنا</Link></li>
              <li><Link to="/login"> تسجيل الدخول</Link></li>
              <li><Link to="/profile"> الصفحة الشحصية</Link></li>
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
            <li><NavLink to="/education"> خطوات الدراسة</NavLink></li>
            <li><NavLink to="/all-universities"> الجامعات</NavLink></li>
            <li><NavLink to="/programs"> البرامج</NavLink></li>
            <li><NavLink to="/services"> خدماتنا</NavLink></li>
            <li><NavLink to="/news"> الأخبار</NavLink></li>
            <li><NavLink to="/blogs"> المقالات</NavLink></li>
            <li>الدورات</li>
            <li>السكنات</li>
            {/* <li>ميديا</li> */}
          </ul>
          
          <div>

            <div className={cls.icons}>

              <a target="blank" href="https://www.facebook.com/%D9%84%D9%8A%D8%A7%D9%86-%D9%84%D9%84%D8%AE%D8%AF%D9%85%D8%A7%D8%AA-%D8%A7%D9%84%D8%AC%D8%A7%D9%85%D8%B9%D9%8A%D8%A9-%D9%81%D9%84%D8%B3%D8%B7%D9%8A%D9%86-220896948736960/"><i className="fa-brands fa-facebook-f"></i></a>

              <a target="blank" href="https://twitter.com/LayanEducation"><i className="fa-brands fa-twitter"></i></a>

              <a target="blank" href="https://www.instagram.com/layanpalestine"><i className="fa-brands fa-instagram"></i></a>

              <a target="blank" href="https://youtube.com/channel/UCRhUpd_l49FxB2z5jYb0GhA"><i className="fa-brands fa-youtube"></i></a>

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