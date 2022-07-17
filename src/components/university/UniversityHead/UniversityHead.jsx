import cls from './universityHead.module.scss';

const UniversityHead = ({ university }) => {
  return (
    <div className={cls.universityHead} style={{ backgroundImage: `url(${university.photo_file})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>

      <div className="container">

        <div className={`${cls.row} row align-items-center`}>

          <div className='col-lg-6'>

            <div className={cls.textSide}>
              
              {console.log(university)}

              {/* <img src="/assets/images/university.png" alt="universityLogo" /> */}

              <h2>{university.title}</h2>

              {university && university.details && <p dangerouslySetInnerHTML={{ __html: university.details.substring(0, 400) }}></p>}

              <button>سجل الاَن</button>

            </div>

          </div>

          <div className="col-lg-6">

          </div>

        </div>

      </div>
      
    </div>
  )
}

export default UniversityHead