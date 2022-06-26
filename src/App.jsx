import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

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
  const location = useLocation()

  useEffect(() => {
    setLang(i18n.language);
  }, [i18n.language])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location])

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
