import ReactDOM from 'react-dom/client'
import React, { Suspense } from 'react';
import { BrowserRouter } from "react-router-dom";
import './style/index.css'
import Loader from './components/layout/loader';
const App = React.lazy(() => import('./App'))

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Suspense fallback={<Loader />}>
      <App />
    </Suspense>
  </BrowserRouter>
)
