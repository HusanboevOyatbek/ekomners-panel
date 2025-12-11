import React, { Suspense, lazy, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

const LoginPage = lazy(() => import("./pages/login/Login"))
const Layout = lazy(() => import("./pages/layout/Layout"))
const ContactPage = lazy(() => import("./pages/contact/ContactPage"))
const StatisticPage = lazy(() => import("./pages/statictic/StatisticPage"))


function App() {

  const [isAuth, setIsAuth] = useState(localStorage.getItem("auth") || false);

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<LoginPage setIsAuth={setIsAuth} />} />
          <Route element={isAuth ? <Layout /> : <Navigate to={"/"} />}>
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/statistic" element={<StatisticPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
