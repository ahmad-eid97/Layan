import { useState, useEffect } from 'react';

import Loader from '../../UIs/Loader/Loader';

import ModalVideo from 'react-modal-video';
import "react-modal-video/scss/modal-video.scss";

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import axios from '../../../Utils/axios';

import { useTranslation } from 'react-i18next';

import cls from './experiences.module.scss';

const Experiences = () => {
  const [openViewer, setOpenViewer] = useState(false)
	const [experiences, setExperiences] = useState('');
	const [loading, setLoading] = useState('');
  const { t, i18n } = useTranslation('common');

  // COMPONENT HANDLERS
  const fetchExperiences = async () => {
    setLoading(true)

    const response = await axios.get(`/topics/11/page/1/count/50/${i18n.language}`);

    if(!response) return;

    setExperiences(response.data.topics);

    setLoading(false)
  }

  useEffect(() => {
    fetchExperiences();
  }, [])

  return (
    <div className={cls.experiences}>

      <div className='container'>
        
        <h3 className={`${cls.label} label`}>

          <img src="/assets/images/cap.png" alt="titleImage" />
  
          <p>{t('home.students')}</p>
          
        </h3>

        <Carousel showStatus={false} showArrows={false} showThumbs={false} className={`${cls.carousel}`}>

          {experiences && experiences.map((one, idx) => (

            <div key={idx} className='row'>

              <div className='col-lg-6'>

                <div className={cls.text}>

                  <span>علي إستعداد للتجربة!؟</span>

                  <h3>{one.title}</h3>

                  <p dangerouslySetInnerHTML={{ __html: one.details }}></p>

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
                        <i className="fa-light fa-money-bill"></i>
                        <p>Payment</p>
                      </div>
                    </div>

                  </div>

                </div>

              </div>

              <div className='col-lg-6'>

                <div className={cls.video}>

                  <iframe style={{ pointerEvents: 'none', borderRadius: '5px', margin: 'auto' }} width="90%" height="415" src={one.fields[0].value} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                  <i className="fa-solid fa-play" onClick={()=> setOpenViewer(one.fields[0].value)}></i>

                </div>

              </div>

            </div>

          ))}

        </Carousel>

        {openViewer && 

          <div className={cls.videoViewer}>

            <div className={cls.overlay} onClick={() => setOpenViewer(null)}></div>

            <iframe style={{ pointerEvents: 'none', borderRadius: '5px', margin: 'auto' }} width="90%" height="415" src={openViewer} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

          </div>
        
        }

      </div>

    </div>
  )
}

export default Experiences