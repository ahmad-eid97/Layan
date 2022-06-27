import cls from './login.module.scss';

const Login = () => {
  return (
    <div className={cls.login}>

      <div className='container'>
        
        <h3 className='label'>

          <img src="/assets/images/lock.png" alt="titleImage" />

          <p>تسجيل الدخول لحسابك</p>
          
        </h3>

        <div className={cls.form}>

          <input type="text" placeholder='Email Address' />

          <input type="password" placeholder='Password' />

          <button>Login</button>

        </div>

      </div>

    </div>
  )
}

export default Login