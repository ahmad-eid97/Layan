import { t } from 'i18next';
import { useRef } from 'react';

import { useTranslation } from 'react-i18next';

import cls from './uploadField.module.scss';

const UploadField = ({ attach, updateAttachment, empty }) => {
  // COMPONENT HOOKS
  const { t } = useTranslation('common')
  const inputRef = useRef();

  // COMPONENT HANDLERS
  const inputClick = () => {
    inputRef.current.click()
  }

  const chooseImage = (e) => {
    updateAttachment({ ...attach, file_url: URL.createObjectURL(e.target.files[0]) })
  }

  const deletedImage = () => {
    updateAttachment({ ...attach, file_url: '' })
    inputRef.current.value = ''
  }

  return (
    <div className={cls.field}>

      <label>{attach.name}</label>

      <div className={cls.imageArea}>

        {attach.file_url ? 

          <>
            
            <div className={cls.images}>

              <div className={cls.image}>

                <img src={attach.file_url} alt="uploadedImage" />

                <i className="fa-regular fa-xmark" onClick={deletedImage}></i>

              </div>

            </div>

          </>

          : 

          <div onClick={inputClick}>

            <i className="fa-light fa-cloud-arrow-up"></i>
            
            <p>
              {t('upload.upload')}
            </p>

          </div>

          }

          <input type="file" style={{ display: 'none' }} ref={inputRef} onChange={chooseImage} />

      </div>

      {empty && <p className={cls.error}>يجب إرفاق ملف</p>}

    </div>
  )
}

export default UploadField