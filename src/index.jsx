/*
import React from 'react'
import ReactDOM from 'react-dom/client'
import './sass/index.scss'
import MyRouter from './components/Router'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
   <React.StrictMode>
	<div className="main-container">
			<MyRouter />
	</div>
   </React.StrictMode>
)
console.log('Version ' + require('react').version + ' de REACT')


*/
import './sass/index.scss'
import React from 'react'
import App from './components/App'
import { createRoot } from 'react-dom/client'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(<App />)
