import { RelatedUniversities, UniversityDetails, UniversityHead, UniversityInfo } from '../../components';

import cls from './university.module.scss';

const University = () => {
  return (
    <div className={cls.university}>

      <UniversityHead />

      <UniversityInfo />

      <UniversityDetails />

      <RelatedUniversities />
      
    </div>
  )
}

export default University