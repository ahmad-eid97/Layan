import cls from './universityInfo.module.scss';

const UniversityInfo = ({ university }) => {
  return (
    <div className={cls.universityInfo}>

      <div className='container'>

        <div className={`${cls.analytics} row justify-content-center`}>

          <div className='col-md-6 col-lg-4'>

            <div className={cls.one}>

              <img src="/assets/images/planet2.png" alt="planet" />

              <div>

                <span>{university.international_ranking}</span>

                <p>لترتيب الدولي</p>

              </div>

            </div>

          </div>

          <div className='col-md-6 col-lg-4'>

            <div className={cls.one}>

              <img src="/assets/images/location.png" alt="country" />

              <div>

                <span>{university.local_ranking}</span>

                <p>لترتيب المحلي</p>

              </div>

            </div>

          </div>

          <div className='col-md-6 col-lg-4'>

            <div className={cls.one}>

              <img src="/assets/images/student.png" alt="student" />

              <div>

                <span>{university.number_students}</span>

                <p>طالب</p>

              </div>

            </div>

          </div>

        </div>

        {/* <h6><i className="fa-regular fa-circle-dot"></i> جامعة <span>القاهرة</span> بيلجي تسعى دائماً لأن تكون ضمن المراتب الأولى في ترتيب الجامعات حيث أن الجامعة لديها عدة إعترافات عالمية وهي عضو في رابطة الجامعات الأوربية EUA وفي عدة مؤسسات دولية.</h6>

        <h6><i className="fa-regular fa-circle-dot"></i> حيث تم تصنيف جامعة اسطنبول بيلجي في المركز الـ <span>4</span> على مستوى الجامعات التركية طبقًا لتصنيف QS Ranking لعام 2019.</h6> */}

        <div className={cls.data}>

          <div dangerouslySetInnerHTML={{ __html: university.bio }}></div>

        </div>

        <div className={cls.info}>

          <div dangerouslySetInnerHTML={{ __html: university.details }}></div>

          {/* <div className={cls.part}>

            <h4><i className="fa-light fa-glasses"></i> رؤية جامعة القاهرة</h4>

            <p>أن تكون جامعة دولية تندمج مع معاير العلم والفن ، وتحتضن الحرية ، و تشارك فى دور ريادي من أجل تنمية المجتمع ، وتوفر مكانًا يتشارك فيه الطلاب وأعضاء هيئة التدريس شغفًا بالتعلم ، حيث يكرس جميع الأعضاء الأكاديميين والإداريين على حد سواء أنفسهم لتحقيق هذه الغاية.</p>

          </div>

          <div className={cls.part}>

            <h4><i className="fa-light fa-briefcase"></i> مهمة جامعة القاهرة</h4>

            <p>تتعهد جامعة اسطنبول بيلجي بالمساهمة في العلوم والإنتاج الفني وتطوير التكنولوجيا ؛ لتثقيف الأفراد الذين تطورت مهاراتهم في البحث وحل المشكلات في جو من الفكر الحر والوعي بالمسؤولية الإجتماعية ، والذين تتوافق كفاءاتهم مع المعايير الدولية ، بالإضافة إلى احترام قواعد الأخلاق والموضوعية المهنية ، منفتحون أيضًا على العديد من: المناهج التأديبية ولخدمة المجتمع ضمن معايير الجودة .</p>

          </div>

          <div className={cls.part}>

            <h4><i className="fa-light fa-city"></i> الجرم الجامعي لجامعة القاهرة</h4>

            <p>يعد موقع إسطنبول بيلجى موقعا متميزا بالنسبة لباقى الجامعات التركية فى اسطنبول حيث تضم جامعة اسطنبول بيلجي ثلاثة أحرم جامعية تقع في موقع مركزي وتوفر حياة طلابية نابضة بالحياة . يحث أنها قريبة من ما يقرب من 1000 حدث اجتماعي وثقافي سنويًا: كوشتبى و دولابديري و سنترال اسطنبول.تتوفر فى جميع أحرم جامعة اسطنبول بيلجي كافيتريات ومطاعم تلبي احتياجات تقديم الطعام ،الوجبات الخفيفة و المشروبات المختلفة للطلاب والموظفين.</p>

          </div>

          <div className={cls.part}>

            <h4><i className="fa-light fa-books"></i> المكتبة والموارد الإلكترونية</h4>

            <p>تقدم مكتبة جامعة اسطنبول بيلجي مساهمة مباشرة في التعليم والبحث والتطوير الفكري للطلاب. حيث توفر ثلاث مكتبات وسبع قاعات دراسية بمساحات مختلفة مثل أقسام الدراسة والقراءة للإستخدام الفردي والجماعي ، وزوايا تكنولوجيا المعلومات .</p>

          </div> */}

        </div>

      </div>

    </div>
  )
}

export default UniversityInfo