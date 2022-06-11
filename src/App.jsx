import { useState, useEffect } from 'react';

import LangSwitch from './components/Switches/LangSwitch/LangSwitch';

import { useTranslation } from 'react-i18next';

import Cookies from 'universal-cookie';

const cookies = new Cookies();

function App() {
  // COMPONENT STATES
  const { t, i18n } = useTranslation('common');
  const [lang, setLang] = useState(i18n.language)

  useEffect(() => {
    setLang(i18n.language);
  }, [i18n.language])

  return (
    <div className="App" id={lang}>
      <h1><i className="fa-light fa-house-user"></i>{t('analytics.welcomeText')}</h1>

      <LangSwitch />
      
    </div>
  );
}

export default App;
