import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Error from '../pages/Error'
import Card from '../pages/Card'
import About from '../pages/About'
import LayoutBlank from '../layouts/Blank'
import LayoutDefault from '../layouts/Default'

const Router = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route element={<LayoutDefault />}>
               <Route exact path="/" element={<Home />} />
               <Route path="/products/:id" element={<Card />} />
               <Route path="/about" element={<About />} />
            </Route>

            <Route element={<LayoutBlank />}>
               <Route path="*" element={<Error />} />
            </Route>
         </Routes>
      </BrowserRouter>
   )
}

export default Router
