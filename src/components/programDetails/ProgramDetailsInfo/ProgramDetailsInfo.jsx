import cls from './programDetailsInfo.module.scss';

const ProgramDetailsInfo = ({ program }) => {
  return (
    <div className={cls.programDetailsInfo}>

      <div className='container'>

        <h2 dangerouslySetInnerHTML={{ __html: program.details }}></h2>

        <div className={cls.analytics}>

          <div className={`${cls.analytics} row justify-content-center`}>

              <div className='col-md-6 col-lg-4'>

                <div className={cls.one}>

                  <img src="/assets/images/universityBuilding.png" alt="planet" />

                  <div>

                    <span>
                      {program?.specialties?.title}
                    </span>

                  </div>

                </div>

              </div>

              <div className='col-md-6 col-lg-4'>

                <div className={cls.one}>

                  <img src="/assets/images/student.png" alt="planet" />

                  <div>

                    <span>
                      {program?.degrees?.title}
                    </span>

                  </div>

                </div>

              </div>

              <div className='col-md-6 col-lg-4'>

                <div className={cls.one}>

                  <img src="/assets/images/lang.png" alt="planet" />

                  <div>

                    <span>
                      {program && program.languages && program.languages[0].title}
                    </span>

                  </div>

                </div>

              </div>

          </div>

        </div>

        <div className={cls.details}>

          <p dangerouslySetInnerHTML={{ __html: program.details }}></p>

        </div>

        <div className={cls.opportunities}>

          <p dangerouslySetInnerHTML={{ __html: program.opportunities }}></p>

        </div>

      </div>

    </div>
  )
}

export default ProgramDetailsInfo