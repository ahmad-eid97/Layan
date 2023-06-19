import { useState } from 'react';

import ModalVideo from '../../UIs/ModalVideo/ModalVideo';

import { useTranslation } from 'react-i18next';

import cls from './knowUs.module.scss';

const KnowUs = () => {
  const [isOpen, setOpen] = useState(false);
  const { t } = useTranslation('common');

  return (
    <div className={cls.knowUs}>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-6'>
            <ModalVideo channel='youtube' autoplay={true} isOpen={isOpen} videoId="HndV87XpkWg" onClose={() => setOpen(false)} />
            <div className={cls.video} onClick={() => setOpen(true)}>
              <div className={cls.blobOverlay}></div>
              <i className="fa-solid fa-play"></i>
            </div>
          </div>
          <div className='col-lg-6'>
            <span>{t('home.knowUs')}</span>
            <h2>{t('home.deserveBest')}</h2>
            <div className={`${cls.features} row`}>
              <div className='col-sm-6 col-md-3 col-lg-6 col-xl-3'>
                <div>
                  <i className="fa-light fa-comment-smile"></i>
                  <p>+15,000</p>
                  <p>{t('home.happy')}</p>
                </div>
              </div>
              <div className='col-sm-6 col-md-3 col-lg-6 col-xl-3'>
                <div>
                  <i className="fa-light fa-city"></i>
                  <p>+15,000</p>
                  <p>{t('home.accredited')}</p>
                </div>
              </div>
              <div className='col-sm-6 col-md-3 col-lg-6 col-xl-3'>
                <div>
                  <i className="fa-light fa-graduation-cap"></i>
                  <p>+15,000</p>
                  <p>{t('home.major')}</p>
                </div>
              </div>
              <div className='col-sm-6 col-md-3 col-lg-6 col-xl-3'>
                <div>
                  <i className="fa-light fa-users-medical"></i>
                  <p>+15,000</p>
                  <p>{t('home.consulting')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default KnowUs