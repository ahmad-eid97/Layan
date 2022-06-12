import LangSwitch from '../Switches/LangSwitch/LangSwitch';

import cls from './navbar.module.scss';

const Navbar = () => {
  return (
    <div className={cls.navbar}>

      <div className={cls.topNav}>

        <div className='container'>
          
          <div>

            <LangSwitch />

            <ul>
              <li>تتبع الطلب</li>
              <li>طلب التسجيل</li>
              <li>كن وكيلنا</li>
            </ul>

          </div>

          <ul>
            <li>من نحن</li>
            <li>تواصل معنا</li>
            <li>الاسئله الشائعة</li>
          </ul>

        </div>

      </div>

      <div className={cls.navLinks}>

        <div className='container'>
          
          <div>
            <button>سجل الاَن</button>
            <div className={cls.icons}>
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-youtube"></i>
            </div>
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
          </ul>

          <img src="/assets/images/logo.png" alt="" />

        </div>

      </div>

    </div>
  )
}

export default Navbar