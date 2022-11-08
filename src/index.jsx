import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import './styles/index.css'
import Home from './pages/Home'
// import Home from './pages/Home'
// import SignIn from './pages/SignIn'
import Header from './components/Header'
// import Error from './components/Error'
// import About from './pages/About'


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
	<React.StrictMode>
		<Header />
		<Router>
			<Routes>
				<Route exact path="/">
					<Home />
				</Route>
			</Routes>
		</Router>
	</React.StrictMode>
  )



























// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

// import './styles/index.css'
// import Home from './pages/Home'
// import SignIn from './pages/SignIn'
// import Header from './components/Header'
// import Error from './components/Error'
// import About from './pages/About'


// const root = ReactDOM.createRoot(document.getElementById('root'))

// root.render(
// 	<React.StrictMode>
// 		<Header />
// 		<Router>
// 			<Routes>
// 			<Route exact path="/">
// 				<Home />
// 			</Route>
// 			<Route exact path="/SignIn">
// 				<SignIn />
// 			</Route>
// 			<Route exact path="/About">
// 				<About />
// 			</Route>
// 			<Route exact path="/Error">
// 				<Error />
// 			</Route>
// 			</Routes>
// 		</Router>
// 	</React.StrictMode>
//   )
