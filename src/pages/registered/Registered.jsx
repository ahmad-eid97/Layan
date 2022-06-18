import cls from './register.module.scss';

const Registered = () => {
  return (
    <div className={cls.registered}>

      <div className='container'>

        <div className='row justify-content-center'>

          <div className='col-md-4'>

            <div className={cls.wrapper}>

              <i className="fa-light fa-badge-check"></i>

              <h2>تم تسجيل الطلب بنجاح</h2>

              <p>تم تسجيل طلبك للانضمام للجامعة والأكاديمية التعليمية علي منصتنا بنجاح . شكرا لثقتك في منصتنا</p>

              <button>قم بإختيار البرنامج المناسب للتسجيل</button>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Registered