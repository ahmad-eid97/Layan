import { useState } from 'react';

import ModalVideo from 'react-modal-video';
import "react-modal-video/scss/modal-video.scss";

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import cls from './experiences.module.scss';

const Experiences = () => {
	const [openViewer, setOpenViewer] = useState('');

  return (
    <div className={cls.experiences}>

      <div className='container'>
        
        <h3 className={`${cls.label} label`}>
  
          <i className="fa-light fa-graduation-cap"></i>
  
          <p>تجارب الطلاب</p>
          
        </h3>

        <Carousel showStatus={false} showArrows={false} showThumbs={false} className={`${cls.carousel}`}>

          <div className='row'>

            <div className='col-lg-6'>

              <div className={cls.text}>

                <span>علي إستعداد للتجربة!؟</span>

                <h3>تجارب طلابنا بعد التعامل مع لمنصة في خوض تجربة تعليمية جديده كلياَ والتفاعل مع منصتنا.</h3>

                <p>هذا النص لملئ الفراغات فقط ليس إلا هذا النص لملئ الفراغات فقط ليس إلا هذا النص لملئ الفراغات فقط ليس إلا هذا النص لملئ الفراغات فقط ليس إلا هذا النص لملئ الفراغات فقط ليس إلا هذا النص لملئ الفراغات فقط ليس إلا هذا النص لملئ الفراغات فقط ليس إلا هذا النص لملئ الفراغات فقط ليس إلا هذا النص لملئ الفراغات فقط ليس إلا هذا النص لملئ الفراغات فقط ليس </p>

                <div className={`${cls.features} row`}>

                  <div className='col-sm-6 col-lg-3'>
                    <div>
                      <i className="fa-light fa-graduation-cap"></i>
                      <p>Education</p>
                    </div>
                  </div>

                  <div className='col-sm-6 col-lg-3'>
                    <div>
                      <i className="fa-light fa-briefcase"></i>
                      <p>Work</p>
                    </div>
                  </div>

                  <div className='col-sm-6 col-lg-3'>
                    <div>
                      <i className="fa-light fa-clock"></i>
                      <p>Time</p>
                    </div>
                  </div>

                  <div className='col-sm-6 col-lg-3'>
                    <div>
                      <i class="fa-light fa-money-bill"></i>
                      <p>Payment</p>
                    </div>
                  </div>

                </div>

              </div>

            </div>

            <div className='col-lg-6'>

              <div className={cls.video}>

                <iframe style={{ pointerEvents: 'none', borderRadius: '5px', margin: 'auto' }} width="90%" height="415" src="https://www.youtube.com/embed/HndV87XpkWg?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                <i className="fa-solid fa-play" onClick={()=> setOpenViewer('https://www.youtube.com/embed/HndV87XpkWg?controls=0')}></i>

              </div>

            </div>

          </div>

          <div className='row'>

            <div className='col-lg-6'>

              <div className={cls.text}>

                <span>علي إستعداد للتجربة!؟</span>

                <h3>تجارب طلابنا بعد التعامل مع لمنصة في خوض تجربة تعليمية جديده كلياَ والتفاعل مع منصتنا.</h3>

                <p>هذا النص لملئ الفراغات فقط ليس إلا هذا النص لملئ الفراغات فقط ليس إلا هذا النص لملئ الفراغات فقط ليس إلا هذا النص لملئ الفراغات فقط ليس إلا هذا النص لملئ الفراغات فقط ليس إلا هذا النص لملئ الفراغات فقط ليس إلا هذا النص لملئ الفراغات فقط ليس إلا هذا النص لملئ الفراغات فقط ليس إلا هذا النص لملئ الفراغات فقط ليس إلا هذا النص لملئ الفراغات فقط ليس </p>

                <div className={`${cls.features} row`}>

                  <div className='col-sm-6 col-lg-3'>
                    <div>
                      <i className="fa-light fa-graduation-cap"></i>
                      <p>Education</p>
                    </div>
                  </div>

                  <div className='col-sm-6 col-lg-3'>
                    <div>
                      <i className="fa-light fa-briefcase"></i>
                      <p>Work</p>
                    </div>
                  </div>

                  <div className='col-sm-6 col-lg-3'>
                    <div>
                      <i className="fa-light fa-clock"></i>
                      <p>Time</p>
                    </div>
                  </div>

                  <div className='col-sm-6 col-lg-3'>
                    <div>
                      <i class="fa-light fa-money-bill"></i>
                      <p>Payment</p>
                    </div>
                  </div>

                </div>

              </div>

            </div>

            <div className='col-lg-6'>

              <div className={cls.video}>

                <iframe style={{ pointerEvents: 'none', borderRadius: '5px', margin: 'auto' }} width="90%" height="415" src="https://www.youtube.com/embed/HndV87XpkWg?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                <i className="fa-solid fa-play" onClick={()=> setOpenViewer('https://www.youtube.com/embed/HndV87XpkWg?controls=0')}></i>

              </div>

            </div>

          </div>

        </Carousel>

        {openViewer && 

          <div className={cls.videoViewer}>

            <div className={cls.overlay} onClick={() => setOpenViewer(null)}></div>

            <iframe style={{ pointerEvents: 'none', borderRadius: '5px', margin: 'auto' }} width="90%" height="415" src="https://www.youtube.com/embed/HndV87XpkWg?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

          </div>
        
        }

      </div>

    </div>
  )
}

export default Experiences