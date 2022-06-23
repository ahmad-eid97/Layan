import { useRef } from 'react';

import cls from './uploadField.module.scss';

const UploadField = ({ attach, updateAttachment }) => {
  // COMPONENT HOOKS
  const inputRef = useRef();

  // COMPONENT HANDLERS
  const inputClick = () => {
    inputRef.current.click()
  }

  const chooseImage = (e) => {
    attach.file_url = URL.createObjectURL(e.target.files[0]);
    updateAttachment(attach)
  }

  const deletedImage = () => {
    attach.file_url = '';
    updateAttachment(attach)
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

              {/* {choosedLogoImage.name.substring(0, 20) + '...'} */}

            </div>

          </>

          : 

          <div onClick={inputClick}>

            <i className="fa-light fa-cloud-arrow-up"></i>
            
            <p>
              إضغط لرفع ملف
            </p>

          </div>

          }

          <input type="file" style={{ display: 'none' }} ref={inputRef} onChange={chooseImage} />

      </div>

    </div>
  )
}

export default UploadField