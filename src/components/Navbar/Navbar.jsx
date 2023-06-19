import { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import MobSidebar from "./MobSidebar/MobSidebar";

import { useSelector } from "react-redux";

import Cookies from "universal-cookie";

import LangSwitch from "../Switches/LangSwitch/LangSwitch";

import { useTranslation } from "react-i18next";

import axios from "../../Utils/axios";

import cls from "./navbar.module.scss";

const cookie = new Cookies();

const Navbar = () => {
  // COMPONENT HOOKS
  const [mobSidebar, setMobSidebar] = useState(false);
  const [menuLinks, setMenuLinks] = useState([]);
  const user = useSelector(({ user }) => user.user);
  const { t, i18n } = useTranslation("nav");
  const navigate = useNavigate();

  const fetchTopMenu = async () => {
    const response = await axios.get(
      `https://layanedu.com/dash/api/v1/menu/1/${i18n.language}`
    );
    setMenuLinks(response.data.links);
  };

  useEffect(() => {
    fetchTopMenu();
  }, []);

  return (
    <div className={cls.navbar}>
      <div className={cls.topNav}>
        <div className="container">
          <ul>
            <li>
              <Link to="/about-us"> {t("nav.who")}</Link>
            </li>
            <li>
              <Link to="/contact-us"> {t("nav.contactUs")}</Link>
            </li>
            <li>
              <Link to="/questions"> {t("nav.questions")}</Link>
            </li>
            <li></li>
          </ul>
          <div>
            <ul>
              <li>
                <Link to="/agent"> {t("nav.beAgent")}</Link>
              </li>

              {cookie.get("layanAuth") ? (
                <li>
                  <Link to="/profile"> {t("nav.profile")}</Link>
                </li>
              ) : (
                <li>
                  <Link to="/login"> {t("nav.login")}</Link>
                </li>
              )}
            </ul>
            <LangSwitch />
          </div>
        </div>
      </div>
      <div className={cls.navLinks}>
        <div className="container">
          <div className={cls.logo}>
            <Link to="/">
              <img src="/assets/images/logo.png" alt="logo" loading="lazy" />
            </Link>
          </div>
          <ul>
            {menuLinks.map((link, idx) => (
              <li key={idx}>
                <NavLink to={`/${link.href}`}> {link.title}</NavLink>
              </li>
            ))}
          </ul>
          <div>
            <div className={cls.icons}>
              <a
                target="blank"
                href="https://www.facebook.com/%D9%84%D9%8A%D8%A7%D9%86-%D9%84%D9%84%D8%AE%D8%AF%D9%85%D8%A7%D8%AA-%D8%A7%D9%84%D8%AC%D8%A7%D9%85%D8%B9%D9%8A%D8%A9-%D9%81%D9%84%D8%B3%D8%B7%D9%8A%D9%86-220896948736960/"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a target="blank" href="https://twitter.com/LayanEducation">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a target="blank" href="https://www.instagram.com/layanpalestine">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                target="blank"
                href="https://youtube.com/channel/UCRhUpd_l49FxB2z5jYb0GhA"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>

            {cookie.get("layanAuth") ? (
              <button onClick={() => navigate("/education-info")}>
                {t("nav.chooseProgram")}
              </button>
            ) : (
              <button onClick={() => navigate("/register")}>
                {t("nav.registerNow")}
              </button>
            )}
          </div>
        </div>
      </div>
      <div className={cls.mobileNav}>
        <div className="container">
          {cookie.get("layanAuth") ? (
            <button onClick={() => navigate("/education-info")}>
              {t("nav.chooseProgram")}
            </button>
          ) : (
            <button onClick={() => navigate("/register")}>
              {t("nav.registerNow")}
            </button>
          )}
          <Link to="/">
            <img src="/assets/images/logo.png" alt="logo" loading="lazy" />
          </Link>
          <i
            className="fa-light fa-grid-2"
            onClick={() => setMobSidebar(true)}
          ></i>
        </div>
      </div>
      <MobSidebar
        mobSidebar={mobSidebar}
        setMobSidebar={setMobSidebar}
        menuLinks={menuLinks}
      />
    </div>
  );
};

export default Navbar;
