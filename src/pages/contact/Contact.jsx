import { ContactForm } from '../../components';

import cls from './contact.module.scss';

const Contact = () => {
  return (
    <div className={cls.contact}>

      <ContactForm />

      <div className={cls.map}>

        <div className="mapouter"><div className="gmap_canvas"><iframe width="100%" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" style={{ position:'relative',textAlign:'right',height:'500px',width:'831px' }}></iframe></div></div>

      </div>

    </div>
  )
}

export default Contact