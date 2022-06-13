import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import cls from './clients.module.scss';

const Clients = () => {
  return (
    <div className={cls.clients}>

      <div className='container'>

        <div className='row'>

          <div className='col-lg-6'>

            <div className={cls.carousel}>

              <Carousel showStatus={false} showArrows={false} showThumbs={false}>

                  <div className={cls.slide}>

                    <span><i className="fa-solid fa-quote-left"></i></span>

                    <div className={cls.info}>

                      <p>منصة تعليمية رائعة ونظام ومتابعة ممتازة في كل اوقات الإسبوع يتم التواصل معك بشكل دوري لمتابعة المستوي المطلوب</p>

                      <div className={cls.user}>

                        <img src='/assets/images/user.jpg' alt='user' />

                        <div>
                          <h5>ahmad eid</h5>
                          <p>engineer</p>
                        </div>

                      </div>

                    </div>

                  </div>

                  <div className={cls.slide}>

                    <span><i className="fa-solid fa-quote-left"></i></span>

                    <div className={cls.info}>

                      <p>منصة تعليمية رائعة ونظام ومتابعة ممتازة في كل اوقات الإسبوع يتم التواصل معك بشكل دوري لمتابعة المستوي المطلوب</p>

                      <div className={cls.user}>

                        <img src='/assets/images/user.jpg' alt='user' />

                        <div>
                          <h5>ahmad eid</h5>
                          <p>engineer</p>
                        </div>

                      </div>

                    </div>

                  </div>

                  <div className={cls.slide}>

                    <span><i className="fa-solid fa-quote-left"></i></span>

                    <div className={cls.info}>

                      <p>منصة تعليمية رائعة ونظام ومتابعة ممتازة في كل اوقات الإسبوع يتم التواصل معك بشكل دوري لمتابعة المستوي المطلوب</p>

                      <div className={cls.user}>

                        <img src='/assets/images/user.jpg' alt='user' />

                        <div>
                          <h5>ahmad eid</h5>
                          <p>engineer</p>
                        </div>

                      </div>

                    </div>

                  </div>

              </Carousel>

            </div>

          </div>

          <div className='col-lg-6'>

            <div className={cls.text}>

              <span>التوصيات</span>

              <h1>ماذا يقول عنا عملاؤنا!؟</h1>

              <p>اَراء العملاء في مجتمعنا والتعامل معنا عن طريق المنصه من كل البلدان المتاح بها منصتنا.</p>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Clients