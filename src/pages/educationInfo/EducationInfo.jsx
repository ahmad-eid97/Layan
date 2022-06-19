import { useRef, useState } from 'react';

import SelectBox from '../../components/UIs/SelectBox/Selectbox';

import DatePicker from "react-datepicker";

import { useTranslation } from 'react-i18next';

import "react-datepicker/dist/react-datepicker.css";
import cls from './educationInfo.module.scss';

const students = [
  'أحمد',
  'علي',
  'سعد',
  'أسامة',
  'ندي',
]

const semesters = [
  'الصيف',
  'الخريف',
  'الشتاء',
  'الربيع',
  'الكل',
]

const degrees = [
  'دكتوراه',
  'دكتوراه عليا',
  'دكتوراه تخصصي',
  'ماجستير'
]

const languages = [
  'الإنجليزية',
  'العربية',
  'التركية',
  'الروسية'
]

const universities = [
  'جامعة القاهرة',
  'جامعة الأسكندرية',
  'جامعة إسطنبول',
  'جامعة الأقصر',
  'جامعة حلب'
]

const primaryPrograms = [
  'برمجة المواقع',
  'برمجة التطبيقات',
  'برمجة الوب',
  'برمجة الأندرويد',
  'برمجة الأوبنتاج',
]

const secondPrograms = [
  'برمجة المواقع',
  'برمجة التطبيقات',
  'برمجة الوب',
  'برمجة الأندرويد',
  'برمجة الأوبنتاج',
]

const EducationInfo = () => {
  // COMPONENT HOOKS
  const [student, setStudent] = useState('');
  const [semester, setSemester] = useState('');
  const [degree, setDegree] = useState('');
  const [language, setLanguage] = useState('');
  const [university, setUniversity] = useState('');
  const [primaryProgram, setPrimaryProgram] = useState('');
  const [secondProgram, setSecondProgram] = useState('');

  return (
    <div className={cls.educationInfo}>
        
      <div className="container">

        <h1 className='label'>

          <img src="/assets/images/cap.png" alt="titleImage" />

          <p>تسجيل بيان الدرجة العلمية</p>

        </h1>

        <div className={cls.form}>

          <div className={cls.block}>

            <h4><i className="fa-light fa-file-chart-column"></i> بيانات البرنامج</h4>

            <div className="row">

              <div className="col-lg-6">

                <div className={cls.field}>

                  <label>الطالب</label>

                  <SelectBox placeholder="الجنس" list={students} value={student} select={setStudent} />

                </div>

              </div>

              <div className="col-lg-6">

                <div className={cls.field}>

                  <label>فصل الدراسة</label>

                  <SelectBox placeholder="فصل الدراسة" list={semesters} value={semester} select={setSemester} />

                </div>

              </div>

              <div className="col-lg-6">

                <div className={cls.field}>

                  <label>الدرجة العملية</label>

                  <SelectBox placeholder="الدرجة العملية" list={degrees} value={degree} select={setDegree} />

                </div>

              </div>

              <div className="col-lg-6">

                <div className={cls.field}>

                  <label>اللغة</label>

                  <SelectBox placeholder="اللغة" list={languages} value={language} select={setLanguage} />

                </div>

              </div>

              <div className="col-lg-6">

                <div className={cls.field}>

                  <label>الجامعة</label>

                  <SelectBox placeholder="الجامعة" list={universities} value={university} select={setUniversity} />

                </div>

              </div>

              <div className="col-lg-6">

                <div className={cls.field}>

                  <label>البرنامج الرئيسي</label>

                  <SelectBox placeholder="البرنامج الرئيسي" list={primaryPrograms} value={primaryProgram} select={setPrimaryProgram} />

                </div>

              </div>

              <div className="col-lg-6">

                <div className={cls.field}>

                  <label>البرنامج الثانوي</label>

                  <SelectBox placeholder="البرنامج الثانوي" list={secondPrograms} value={secondProgram} select={setSecondProgram} />

                </div>

              </div>

            </div>

          </div>

          <div className={cls.btn}>

            <button>حفظ</button>

          </div>

        </div>

      </div>

    </div>
  )
}

export default EducationInfo;