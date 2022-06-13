import { useState } from "react";

import { useTranslation } from "react-i18next";

// STYLES FILES
import cls from "./selectbox.module.scss";

const Selectdiv = ({ placeholder, list, value, select, disabled }) => {
  const { i18n } = useTranslation()
  const listItems = list;
  const [open, setOpen] = useState(false);

  // SELECT CHOOSE OPTION HANDLER
  const selectChoose = (result) => {
    select(result);
    setOpen(false);
  };

  return (
    <>
      {open && (
        <div className={cls.overlay} onClick={() => setOpen(false)}></div>
      )}

      <div className={cls.field}>
        <div className={cls.field__selectArea}>
          <input
            readOnly
            type="text"
            placeholder={placeholder}
            value={value}
            onFocus={() => setOpen(true)}
            disabled={disabled}
          />
          <i className={`fa-solid fa-angle-down ${cls[i18n.language]}`}></i>
        </div>

        <div className={`${cls.field__results} ${open ? cls.active : ""}`}>
          <div className={cls.field__results_result}>
            {listItems.map((item) => (
              <div
                className={cls.resultInside}
                onClick={() => selectChoose(item)}
                key={item}
              >
                <p key={item}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Selectdiv;
