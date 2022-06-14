import cls from './features.module.scss';

const Features = () => {
  return (
    <div className={cls.features}>

      <div className='container'>

        <div className='row align-items-center'>

          <div className='col-lg-6'>

            <div className={cls.text}>

              <span>لماذا نحن!؟</span>
              <h1>مميزات منصتنا التعليمية في مجالها الاستثماري والتعليمي</h1>
              <p>كلام بالعربي لمئ الفراغات كلام بالعربي لمئ الفراغات كلام بالعربي لمئ الفراغات كلام بالعربي لمئ الفراغات كلام بالعربي لمئ الفراغات كلام بالعربي لمئ الفراغات كلام بالعربي لمئ الفراغات</p>

            </div>

          </div>

          <div className='col-lg-6'>

            <div className='row'>

              <div className='col-md-6'>

                <div className={cls.part}>
                  <img src="/assets/images/support.png" alt="" />
                  {/* <i className="fa-light fa-headset"></i> */}
                  <h6>دعم فني طوال الإسبوع</h6>
                </div>

              </div>

              <div className='col-md-6'>

                <div className={cls.part}>
                  <img src="/assets/images/pay.png" alt="" />
                  {/* <i className="fa-light fa-bag-shopping"></i> */}
                  <h6>طرق دفع مختلفة</h6>
                </div>

              </div>

              <div className='col-md-6'>

                <div className={cls.part}>
                  <img src="/assets/images/report.png" alt="" />
                  {/* <i className="fa-light fa-file-chart-column"></i> */}
                  <h6>تقديم تقريرات دورية</h6>
                </div>

              </div>

              <div className='col-md-6'>

                <div className={cls.part}>
                  <img src="/assets/images/clock.png" alt="" />
                  {/* <i className="fa-light fa-alarm-clock"></i> */}
                  <h6>سرعة الرد والإستجابه</h6>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Features