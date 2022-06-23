import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from './../../Utils/axios';

import PagesLoader from '../../components/UIs/PagesLoader/PagesLoader' 

import { useTranslation } from 'react-i18next';

import cls from './services.module.scss';

const Service = () => {
  // COMPONENT HOOKS
  const [services, setServices] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  // DCOMPONENT HANDLERS
  const fetchServices = async () => {
    setLoading(true)

    const response = await axios.get(`/topics/2/page/1/count/30/${i18n.language}`);

    if(!response) return;

    setServices(response.data.topics);

    setCount(response.data.topics_count);

    setLoading(false)

    console.log(response);
  }

  useEffect(() => {
    fetchServices()
  }, [])

  return (
    <div className={cls.services}>

      {loading && <PagesLoader />}

      <div className='container'>
        
        <h1 className='label'>

          <img src="/assets/images/services.png" alt="titleImage" />
  
          <p>تعرف علي خدماتنا للحصول علي القبول الجامعي</p>
          
        </h1>

        <div className={cls.wrapper}>

          {services.map((service, idx) => (

            // <div key={idx} className="col-md-6 col-lg-4" style={{ alignSelf: 'stretch !important' }}>

              <div key={idx} className={cls.service}>

                <img src={service.photo_file} alt="discount" />

                <h4>{service.title}</h4>

                <p dangerouslySetInnerHTML={{ __html: service.details }}></p>

              </div>

            // </div>

          ))}

        </div>

      </div>

    </div>
  )
}

export default Service;