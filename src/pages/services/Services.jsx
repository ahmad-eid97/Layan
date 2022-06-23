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

        <div className='row'>

          <div className="col-md-6 col-lg-4">

            <div className={cls.service}>

              <img src="/assets/images/discount.png" alt="discount" />

              <h4>خصومات مميزة</h4>

              <p>توفير خصومات جامعية تصل الي اكثر من 70 % من الرسوم الدراسية خصومات خاصة لطلابنا عند التقديم من خلالنا وذالك من خلال بروتوكول تعاون بين شركتنا وبين الجامعة . حيث أننا نسعي ان يلتحق الطالب في الجامعة بأقساط دراسية مناسبة وتوفير له كافة التسهيلات .</p>

            </div>

          </div>

          <div className="col-md-6 col-lg-4">

            <div className={cls.service}>

              <img src="/assets/images/question.png" alt="discount" />

              <h4>كيف تختار تخصصك ؟</h4>

              <p>توفير خصومات جامعية تصل الي اكثر من 70 % من الرسوم الدراسية خصومات خاصة لطلابنا عند التقديم من خلالنا وذالك من خلال بروتوكول تعاون بين شركتنا وبين الجامعة . حيث أننا نسعي ان يلتحق الطالب في الجامعة بأقساط دراسية مناسبة وتوفير له كافة التسهيلات .</p>

            </div>

          </div>

          <div className="col-md-6 col-lg-4">

            <div className={cls.service}>

              <img src="/assets/images/learning.png" alt="learning" />

              <h4>توفير دورات علمية</h4>

              <p>توفير خصومات جامعية تصل الي اكثر من 70 % من الرسوم الدراسية خصومات خاصة لطلابنا عند التقديم من خلالنا وذالك من خلال بروتوكول تعاون بين شركتنا وبين الجامعة . حيث أننا نسعي ان يلتحق الطالب في الجامعة بأقساط دراسية مناسبة وتوفير له كافة التسهيلات .</p>

            </div>

          </div>

          <div className="col-md-6 col-lg-4">

            <div className={cls.service}>

              <img src="/assets/images/trip.png" alt="trip" />

              <h4>تنظيم رحلات ميدانية للطلاب</h4>

              <p>توفير خصومات جامعية تصل الي اكثر من 70 % من الرسوم الدراسية خصومات خاصة لطلابنا عند التقديم من خلالنا وذالك من خلال بروتوكول تعاون بين شركتنا وبين الجامعة . حيث أننا نسعي ان يلتحق الطالب في الجامعة بأقساط دراسية مناسبة وتوفير له كافة التسهيلات .</p>

            </div>

          </div>

          <div className="col-md-6 col-lg-4">

            <div className={cls.service}>

              <img src="/assets/images/report2.png" alt="report" />

              <h4>تأمين القبول الجامعي مجانا</h4>

              <p>توفير خصومات جامعية تصل الي اكثر من 70 % من الرسوم الدراسية خصومات خاصة لطلابنا عند التقديم من خلالنا وذالك من خلال بروتوكول تعاون بين شركتنا وبين الجامعة . حيث أننا نسعي ان يلتحق الطالب في الجامعة بأقساط دراسية مناسبة وتوفير له كافة التسهيلات .</p>

            </div>

          </div>

          <div className="col-md-6 col-lg-4">

            <div className={cls.service}>

              <img src="/assets/images/house.png" alt="house" />

              <h4>توفير سكن طلابي مناسب</h4>

              <p>توفير خصومات جامعية تصل الي اكثر من 70 % من الرسوم الدراسية خصومات خاصة لطلابنا عند التقديم من خلالنا وذالك من خلال بروتوكول تعاون بين شركتنا وبين الجامعة . حيث أننا نسعي ان يلتحق الطالب في الجامعة بأقساط دراسية مناسبة وتوفير له كافة التسهيلات .</p>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Service;