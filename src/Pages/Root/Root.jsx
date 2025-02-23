import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import ContactUs from './../Shared/Footer/ContactUs';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Root;