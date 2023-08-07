import { Route, Routes } from "react-router";

import Navbar from './components/layout/navbar';
import Wantbuyorsell from './pages/wantbuyorsell';
import Marketplace from './pages/marketplace';
import Mint from './pages/mint';
import Pool from './pages/pool';
import Profile from './pages/profile';
import Footer from './components/layout/footer';
import Leaderboard from './pages/leaderboard';

function App() {
  return (
    <>
      <Navbar />
      <div className='bg'>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Marketplace />
              </>
            }
          />
          <Route
            path="/mint"
            element={
              <>
                <Mint />
              </>
            }
          />
          <Route
            path="/market"
            element={
              <>
                <Marketplace />
              </>
            }
          />

          <Route
            path="/pool"
            element={
              <>
                <Pool />
              </>
            }
          />

          <Route
            path="/profile"
            element={
              <>
                <Profile />
              </>
            }
          />

          <Route
            path="/wtbs"
            element={
              <>
                <Wantbuyorsell />
              </>
            }
          />

          <Route
            path="/ltb"
            element={
              <>
                <Leaderboard />
              </>
            }
          />
        </Routes >
      </div>
      <Footer />
    </>

  )
}

export default App
