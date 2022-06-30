import axios from '../../../Utils/axios';

import cls from './personalInfoSection.module.scss';

const PersonalInfoSection = () => {
  // COMPONENT HANDLERS
  const logout = async () => {
    const response = await axios.post('/crm/students/auth/logout').catch(err => console.log(err));

    if(!response) return;

    console.log(response)
  }

  return (
    <div className={cls.personalSection}>

      <div className={cls.profile}>

        <img src="/assets/images/user.jpg" alt="image" />

        <div className={cls.info}>

          <div>

            <h5>ahmad eid</h5>

            <p>engineer</p>

          </div>

          <button onClick={logout}>تسجيل الخروج</button>

        </div>

      </div>

      <div className={cls.details}>

        <div className={cls.one}>

          <p>الإسم:</p>

          <span>ahmad eid</span>

        </div>

        <div className={cls.one}>

          <p>البريد الإلكترني:</p>

          <span>civil.ahmad.eid@gmail.com</span>

        </div>

        <div className={cls.one}>

          <p>تاريخ الميلاد:</p>

          <span>11 / 10 / 1997</span>

        </div>

        <div className={cls.one}>

          <p>البلد:</p>

          <span>Egypt</span>

        </div>

        <div className={cls.one}>

          <p>المدينة:</p>

          <span>sohag</span>

        </div>

      </div>

    </div>
  )
}

export default PersonalInfoSection