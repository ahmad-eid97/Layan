import { useState, useEffect } from 'react';

import Navbar from './components/Navbar/Navbar';

import { useTranslation } from 'react-i18next';

function App() {
  // COMPONENT STATES
  const { i18n } = useTranslation('common');
  const [lang, setLang] = useState(i18n.language)

  useEffect(() => {
    setLang(i18n.language);
  }, [i18n.language])

  return (
    <div className="App" id={lang}>

      <Navbar />
      
    </div>
  );
}

export default App;
