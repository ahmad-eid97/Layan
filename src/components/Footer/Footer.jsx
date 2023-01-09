import { useEffect, useState } from "react";

import axios from "../../Utils/axios";

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import cls from "./footer.module.scss";

const Footer = () => {
  // COMPONENT HOOKS
  const [universities, setUniversities] = useState();
  const { t, i18n } = useTranslation("nav");

  const fetchAllUniversities = async () => {
    const response = await axios.get(
      `/crm/universities?lang=${i18n.language}&limit=20`
    );

    if (!response) return;

    let randomUniversities = [];

    for (var i = 0; i < response.data.data.universities.length; i++) {
      let randomNum = Math.floor(Math.random() * 20);

      if (
        randomUniversities.find(
          (uni) => uni.id === response.data.data.universities[randomNum].id
        )
      ) {
        i--;
        continue;
      }
      randomUniversities.push(response.data.data.universities[randomNum]);
    }

    setUniversities(randomUniversities);
  };

  useEffect(() => {
    fetchAllUniversities();
  }, []);

  return (
    <footer
      className={`${cls.footer} text-center text-lg-start bg-light text-muted`}
    >
      <section
        className={`${cls.top} d-flex justify-content-center justify-content-lg-between p-4 border-bottom`}
      >
        <div className="me-5 d-none d-lg-block">
          <span>{t("footer.contact")}</span>
        </div>

        <div className={cls.icons}>
          <a
            target="blank"
            href="https://www.facebook.com/%D9%84%D9%8A%D8%A7%D9%86-%D9%84%D9%84%D8%AE%D8%AF%D9%85%D8%A7%D8%AA-%D8%A7%D9%84%D8%AC%D8%A7%D9%85%D8%B9%D9%8A%D8%A9-%D9%81%D9%84%D8%B3%D8%B7%D9%8A%D9%86-220896948736960/"
            className="me-4 text-reset"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            target="blank"
            href="https://twitter.com/LayanEducation"
            className="me-4 text-reset"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            target="blank"
            href="https://www.instagram.com/layanpalestine"
            className="me-4 text-reset"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            target="blank"
            href="https://youtube.com/channel/UCRhUpd_l49FxB2z5jYb0GhA"
            className="me-4 text-reset"
          >
            <i className="fa-brands fa-youtube"></i>
          </a>
        </div>
      </section>

      <section className={cls.logoSection}>
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <img src="/assets/images/logo.png" alt="logoImage" />
              </h6>
              <p className={cls.text}>{t("footer.layan")}</p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                {t("footer.ourUniversities")}
              </h6>
              {universities &&
                universities.length &&
                universities.slice(0, 3).map((uni) => (
                  <p key={uni.id}>
                    <Link to={`/university/${uni.id}`}>
                      <a href="#!" className="text-reset">
                        {uni.title}
                      </a>
                    </Link>
                  </p>
                ))}
              <Link to={`/all-universities`} style={{ color: "red" }}>
                <a href="#!" className="text-reset">
                  {t("footer.more")}
                </a>
              </Link>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                {t("footer.know")}
              </h6>
              <p>
                <Link to="/education">
                  <a href="#!" className="text-reset">
                    {t("footer.steps")}
                  </a>
                </Link>
              </p>
              <p>
                <Link to="/agent">
                  <a href="#!" className="text-reset">
                    {t("footer.agent")}
                  </a>
                </Link>
              </p>
              <p>
                <Link to="/profile">
                  <a href="#!" className="text-reset">
                    {t("footer.track")}
                  </a>
                </Link>
              </p>
              <p>
                <Link to="/contact-us">
                  <a href="#!" className="text-reset">
                    {t("footer.contacting")}
                  </a>
                </Link>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                {t("footer.apps")}
              </h6>

              <div className={cls.app}>
                App Store
                <i className="fa-brands fa-apple"></i>
              </div>

              <div className={cls.app}>
                Google Play
                <i className="fa-brands fa-google-play"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        className={`${cls.bottom} text-center p-4`}
        style={{ backgroundColor: "#363636" }}
      >
        {t("footer.right")}© 2022
      </div>
    </footer>
  );
};

export default Footer;
