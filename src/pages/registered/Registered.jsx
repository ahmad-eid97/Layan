import cls from './register.module.scss';

const Registered = () => {

  return (
    <div className={cls.registered}>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-4'>
            <div className={cls.wrapper}>
              <i className="fa-light fa-badge-check"></i>
              <h2>{test('university.requested')}</h2>
              <p>{test('university.requestDesc')}</p>
              <button>{test('university.choose')}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Registered