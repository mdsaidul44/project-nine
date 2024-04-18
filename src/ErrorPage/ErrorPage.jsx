import { useEffect } from "react"; 
import { Link } from "react-router-dom";



const ErrorPage = () => {

    useEffect(() => {
        document.title = "ErrorPage"
    }, [])

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-8xl text-emerald-400 font-bold">404 !</h1>
                        <p className="py-6 text-3xl text-emerald-400 "><span className="text-6xl font-semibold text-emerald-300">Oops..</span> Data Not Found </p>
                        <Link to='/'><button className="btn btn-primary">Go Back to Home</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;