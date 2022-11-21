import React from 'react'
import ReactDOM from 'react-dom/client'
import './sass/index.scss'
import MyRouter from './Router'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
   <React.StrictMode>
      <MyRouter />
   </React.StrictMode>
)
console.log('Version ' + require('react').version + ' de REACT')
