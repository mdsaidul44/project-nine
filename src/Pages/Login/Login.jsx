import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { toast } from "react-toastify";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";




const Login = () => {
    const { createLogin, googleLogin, user, githubLogin } = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(false)
    const [LoginError ,setLoginError] = useState('')
    const [success ,setSuccess] = useState('') 

    const Navigate = useNavigate()
    console.log(user)

    const handleLogin = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')

        createLogin(email, password)
            .then(result => {
                console.log(result.user)
                Navigate('/')
                if(result.user){
                    setSuccess('user login in successfully')}
                    
            })
            .catch(error => console.error(error))
            if(password.length < 6){
                setLoginError('please your password must be 6 character or longer')
                return;
            }else if(!/[a-z]/.test(password)){
                setLoginError('please must be provide a lower case')
                return
            }
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result =>{
                console.log(result.user)
                Navigate('/')
            }) 
            .catch(error => console.log(error))
    }

    const handleGithubLogin = () => {
        githubLogin() 
        .then(result =>{
            console.log(result.user)
            Navigate('/')
        })
            .catch(error => console.log(error))
    }

    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className="hero min-h-screen rounded-xl bg-base-200">
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
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
                        <div className="form-control">
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div>
                            {
                                toast.success && <p>{success}</p>
                            }
                            {
                                LoginError && <p>{LoginError}</p>
                            }
                        </div>
                        <br />
                        <button className="btn w-80 btn-primary">Login</button>
                        <p>You do dot have account. Please <Link className="text-emerald-600 font-bold" to='/register'>Register</Link></p>
                    </form>
                    <h1 className="text-center  font-semibold mb-6">Continue With</h1>
                    <div className="text-center flex justify-between mx-32">
                        <div>
                        <button onClick={handleGoogleLogin} className=" bg-white w-10 h-10  btn-primary rounded-full"><FaGoogle className="ml-3"/></button>
                        <p className=" font-semibold">Google</p>
                        </div>
                        <div>
                        <button onClick={handleGithubLogin} className=" bg-white w-10 h-10  btn-primary rounded-full"><FaGithub className="ml-3"/></button>
                        <p className="font-semibold">Github</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;