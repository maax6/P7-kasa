import { Outlet } from "react-router-dom";
import Header from '../components/Header';

const LayoutBlank = () => {
    return(
        <>
        <Header />
        <Outlet />      
        </>
    )
}

export default LayoutBlank;