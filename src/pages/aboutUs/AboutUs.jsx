import { Company, Information } from '../../components';

import cls from './aboutUs.module.scss';

const AboutUs = () => {

  return (
    <div className={cls.aboutUs}>
      <Company />
      <Information />
    </div>
  )
}

export default AboutUs