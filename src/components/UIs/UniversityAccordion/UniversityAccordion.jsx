import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';

import { useTranslation } from 'react-i18next';

import cls from './universityAccordion.module.scss';

const Accordion = ({ data }) => {
  // COMPONENT HOOKS
  const [showSub, setShowSub] = useState('')
  const { t, i18n } = useTranslation('common');
  const navigate = useNavigate();

  // COMPONENT HANDLERS
  const showSubList = (e, list) => {
    if (showSub === list) {
      setShowSub('')
    }
    else {
      setShowSub(list)
    }
    let subMenu = e.target.nextElementSibling;
    if (subMenu) {
      let maxHeight = subMenu.scrollHeight;

      if (!subMenu.style.maxHeight) {
        subMenu.style.maxHeight = maxHeight + 'px';
      } else {
        subMenu.style.maxHeight = null;
      }
    }
  }

  return (
    <Box className={`${cls.accordion_link} ${showSub === 'products' ? cls.showSub : ''} ${cls[i18n.language]}`}>
      <Box className={`${cls.link} ${cls[i18n.language]}`} onClick={(e) => showSubList(e, 'products')}>
        <Box className={`${cls.label} ${cls[i18n.language]}`}>
          <p dangerouslySetInnerHTML={{ __html: data.specialties.title }}></p>
        </Box>
        <Box className={cls.icon}>
          {showSub ?
            <i className={`${cls[i18n.language]} fa-light fa-circle-minus`}></i>
            :
            <i className={`${cls[i18n.language]} fa-light fa-circle-plus`}></i>
          }
        </Box>
      </Box>
      <Box className={`${cls.subMenu} ${cls[i18n.language]} subMenu`}>
        {showSub === 'products' && <Box className={cls.dropLayer} onClick={(e) => showSubList(e, '')}></Box>}
        <Box className={cls.accordionBody}>
          <div className='row align-items-center justify-content-center'>
            <div className='col-sm-6 col-md-4'>
              <p>{t('university.language')}</p>
              <span>{data.languages.map(one => one.title).join(',')}</span>
            </div>
            <div className='col-sm-6 col-md-4'>
              <p>{t('university.study')}</p>
              <span>{data.study_years}</span>
            </div>
            <div className='col-sm-6 col-md-4'>
              <p>{t('university.beforePrice')}</p>
              <span>{data.price_start_at}</span>
            </div>
            <div className='col-sm-6 col-md-4'>
              <p>{t('university.afterPrice')}</p>
            </div>
            <div className='col-sm-6 col-md-4'>
              <button onClick={() => navigate(`/program/${data.id}`)}>{t('university.showDetails')}</button>
            </div>
          </div>
        </Box>
      </Box>
    </Box>
  )
}

export default Accordion