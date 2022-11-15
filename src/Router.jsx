import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Housing from './pages/Housing'
import Header from'./components/Header'
import SignIn from './pages/SignIn'
import Error from './components/Error'
import About from './pages/About'
export default function MyRouter(){
	return (<Router>
			    <Header />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/SignIn" element={<SignIn />} />
					<Route path="/Housing/:id" element={<Housing />} />
					<Route path="/About" element={<About />} />
					<Route path="/*" element={<Error />} />
				</Routes>
		 </Router>
	 );
}
