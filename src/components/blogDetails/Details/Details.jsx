import { useState } from 'react';

import { useTranslation } from 'react-i18next';

import { format } from 'date-fns';

import validator from 'validator'

import axios from '../../../Utils/axios';

import { toast } from 'react-toastify';

import cls from './details.module.scss';

const Details = ({ blogDetails, blogId, fetchBlogDetails }) => {
  // COMPONENT HOOKS
  const [fields, setFields] = useState()
  const { t, i18n } = useTranslation('common');

  const handleFields = (e) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value
    })
  }

  const postComment = async () => {

    const data = {
      api_key: 402784613679330,
      topic_id: blogId,
      comment_name: fields.name,
      comment_email: fields.email,
      comment_message: fields.message
    }

    if (!validator.isEmail(fields.email)) {
      return errorNotify(t('blogDetails.invalid'));
    }

    const response = await axios.post(`/comment`, data).catch(err => console.log(err));

    if(!response) return;

    successNotify(t('blogDetails.commentAdded'));

    fetchBlogDetails()

    console.log(response)
  }

  const successNotify = (message) => toast.success(message)
  const errorNotify = (message) => toast.error(message)

  return (
    <div className={cls.details}>
      
      <div className={`${cls.blog}`}>

        <div className={`${cls.badge} ${cls[i18n.language]}`}>

          {blogDetails && (
            <>

              <span>{format(new Date(blogDetails?.date), 'dd')}</span>

              <span>{format(new Date(blogDetails?.date), 'MMM')}</span>
            
            </>
          )}

        </div>

        <img src={blogDetails?.photo_file} alt="blogImage" className={cls.blogImage} />

        <div className={cls.info}>

          <span className={cls[i18n.language]}><i className="fa-regular fa-user"></i> {blogDetails?.user.name} {t('blogDetails.addedBy')}</span>

          <span className={cls[i18n.language]}><i className="fa-regular fa-message-dots"></i> {blogDetails?.comments_count}</span>

          <h4>{blogDetails?.title}</h4>

          <p dangerouslySetInnerHTML={{ __html: blogDetails?.details }}></p>

        </div>

        <div className={cls.comments}>

          <h4>{t('blogDetails.comments')} ({blogDetails?.comments_count}):</h4>

          {blogDetails && blogDetails.comments && blogDetails?.comments.map((comment, idx) => (

            <div key={idx} className={cls.comment}>

              <div className={cls.userWrapper}>

                <div className={cls.user}>

                  <img src="/assets/images/default.jpg" alt="user" />

                  <div className={cls.info}>

                    <h5>{comment.name}</h5>

                    <p>{format(new Date(comment.date).getTime(), 'dd / MM / yyyy')}</p>

                  </div>

                </div>

                <span className={cls.reply}>{t('blogDetails.response')} <i className="fa-light fa-reply-all"></i></span>

              </div>

              <p>{comment.comment}</p>

            </div>

          ))}

        </div>

        <div className={cls.form}>

          <h3>{t('blogDetails.postNewComment')}</h3>

          <div className="row">

            <div className="col-md-6">

              <label>{t('blogDetails.name')}<span>*</span></label>

              <input type="text" placeholder={t('blogDetails.name')} name='name' onChange={(e) => handleFields(e)} />

            </div>

            <div className="col-md-6">

              <label>{t('blogDetails.email')}<span>*</span></label>

              <input type="text" placeholder={t('blogDetails.email')} name='email' onChange={(e) => handleFields(e)} />

            </div>

            <div className="col-xs-12">

              <label>{t('blogDetails.comment')}<span>*</span></label>

              <textarea placeholder={t('blogDetails.comment')} name='message' onChange={(e) => handleFields(e)}></textarea>

            </div>

            <button onClick={postComment}>{t('blogDetails.postcomment')}</button>

          </div>

        </div>

      </div>
    </div>
  )
}

export default Details