import { Outlet } from "react-router-dom";
import Footer from "./Pages/Footer/Footer";
const Root = () => {
    return (
        <div>
            <div className="lg:m-10">
                <Outlet />
            </div>
            <Footer/>
        </div>
    );
};

export default Root;