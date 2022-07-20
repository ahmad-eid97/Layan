import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Loader from '../../components/UIs/Loader/Loader';

import { useDispatch } from 'react-redux';
import { userActions } from './../../store/slices/userSlice/userSlice';

import Cookies from 'universal-cookie';

import axios from '../../Utils/axios';

import { useTranslation } from 'react-i18next';

import cls from './login.module.scss';

const cookie = new Cookies();

const Login = () => {
  // COMPONENT HOOKS
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation('auth')

  const login = async () => {

    const credentials = {
      email, password
    }
    if(email !== '' && password !== '') {
      setLoading(true)

      const response = await axios.post('/crm/students/auth/login', credentials);
  
      if(!response) return;

      console.log(response)
  
      dispatch(userActions.setUser(response.data.data.student));

      cookie.set('layanAuth', response.data.data.access_token);

      setLoading(false)
  
      navigate('/')
    }
  }

  return (
    <div className={cls.login}>

      {loading && <Loader />}

      <div className='container'>
        
        <h3 className='label'>

          <img src="/assets/images/lock.png" alt="titleImage" />

          <p>{t('login.loginTo')}</p>
          
        </h3>

        <div className={cls.form}>

          <input type="text" placeholder={t('login.email')} value={email} onChange={(e) => setEmail(e.target.value)} />

          <input type="password" placeholder={t('login.password')} value={password} onChange={(e) => setPassword(e.target.value)} />

          <button onClick={login}>{t('login.login')} </button>

        </div>

      </div>

    </div>
  )
}

export default Login