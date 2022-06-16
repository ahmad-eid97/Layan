import cls from './blogs.module.scss'

const Blogs = () => {
  return (
    <div className={cls.blogs}>

      <div className="container">
        
        <h3 className='label'>

          <i className="fa-light fa-graduation-cap"></i>

          <p>أشهر المنصات</p>
          
        </h3>

        <div className={`${cls.row} row`}>

          <div className="col-lg-4">

            <div className={cls.blog}>

              <img src="/assets/images/blog.jpg" alt="blogImage" />

              <span>by ahmad</span>

              <h4>تقديم حلول أفضل للأجيال القادمة</h4>

              <p>هذا النص لملئ الفراغات ليس إلا هذا النص لملئ الفراغات ليس إلا هذا النص لملئ الفراغات ليس إلا هذا النص لملئ الفراغات ليس إلا هذا النص لملئ الفراغات ليس إلا </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Blogs