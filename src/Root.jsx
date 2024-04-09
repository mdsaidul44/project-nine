import { Outlet } from "react-router-dom"; 
const Root = () => {
    return (
        <div>
            <h1>This is outlet</h1>
            <Outlet/>
        </div>
    );
};

export default Root;