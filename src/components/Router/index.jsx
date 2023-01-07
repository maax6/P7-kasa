import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from '../Header'
import Footer from '../Footer'
import Home from '../../pages/Home'
import Error from '../../pages/Error'
import Card from '../../pages/Card'
import About from '../../pages/About'
 function MyRouter() {
   return (
		<>
	   <Router>
			<Header />
				<Routes>
					<Route  exact path="/" element={<Home />} />
					 <Route path="{{ maax6.github.io/p7-kasa}}/" element={<Home />} />
					<Route exact path="/products/:id" element={<Card />} />
					<Route path="/About" element={<About />} />
					<Route path="/404" element={<Error />} />
					<Route path="/*" element={<Error />} />
				</Routes>
			<Footer />
      </Router>
		</>
	)
}
export default MyRouter;