import ProgressBar from '../../UIs/ProgressBar/ProgressBar';

import cls from './company.module.scss'

const Company = () => {
  return (
    <div className={cls.company}>

      <div className='container'>

        <div className={`${cls.row} row align-items-center`}>

        <div className='col-lg-6'>

          <div className={cls.text}>

            <span>ماذا عن شركتنا!؟</span>

            <h2>نقوم بتقديم الخدمات عن طريق التنمية المستمره لمنصتنا في خدمة المحتوي التعليمي</h2>

            <p>هذا النص لملئ الفراغات ليس إلا هذا النص لملئ الفراغات ليس إلا هذا النص لملئ الفراغات ليس إلا هذا النص لملئ الفراغات ليس إلا هذا النص لملئ الفراغات ليس إلا هذا النص لملئ الفراغات ليس إلا هذا النص لملئ الفراغات ليس إلا هذا النص لملئ الفراغات ليس إلا .</p>

            <h4>نمتلك اكثر من 10 سنوات خبرة في المجال التعليمي عبر المنصات المختلفة والتعلم عن بعد.</h4>

            <ProgressBar label="التحليلات" percentage="95" />

            <ProgressBar label="الحلول" percentage="60" />

          </div>

        </div>

        <div className='col-lg-6'>

          <div className={cls.image}>

            <div className="blob"></div>

            <img src="/assets/images/man.png" alt="contactImage" />

          </div>

        </div>

        </div>

      </div>

    </div>
  )
}

export default Company