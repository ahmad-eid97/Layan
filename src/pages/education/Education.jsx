import { useState, useEffect } from 'react';

import { useTranslation } from 'react-i18next';

import axios from '../../Utils/axios';

import cls from './education.module.scss';

const Education = () => {
  // COMPONENT HOOKS
  const [steps, setSteps] = useState([])
  const { t, i18n } = useTranslation('common');

  // COMPONENT HANDLERS
  const fetchEducationSteps = async () => {
    const response = await axios.get(`/topics/12/page/1/count/50/${i18n.language}`);
    if (!response) return;
    setSteps(response.data.topics)
  }

  useEffect(() => {
    fetchEducationSteps()
  }, [])

  return (
    <div className={cls.education}>
      <div className='container'>
        <h1 className='label'>
          <img src="/assets/images/cap.png" alt="titleImage" loading="lazy" />
          <p>{t('education.steps')}</p>
        </h1>
        <div className={cls.stepper}>
          {steps.map((step, idx) => (
            <div key={idx} className={`${cls.step} ${cls[i18n.language]}`}>
              <div className={`${cls.num} ${cls[i18n.language]}`}>
                <span>0{step.fields[0].value}</span>
              </div>
              <img src={step.photo_file} alt="titleImage" loading="lazy" />
              <h6>{step.title}</h6>
              <p>{step.details}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Education;