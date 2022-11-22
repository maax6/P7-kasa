import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from '../Header'
import Home from '../../pages/Home'
import AccommodationSheet from '../../pages/AccomodationSheet'
import Error from '../../pages/Error'
import About from '../../pages/About'

export default function MyRouter() {
   return (
      <Router>
         <Header />
         <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/Products/:id" element={<AccommodationSheet />} />
            <Route path="/About" element={<About />} />
            <Route path="/*" element={<Error />} />
         </Routes>
      </Router>
   )
}
