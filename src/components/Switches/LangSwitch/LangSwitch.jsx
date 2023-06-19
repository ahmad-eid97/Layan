import { useEffect } from "react";

import { useTranslation } from "react-i18next";

import Cookies from "universal-cookie";

import cls from "./langSwitch.module.scss";

const cookie = new Cookies();

const LangSwitch = () => {
  // COMPONENT HOOKS
  const { i18n } = useTranslation('nav')

  useEffect(() => {
    if (cookie.get('layaneduLang')) {
      i18n.changeLanguage(cookie.get('layaneduLang'));
    }
  }, [i18n])

  const switchLang = (lang) => {
    window.location.reload()
    cookie.set('layaneduLang', lang)
  };

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
