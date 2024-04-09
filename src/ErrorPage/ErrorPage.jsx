import { Link } from "react-router-dom";

 

const ErrorPage = () => {
    return (
        <div>
            <h2 className="text-3xl font-bold">Data Not Found</h2>
            <Link to='/'><button >Go to Home...</button></Link>
        </div>
    );
};

export default ErrorPage;