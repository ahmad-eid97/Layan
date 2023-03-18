import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { userActions } from './store/slices/userSlice/userSlice';

import AllRoutes from './allRoutes/AllRoutes';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { css } from "glamor";

import Cookies from 'universal-cookie';

import axios from './Utils/axios';

import { useTranslation } from 'react-i18next';
import ScrollToTop from './components/UIs/ScrollToTop/ScrollToTop';

const cookie = new Cookies()

function App() {
  // COMPONENT STATES
  const [authenticated, setAuthenticated] = useState(true)
  const { i18n } = useTranslation('common');
  const [lang, setLang] = useState(i18n.language)
  const location = useLocation()
  const dispatch = useDispatch()

  useEffect(() => {
    setLang(i18n.language);
  }, [i18n.language])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location])

  useEffect(() => {
    const auth = cookie.get('layanAuth');
    if(auth) {
      setAuthenticated(true)
    } else {
      setAuthenticated(false)
    }
  }, [cookie.get('layanAuth')])

  const fetchAuthenticatedUser = async () => {
    const response = await axios.get('/crm/students/auth/me', {
      headers: {
        Authorization: `Bearer ${cookie.get('layanAuth')}`,
        Accept: 'application/json'
      }
    }).catch(err => console.log(err));

    if(!response) return;

    dispatch(userActions.setUser(response.data.data))
  }

  useEffect(() => {
    if(cookie.get('layanAuth')) {
      fetchAuthenticatedUser();
    }
  }, [cookie.get('layanAuth')])

  return (
    <div className="App" id={lang}>

      <ToastContainer
        toastClassName={css({ fontFamily: "Almarai, sans-serif !important" })}
        position={lang === 'en' ? "top-right" : "top-left"}
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
      />

      <ScrollToTop>

        <AllRoutes authenticated={authenticated} />

      </ScrollToTop>
      
    </div>
  );
}

export default App;
