import { useState } from 'react';

import ModalVideo from 'react-modal-video';
import "react-modal-video/scss/modal-video.scss";

import cls from './knowUs.module.scss';

const KnowUs = () => {
	const [isOpen, setOpen] = useState(false)

  return (
    <div className={cls.knowUs}>
      
      <div className='container'>

        <div className='row align-items-center'>

          <div className='col-lg-6'>

            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="HndV87XpkWg" onClose={() => setOpen(false)} />

            <div className={cls.video} onClick={()=> setOpen(true)}>

              <iframe style={{ pointerEvents: 'none', borderRadius: '5px' }} width="560" height="315" src="https://www.youtube.com/embed/HndV87XpkWg?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

              <i className="fa-solid fa-play"></i>

            </div>

          </div>

          <div className='col-lg-6'>

            <span>تعرف علينا عن قرب</span>

            <h2>لأنك تستحق الأفضل دائماَ</h2>

            <div className={`${cls.features} row`}>

              <div className='col-sm-6 col-md-3'>
                <i className="fa-light fa-comment-smile"></i>
                <p>+15,000</p>
                <p>طلبة سعداء</p>
              </div>

              <div className='col-sm-6 col-md-3'>
                <i className="fa-light fa-city"></i>
                <p>+15,000</p>
                <p>جامعة معتمدة</p>
              </div>

              <div className='col-sm-6 col-md-3'>
                <i className="fa-light fa-graduation-cap"></i>
                <p>+15,000</p>
                <p>تخصص جامعي</p>
              </div>

              <div className='col-sm-6 col-md-3'>
                <i className="fa-light fa-users-medical"></i>
                <p>+15,000</p>
                <p>فريق إستشاري</p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default KnowUs