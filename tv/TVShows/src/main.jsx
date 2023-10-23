//here you set up your routers and wrap it afound the <App/> component as well as import it
// then go to define routes in App.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Router>
   <App />
   </Router>
  </React.StrictMode>,
)
