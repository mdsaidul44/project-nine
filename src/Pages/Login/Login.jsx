import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaRegEye ,FaRegEyeSlash} from "react-icons/fa6"; 




const Login = () => {
    const { createLogin } = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(false)

    const handleLogin = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password)

        createLogin(email, password)
            .then(result => console.log(result.user))
            .catch(error => console.error(error))
    }
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className="hero min-h-screen rounded-xl bg-base-200">
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        {/* <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div> */}



                        <span>Email</span>
                        <input className="input input-bordered input-primary " type="email" name="email" placeholder="Your Email..." required />
                        <span>Password</span>
                        <div className="flex">
                            <input
                                className="input input-bordered input-primary w-80"
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Password"
                                required />
                            <span className="mt-4 -ml-8" onClick={() => setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <FaRegEye /> : <FaRegEyeSlash />
                                }
                            </span>
                        </div>
                        <br />
                        <button className="btn w-80 btn-primary">Login</button> 
                        <p>You do dot have account. Please <Link className="text-emerald-600 font-bold" to='/register'>Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;