import { useState, useEffect } from 'react';

import Loader from '../../UIs/Loader/Loader';

import axios from '../../../Utils/axios';

import { useTranslation } from 'react-i18next';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import cls from './clients.module.scss';

const Clients = () => {
	const [clients, setClients] = useState('');
	const [loading, setLoading] = useState('');
  const { t, i18n } = useTranslation('common');

  // COMPONENT HANDLERS
  const fetchClients = async () => {
    setLoading(true)

    const response = await axios.get(`/topics/13/page/1/count/50/${i18n.language}`);

    if(!response) return;

    setClients(response.data.topics);

    setLoading(false)
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

                        <img src={client.photo_file} alt='user' />

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