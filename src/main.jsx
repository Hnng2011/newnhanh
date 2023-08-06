import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
const App = React.lazy(() => import('./App.jsx'));
import { BrowserRouter } from "react-router-dom";
import './style/index.css'

ReactDOM.createRoot(document.body).render(
  <BrowserRouter>
    <Suspense fallback={console.log("Đã Load")}>
      <App />
    </Suspense>
  </BrowserRouter>
)
