import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


import Home from '../../pages/Home'
import Error from '../../pages/Error'
import Card from '../../pages/Card'
import About from '../../pages/About'

export default function MyRouter() {
   return (
	   <Router>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/Products/:id" element={<Card />} />
					<Route path="/About" element={<About />} />
					<Route path="/*" element={<Error />} />
				</Routes>
      </Router>
   )
}