import React from 'react'
import './sass/index.scss'
import App from './components/App'
import { createRoot } from 'react-dom/client'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(<App />)

// console.log('Version ' + require('react').version + ' de REACT')