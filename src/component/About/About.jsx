import { Link } from "react-router-dom";
import Navbar from "../../Pages/Navbar/Navbar";
import { useEffect } from "react";


const About = () => {

    useEffect(()=>{
        document.title  = "Home | About"
    },[])

    return (
        <div>
            <Navbar/>
            <div className="hero min-h-screen bg-base-300 my-10 rounded-xl">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold text-emerald-400 mb-4">Hello there</h1>
                        <p className="font-semibold text-3xl">This is Tranquil Oasis</p>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <Link to='/contact' className="btn btn-primary">Please Contact Us</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;