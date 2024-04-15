import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


const Register = () => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className=" bg-gray-900 rounded-xl lg:mx-96 my-10 grid justify-center">
                <form className="card-body">
                    <span>Name</span>
                    <input className="input input-bordered input-primary w-96" type="text" name="name" placeholder="Your Name..." />
                    <span>Photo URL</span>
                    <input className="input input-bordered input-primary w-96" type="text" name="photo" placeholder="Photo URL..." />
                    <span>Email</span>
                    <input className="input input-bordered input-primary w-96" type="email" name="email" placeholder="Your Email..." />
                    <span>Password</span>
                    <input className="input input-bordered input-primary w-96" type="password" name="password" placeholder="Password" />
                    <br />
                    <Link><button className="btn w-96 btn-primary">Register</button></Link>
                </form>
            </div>
        </div>
    );
};

export default Register;