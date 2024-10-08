import React from 'react';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import Register from './pages/register/Register';
import Login from './pages/Login/Login';
import TermsConditions from './pages/PoliticasYCondiciones/TermsConditions';
import PoliciesPrivacy from './pages/PoliticasYCondiciones/PoliciesPrivacy';
import FAQ from './pages/PoliticasYCondiciones/FAQ';
import NewPassword from './pages/Password/NewPassword';
import RecuperarPassword from './pages/Password/RecuperarPassword';
import UserLogueado from './Rutas/UserLogueado';
import LandingPage from './pages/landingPage/LandingPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { decodeJWT, validationToken } from './Helpers/Token';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { login } from './features/Auth/Auth';
import QuienesSomos from './pages/AboutUs/QuienesSomos';

const App = () => {
  const dispatch = useAppDispatch();
  const reduxToken = useAppSelector(state => state.Auth);
  const tokenIsValid = validationToken(dispatch);
  if (tokenIsValid && reduxToken.token.length<=0) {
    const token = localStorage.getItem('token');
    const tokenDecode = decodeJWT();
    dispatch(login({ token: token ? token.toString() : '', id: tokenDecode.userId, date: tokenDecode.exp }))
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/register' element={<Register />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path='/login' element={tokenIsValid ? <Navigate to='/my/selectrole' /> : <Login />} />
          <Route path="/policies-privacity" element={<PoliciesPrivacy />} />
          <Route path="/newPassword" element={<NewPassword />} />
          <Route path="/recuperarPassword" element={<RecuperarPassword />} />
          <Route path="/about-us" element={<QuienesSomos/>} />
          <Route path="/faq" element={<FAQ/>} />
          {/* Protege las rutas dentro de '/my' */}
          {tokenIsValid ? (
            <Route path='my/*' element={<UserLogueado />} />
          ) : (
            <Route path='my/*' element={<Navigate to='/login' />} />
          )}
        </Routes>
        
      </BrowserRouter>
      
      <ToastContainer
        position="top-right"
        autoClose={4000}
        closeOnClick
      />
    </>
  );
};

export default App;
