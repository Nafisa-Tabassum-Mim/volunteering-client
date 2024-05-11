import Navbar from '../SharedPages/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../SharedPages/Footer';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;