import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import cls from './universityHead.module.scss';

const UniversityHead = ({ university }) => {
  const navigate = useNavigate();
  const { t } = useTranslation('common')

  return (
    <div className={cls.universityHead} style={{ backgroundImage: `url(${university.photo_file})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>

      <div className="container">

        <div className={`${cls.row} row align-items-center`}>

          <div className='col-lg-12 col-md-12 col-sm-12'>

            <div className={cls.textSide}>

              <h2>{university.title}</h2>

              {university && university.details && <p dangerouslySetInnerHTML={{ __html: university.details.substring(0, 400) }}></p>}

              <button onClick={() => navigate(`/education-info?university=${university.id}`)}>{t('home.register')}</button>

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