import axios from '../../../Utils/axios';

import Cookies from 'universal-cookie';

import Loader from '../../UIs/Loader/Loader';

import { useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { userActions } from '../../../store/slices/userSlice/userSlice';

import { useTranslation } from 'react-i18next';

import cls from './personalInfoSection.module.scss';
import { useState } from 'react';

const cookie = new Cookies()

const PersonalInfoSection = () => {
  // COMPONENT HOOKS
  const { t } = useTranslation('common')
  const user = useSelector(({user}) => user.user);
  const dispatch = useDispatch()
  const navigate = useNavigate();

  // COMPONENT HANDLERS
  const logout = async () => {
    const response = await axios.get('/crm/students/auth/logout', {
      headers: {
        Authorization: `Bearer ${cookie.get('layanAuth')}`,
        Accept: 'application/json'
      }
    }).catch(err => console.log(err));

    if(!response) return;

    cookie.remove('layanAuth');

    dispatch(userActions.setUser(null));

    navigate('/')

    console.log(response);
  }

  return (
    <div className={cls.personalSection}>

      {!user && <Loader />}

      <div className={cls.profile}>

        <img src="/assets/images/user.jpg" alt="image" />

        <div className={cls.info}>

          <div>

            <h5>{user?.username}</h5>

            <p>{user?.phone}</p>

          </div>

          <button onClick={logout}>{t('profile.logout')}</button>

        </div>

      </div>

      <div className={cls.details}>

        <div className={cls.one}>

          <p>{t('profile.name')}:</p>

          <span>{user?.username}</span>

        </div>

        <div className={cls.one}>

          <p>{t('profile.email')}:</p>

          <span>{user?.email}</span>

        </div>

        <div className={cls.one}>

          <p>{t('profile.birthdate')}:</p>

          <span>{user?.birth_date}</span>

        </div>

        <div className={cls.one}>

          <p>{t('profile.country')}:</p>

          <span>{user?.country?.title}</span>

        </div>

        <div className={cls.one}>

          <p>{t('profile.city')}:</p>

          <span>{user?.city?.title}</span>

        </div>

      </div>

    </div>
  )
}

export default PersonalInfoSection