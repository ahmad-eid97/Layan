import { useState, useEffect } from 'react';

import axios from '../../Utils/axios';

import cls from './programs.module.scss';

const Programs = () => {
  // COMPONENT HOOKS
  const [programs, setPrograms] = useState([])

  // COMPONENT HANDLERS
  const fetchPrograms = async () => {
    const response = await axios.get(``);

    if(!response) return;

    console.log(response)
  }

  useEffect(() => {
    fetchPrograms();
  })
    
  return (
    <div className={cls.programs}>

      <div className='container'>
        
        <h3 className='label'>
  
          <img src="/assets/images/report.png" alt="titleImage" />
  
          <p>برامج الجامعات</p>
          
        </h3>

        <div className={cls.program}>



        </div>

      </div>

    </div>
  )
}

export default Programs