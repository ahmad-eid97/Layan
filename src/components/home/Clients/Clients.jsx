import { useState, useEffect } from 'react';

import axios from '../../../Utils/axios';

import { useTranslation } from 'react-i18next';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import cls from './clients.module.scss';

const Clients = () => {
  const [clients, setClients] = useState('');
  const { t, i18n } = useTranslation('common');

  // COMPONENT HANDLERS
  const fetchClients = async () => {
    const response = await axios.get(`/topics/13/page/1/count/50/${i18n.language}`);
    if (!response) return;
    setClients(response.data.topics);
  }

  useEffect(() => {
    fetchClients();
  }, [])

  return (
    <div className={cls.clients}>
      <div className='container'>
        <div className={`${cls.row} row`}>
          <div className='col-lg-6'>
            <div className={cls.carousel}>
              <Carousel showStatus={false} showArrows={false} showThumbs={false}>
                {clients && clients.map((client, idx) => (
                  <div key={idx} className={cls.slide}>
                    <span><i className="fa-solid fa-quote-left"></i></span>
                    <div className={cls.info}>
                      <p>{client.title}</p>
                      <div className={cls.user}>
                        <img src={client.photo_file} alt='user' loading="lazy" />
                        <div>
                          <h5>{client.fields[0].value}</h5>
                          <p>{client.fields[1].value}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className={cls.text}>
              <span>{t('home.recommendations')}</span>
              <h1>{t('home.says')}</h1>
              <p>{t('home.opinions')}.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Clients;