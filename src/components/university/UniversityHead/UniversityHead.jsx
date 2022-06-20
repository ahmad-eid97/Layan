import cls from './universityHead.module.scss';

const UniversityHead = () => {
  return (
    <div className={cls.universityHead} style={{ background: "url('/assets/images/cairo.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>

      <div className="container">

        <div className={`${cls.row} row align-items-center`}>

          <div className='col-lg-6'>

            <div className={cls.textSide}>

              {/* <img src="/assets/images/university.png" alt="universityLogo" /> */}

              <h2>جامعة القاهرة</h2>

              <p>جامعة بيلجي التي تأسست عام 1996 تحتوي على ما يقارب 25000 طالب وأكثر من 1000 أكاديمي ومتخصص تقع في منطقة خلابة قريبة من الخليج الذهبي وسط إسطنبول "التعلم للحياة وليس للدراسة" هذا هو شعار جامعة بيلجي الجامعة الوحيدة التي تملك عضوية في شبكة الجامعات العالمية “Laureate International Universities” منذ عام 2006 وبمرور الوقت نمت جامعة بيلجي ليصبح لديها 4 حرم جامعية بمساحة 206.000 متر مربع وليصل عدد الخريجين منها حتى عام 2017 أكثر من 30.000 طالب وطالبة</p>

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