import cls from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={`${cls.footer} text-center text-lg-start bg-light text-muted`}>
  
      <section
        className={`${cls.top} d-flex justify-content-center justify-content-lg-between p-4 border-bottom`}
      >

        <div className="me-5 d-none d-lg-block">
          <span>تواصل معنا عن طريق منصات التواصل الإجتماعي</span>
        </div>

        <div className={cls.icons}>

          <a target="blank" href="https://www.facebook.com/%D9%84%D9%8A%D8%A7%D9%86-%D9%84%D9%84%D8%AE%D8%AF%D9%85%D8%A7%D8%AA-%D8%A7%D9%84%D8%AC%D8%A7%D9%85%D8%B9%D9%8A%D8%A9-%D9%81%D9%84%D8%B3%D8%B7%D9%8A%D9%86-220896948736960/" className="me-4 text-reset">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a target="blank" href="https://twitter.com/LayanEducation" className="me-4 text-reset">
            <i className="fab fa-twitter"></i>
          </a>
          <a target="blank" href="https://www.instagram.com/layanpalestine" className="me-4 text-reset">
            <i className="fab fa-instagram"></i>
          </a>
          <a target="blank" href="https://youtube.com/channel/UCRhUpd_l49FxB2z5jYb0GhA" className="me-4 text-reset">
            <i className="fa-brands fa-youtube"></i>
          </a>
          {/* <a target="blank" href="/" className="me-4 text-reset">
            <i className="fab fa-linkedin"></i>
          </a>
          <a target="blank" href="/" className="me-4 text-reset">
            <i className="fab fa-github"></i>
          </a> */}

        </div>

      </section>

      <section className={cls.logoSection}>
        <div className="container text-center text-md-start mt-5">

          <div className="row mt-3">

            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

              <h6 className="text-uppercase fw-bold mb-4">
                <img src="/assets/images/logo.png" alt="logoImage" />
              </h6>
              <p className={cls.text}>
                منصة لايان التعليمية تسهل عليك الوصول للمحتوي التعليمي المطلوب ف اقرب فرصه ممكنه وبكفاءه عالية
              </p>
            </div>
 
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

              <h6 className="text-uppercase fw-bold mb-4">
                جامعاتنا
              </h6>
              <p>
                <a href="#!" className="text-reset">جامعة اسطنبول</a>
              </p>
              <p>
                <a href="#!" className="text-reset">جامعة حلب</a>
              </p>
              <p>
                <a href="#!" className="text-reset">جامعة القاهره</a>
              </p>
              <p>
                <a href="#!" className="text-reset">الجامعة الأمريكية</a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

              <h6 className="text-uppercase fw-bold mb-4">
                إعرف أكثر
              </h6>
              <p>
                <a href="#!" className="text-reset">الخطوات المطلوبة</a>
              </p>
              <p>
                <a href="#!" className="text-reset">كن وكيلنا</a>
              </p>
              <p>
                <a href="#!" className="text-reset">تتبع الطلب</a>
              </p>
              <p>
                <a href="#!" className="text-reset">تواصل معنا</a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

              <h6 className="text-uppercase fw-bold mb-4">
                التطبيقات
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

      <div className={`${cls.bottom} text-center p-4`} style={{ backgroundColor: '#363636' }}>
        جميع الحقوق محفوظة لموقع ليان
        © 2022 
      </div>

    </footer>
  )
}

export default Footer