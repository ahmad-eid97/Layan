import cls from './header.module.scss';

import { useTranslation } from 'react-i18next';

const Header = () => {
  // COMPONENT HOOKS
  const { i18n } = useTranslation('common');

  return (
    <div className={cls.header}>

      <div className='row align-items-center'>

        <div className={`${cls.triangle} col-lg-6 col-xl-4`}>

          <div className={`${cls.text} ${cls[i18n.language]}`}>

            <div className={cls.content}>

              <span>لأنك تستحق الأفضل</span>

              <h1><span>لايان</span> للخدمات التعليمية</h1>

              <button>سجل الاَن</button>

            </div>

          </div>

        </div>

        <div className='col-lg-6 col-xl-4'>

          <div className={cls.middle}>

            <h1>لا تدع الفرصة تفوتك . احصل علي قبولك الجامعي الاَن.</h1>

            <p>تمتلك شركتنا فريق عمل احترافي وتعمل علي تطوير منظومة التعليم تمتلك شركتنا فريق عمل احترافي وتعمل علي تطوير منظومة التعليم تمتلك شركتنا فريق عمل احترافي وتعمل علي تطوير منظومة التعليم </p>

            <button>إعرف أكثر</button>

          </div>

        </div>

        <div className='col-lg-6 col-xl-4'>

          <div className={cls.image}>

            <img src="/assets/images/person.png" alt="" />

          </div>

        </div>

      </div>

      <div className={`${cls.bottom} ${cls[i18n.language]}`}>

        <div className={`${cls.wrapper} container`}>

          <div className={cls.part}>
            <i className="fa-solid fa-phone"></i>
            <div>
              <p>إتصل بنا علي</p>
              <span>01025864313</span>
            </div>
          </div>

          <div className={cls.part}>
            <i className="fa-solid fa-phone"></i>
            <div>
              <p>إتصل بنا علي</p>
              <span>01025864313</span>
            </div>
          </div>

          <div className={cls.part}>
            <i className="fa-solid fa-phone"></i>
            <div>
              <p>إتصل بنا علي</p>
              <span>01025864313</span>
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Header