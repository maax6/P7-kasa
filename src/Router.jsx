import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from'./components/Header'
import SignIn from './pages/SignIn'
import Error from './components/Error'
import About from './pages/About'
export default function MyRouter(){
	return <Router>
		<Header />
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/SignIn" element={<SignIn />} />
			<Route path="/About" element={<About />} />
			<Route path="/Error" element={<Error />} />
		</Routes>
 </Router>
}
