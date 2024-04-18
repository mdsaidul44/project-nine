import React from 'react'
import ReactDOM from 'react-dom/client'  
import './index.css'
import 'react-toastify/dist/ReactToastify.css';

import { RouterProvider } from 'react-router-dom'
import router from './Router/Router'
import AuthProvider from './Provider/AuthProvider'
import { ToastContainer } from 'react-toastify'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <AuthProvider>
       <RouterProvider router={router} />
       </AuthProvider>
       <ToastContainer />
  </React.StrictMode>,
)
