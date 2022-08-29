import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import { setLangAsync } from "../src/features/i18next/i18nSlice";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const i18nStatus = useSelector(
    (state) => state.i18n.status,
  );
  const dispatch = useDispatch();
  useEffect(() => dispatch(setLangAsync()), []);
  return i18nStatus === "loading" ? (
    <p>Loading...</p>
  ) : (
    <>
      <Router>
        <div className='container'>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
