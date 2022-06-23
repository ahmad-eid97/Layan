import { useState } from 'react';

import Selectbox from '../../UIs/SelectBox/Selectbox';

import cls from './filter.module.scss';

const gradeList = [
  {
    title: "الأولي",
    label: 'الأولي'
  },
  {
    title: "الأولي",
    label: 'الأولي'
  },
  {
    title: "الأولي",
    label: 'الأولي'
  },
  {
    title: "الأولي",
    label: 'الأولي'
  },
  {
    title: "الأولي",
    label: 'الأولي'
  }
]

const Filter = () => {
  // COMPONENT HOOKS
  const [grade, setGrade] = useState('');

  return (
    <div className={cls.filter}>

      <div className='container'>

        <Selectbox placeholder="الدرجة العلمية" list={gradeList} select={setGrade} value={grade} />

        <Selectbox placeholder="الدرجة العلمية" list={gradeList} select={setGrade} value={grade} />

        <Selectbox placeholder="الدرجة العلمية" list={gradeList} select={setGrade} value={grade} />

        <Selectbox placeholder="الدرجة العلمية" list={gradeList} select={setGrade} value={grade} />
        
        <Selectbox placeholder="الدرجة العلمية" list={gradeList} select={setGrade} value={grade} />

        <button>بحث</button>

      </div>

    </div>
  )
}

export default Filter