import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { userActions } from './../../store/slices/userSlice/userSlice';

import axios from '../../Utils/axios';

import cls from './login.module.scss';

const Login = () => {
  // COMPONENT HOOKS
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const login = async () => {
    const credentials = {
      email, password
    }

    const response = await axios.post('/crm/students/auth/login', credentials);

    if(!response) return;

    dispatch(userActions.setUser(response.data.data.student))

    navigate('/')
  }

  return (
    <div className={cls.login}>

      <div className='container'>
        
        <h3 className='label'>

          <img src="/assets/images/lock.png" alt="titleImage" />

          <p>تسجيل الدخول لحسابك</p>
          
        </h3>

        <div className={cls.form}>

          <input type="text" placeholder='البريد الإلكتروني' value={email} onChange={(e) => setEmail(e.target.value)} />

          <input type="password" placeholder='كلمة المرور' value={password} onChange={(e) => setPassword(e.target.value)} />

          <button onClick={login}>تسجيل الدخول </button>

        </div>

      </div>

    </div>
  )
}

export default Login