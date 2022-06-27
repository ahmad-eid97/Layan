import { useNavigate } from 'react-router-dom';

import cls from './programDetailsUniversities.module.scss';

const ProgramDetailsUniversities = ({ program }) => {
  // COMPONENT HOOKS
  const navigate = useNavigate()

  return (
    <div className={cls.programDetailsUniversities}>

      <div className='container'>

        <h2>الجامعات</h2>

          {program && program.universities && program.universities.map((university, idx) => (

            <div className='row align-items-center' key={idx}>

              <div className='col-lg-3'>

                <div className={cls.block}>

                  <p>الجامعة</p>

                  <span>{university.title}</span>

                </div>

              </div>

              <div className='col-lg-2'>

                <div className={cls.block}>

                  <p>السعر</p>

                  <span>{university.cost}</span>

                </div>

              </div>

              <div className='col-lg-2'>

                <div className={cls.block}>

                  <p>الخصم</p>

                  <span>{university.cost - university.sale}</span>

                </div>

              </div>

                <div className='col-lg-2'>

                  <div className={cls.block}>

                    <p>السعر بعد الخصم</p>

                    <span>{university.cost}</span>

                  </div>

                </div>

                <div className='col-lg-3'>

                  <div className={cls.block}>

                    <p>تسجيل</p>

                    <span><button onClick={() => navigate(`/register`)}>سجل الاَن</button></span>

                  </div>

                </div>

            </div>

          ))}

      </div>

    </div>
  )
}

export default ProgramDetailsUniversities