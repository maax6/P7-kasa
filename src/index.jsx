import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './styles/index.css'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import Header from './components/Header'
import Error from './components/Error'
import About from './pages/About'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
   <React.StrictMode>
      <Header />
      <Router>
         <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/About" element={<About />} />
            <Route path="/Error" element={<Error />} />
         </Routes>
      </Router>
   </React.StrictMode>
)
console.log('Version ' + require('react').version + ' de REACT')
