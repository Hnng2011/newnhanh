import React, { Suspense } from 'react'
import { Route, Routes } from "react-router";
import Navbar from './components/layout/navbar';
const Wantbuyorsell = React.lazy(() => import('./pages/wantbuyorsell'))
const Marketplace = React.lazy(() => import('./pages/marketplace'));
const Mint = React.lazy(() => import('./pages/mint'))
const Pool = React.lazy(() => import('./pages/pool'))
const Profile = React.lazy(() => import('./pages/profile'))
const Footer = React.lazy(() => import('./components/layout/footer'))
const Leaderboard = React.lazy(() => import('./pages/leaderboard'))

function App() {
  return (
    <>
      <Navbar />
      <div className='bg'>
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

          <Route
            path="/wtbs"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Wantbuyorsell />
              </Suspense>
            }
          />

          <Route
            path="/ltb"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Leaderboard />
              </Suspense>
            }
          />

        </Routes >
      </div>
      <Footer />
    </>

  )
}

export default App
