import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'

export default function LayoutBlank() {
   return (
      <>
         <Header />
         <Outlet />
      </>
   )
}
