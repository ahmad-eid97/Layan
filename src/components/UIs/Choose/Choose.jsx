import { useState, useRef, useEffect } from "react";

import { useTranslation } from "react-i18next";

// STYLES FILES
import cls from "./choose.module.scss";

const Choose = ({ placeholder, results, choose, value, disabled, keyword, error }) => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const [filteredResults, setFilteredResults] = useState(results);
  const inputRef = useRef();
  const { t, i18n } = useTranslation('common');

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  useEffect(() => {
    setFilteredResults(results);
  }, [results]);

  // FILTER RESULTS WITH TYPING
  const filterResults = (typed) => {
    setInputValue(typed);
    if (typed !== "") {
      let filtered;
      if(keyword === 'specialties.title') {
        filtered = filteredResults.filter((result) =>
          result.specialties.title.toLowerCase().startsWith(typed.toLowerCase())
        );
      } else {
        filtered = filteredResults.filter((result) =>
          result[keyword].toLowerCase().startsWith(typed.toLowerCase())
        );
      }

      if (filtered.length !== 0) {
        setFilteredResults(filtered);
      } else {
        setFilteredResults(results);
      }
    } else {
      setFilteredResults(results);
    }
  };

  // SELECT CHOOSE OPTION HANDLER
  const selectChoose = (result) => {
    choose(result);
    setOpen(false);
    setFilteredResults(results);
    inputRef.current.id = result.id;
  };

  const inputBlur = () => {
    setTimeout(() => {
      setOpen(false)
    }, 300)
  }

  return (
    <>
      {/* {open && (
        <div className={cls.overlay} onClick={() => setOpen(false)}></div>
      )} */}

      <div className={cls.field}>
        <input
          ref={inputRef}
          type="text"
          placeholder={placeholder}
          value={inputValue}
          onChange={(e) => filterResults(e.target.value)}
          onFocus={() => setOpen(true)}
          onBlur={inputBlur}
          disabled={disabled}
          className={error ? cls.error : ''}
        />
        <i className={`fa-solid fa-angle-down ${cls[i18n.language]} ${error ? cls.error : ''}`}></i>

        <div className={`${cls.field__results} ${open ? cls.active : ""} ${error ? cls.error : ''}`}>
          <div className={cls.field__results_result}>
            {filteredResults.length > 0 && filteredResults.map((result) => (
              <div
                className={cls.resultInside}
                onClick={() => selectChoose(result)}
                key={result.id}
              >
                {keyword === 'specialties.title' ?
                  <p key={result}>{result.specialties.title}</p>
                  :
                  <p key={result}>{result[keyword]}</p>
                }
              </div>
            ))}
          </div>
        </div>

        {error && <p className={cls.error}>{t('contact.required')}</p>}
      </div>
    </>
  );
};

export default Choose;
