import { useTranslation } from 'react-i18next';

import cls from './blogSpecs.module.scss';

const BlogSpecs = () => {
  // COMPONENT HOOKS
  const { i18n } = useTranslation();

  return (
    <div className={cls.blogSpecs}>

      <div className={`${cls.search} ${cls[i18n.language]}`}>

        <input type="text" placeholder='بحث' />

        <i className="fa-light fa-magnifying-glass"></i>
        
      </div>

      <div className={cls.categories}>

        <h5>تصنيف المقالات</h5>

        <ul>

          <li><i className="fa-solid fa-circle-dashed"></i> تكنولوجيا</li>

          <li><i className="fa-solid fa-circle-dashed"></i> سياسة</li>

          <li><i className="fa-solid fa-circle-dashed"></i> إقتصاد</li>

          <li><i className="fa-solid fa-circle-dashed"></i> تعليم</li>

          <li><i className="fa-solid fa-circle-dashed"></i> واقع افتراضي</li>

          <li><i className="fa-solid fa-circle-dashed"></i> ألعاب</li>

        </ul>
        
      </div>

      <div className={cls.latest}>

        <h5>آخر المقالات</h5>

        <div className={cls.one}>

          <img src="/assets/images/blog.jpg" alt="latestImage" />

          <div className={cls.info}>

            <p>10 طرق للحصول علي نتائج كافية للتحصيل الدراسي</p>
            <span>Nov, 5 2020</span>

          </div>

        </div>

        <div className={cls.one}>

          <img src="/assets/images/blog.jpg" alt="latestImage" />

          <div className={cls.info}>

            <p>10 طرق للحصول علي نتائج كافية للتحصيل الدراسي</p>
            <span>Nov, 5 2020</span>

          </div>

        </div>

        <div className={cls.one}>

          <img src="/assets/images/blog.jpg" alt="latestImage" />

          <div className={cls.info}>

            <p>10 طرق للحصول علي نتائج كافية للتحصيل الدراسي</p>
            <span>Nov, 5 2020</span>

          </div>

        </div>

      </div>

      <div className={cls.tag}>

        <h5>العلامات</h5>

        <span>أندرويد</span>
        <span>عمل</span>
        <span>تكنولوجيا</span>

      </div>

    </div>
  )
}

export default BlogSpecs