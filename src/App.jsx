import React, { Suspense } from 'react'
import { Route, Routes } from "react-router";
import Navbar from './components/layout/navbar';
const Marketplace = React.lazy(() => import('./pages/marketplace'));
const Mint = React.lazy(() => import('./pages/mint'))
const Pool = React.lazy(() => import('./pages/pool'))
const Profile = React.lazy(() => import('./pages/profile'))
const Footer = React.lazy(() => import('./components/layout/footer'))


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Marketplace />
            </Suspense>
          }
        />
        <Route
          path="/mint"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Mint />
            </Suspense>
          }
        />
        <Route
          path="/market"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Marketplace />
            </Suspense>
          }
        />

        <Route
          path="/pool"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Pool />
            </Suspense>
          }
        />

        <Route
          path="/profile"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Profile />
            </Suspense>
          }
        />


      </Routes>
      <Footer />
    </>
  )
}

export default App
