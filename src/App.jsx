import { useState, useEffect } from 'react';

import Navbar from './components/Navbar/Navbar';
import AllRoutes from './allRoutes/AllRoutes';
import { Footer } from './components';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useTranslation } from 'react-i18next';

function App() {
  // COMPONENT STATES
  const { i18n } = useTranslation('common');
  const [lang, setLang] = useState(i18n.language)

  useEffect(() => {
    setLang(i18n.language);
  }, [i18n.language])

  // useEffect(() => {
  //   document.body.addEventListener('click', () => {
  //     document.getElementById('selectOverLay').click();
  //   })
  // }, [])

  return (
    <div className="App" id={lang}>

      <ToastContainer
        position={lang === 'en' ? "top-right" : "top-left"}
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
      />

      <Navbar />

      <AllRoutes />

      <Footer />
      
    </div>
  );
}

export default App;
