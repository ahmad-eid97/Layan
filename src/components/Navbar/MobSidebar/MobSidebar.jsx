import { NavLink } from "react-router-dom";

import LangSwitch from "../../Switches/LangSwitch/LangSwitch";

import { useTranslation } from "react-i18next";

import Cookies from "universal-cookie";

import cls from "./MobSidebar.module.scss";

const cookie = new Cookies();

const MobSidebar = ({ mobSidebar, setMobSidebar, menuLinks }) => {
  // COMPONENT HOOKS
  const { t, i18n } = useTranslation("nav");

  // COMPONENT HANDLERS
  const close = () => {
    setMobSidebar(false);
  };

  return (
    <div className={`${cls.wrapper} ${mobSidebar ? cls.show : cls.hide}`}>
      <div className={cls.dropLayer} onClick={() => setMobSidebar(false)}></div>

      <div
        className={`${cls.mobSidebar} ${cls[i18n.language]}`}
        sx={{ bgcolor: "background.secondary" }}
      >
        <div
          className={cls.mobSidebar__mobileSwitch}
          sx={{ bgcolor: "background.default" }}
        >
          <LangSwitch />
          <i
            className="fa-light fa-xmark"
            onClick={() => setMobSidebar(false)}
          ></i>
        </div>

        <ul>
          {menuLinks.map((link) => (
            <li onClick={close}>
              <NavLink to={`/${link.href}`}> {link.title}</NavLink>
            </li>
          ))}

          {/* <li onClick={close}><NavLink to="/education"> {t('nav.studySteps')}</NavLink></li>
          <li onClick={close}><NavLink to="/all-universities"> {t('nav.universities')}</NavLink></li>
          <li onClick={close}><NavLink to="/programs"> {t('nav.programs')}</NavLink></li>
          <li onClick={close}><NavLink to="/services"> {t('nav.services')}</NavLink></li>
          <li onClick={close}><NavLink to="/news"> {t('nav.news')}</NavLink></li>
          <li onClick={close}><NavLink to="/blogs"> {t('nav.blogs')}</NavLink></li>

          <li onClick={close}><NavLink to="/about-us"> {t('nav.who')}</NavLink></li>
          <li onClick={close}><NavLink to="/contact-us"> {t('nav.contactUs')}</NavLink></li>
          <li onClick={close}><NavLink to="/questions"> {t('nav.questions')}</NavLink></li>
          <li onClick={close}><NavLink to="/agent"> {t('nav.beAgent')}</NavLink></li> */}

          {cookie.get("layanAuth") ? (
            <li onClick={close}>
              <NavLink to="/profile"> {t("nav.profile")}</NavLink>
            </li>
          ) : (
            <li onClick={close}>
              <NavLink to="/login"> {t("nav.login")}</NavLink>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default MobSidebar;
