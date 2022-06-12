import { useEffect } from "react";

import { useTranslation } from "react-i18next";

import Cookies from "universal-cookie";

import cls from "./langSwitch.module.scss";

const cookie = new Cookies();

const LangSwitch = () => {
  // COMPONENT HOOKS
  const { t: translate, i18n } = useTranslation('nav')

  useEffect(() => {
    if (cookie.get('layaneduLang')) {
      i18n.changeLanguage(cookie.get('layaneduLang'));
    }
  }, [])

  const switchLang = (lang) => {

    cookie.set('layaneduLang', lang)
    
    i18n.changeLanguage(lang)
    
  };

  // LANG DROPDOWN DATA
  // const menu = [
  //   {
  //     option: `${translate('nav.english')}`,
  //     img: "/assets/imgs/navbar/america.png",
  //     method: switchLang,
  //     param: 'en'
  //   },
  //   {
  //     option: `${translate('nav.arabic')}`,
  //     img: "/assets/imgs/navbar/suadi.png",
  //     method: switchLang,
  //     param: 'ar'
  //   },
  // ];

  return (
    <div className={cls.lang}>
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          {cookie.get('layaneduLang') === 'en' ? 'English' : 'العربية'}
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li onClick={() => switchLang('en')}>English</li>
          <li onClick={() => switchLang('ar')}>العربية</li>
        </ul>
      </div>
    </div>
  );
};

export default LangSwitch;
