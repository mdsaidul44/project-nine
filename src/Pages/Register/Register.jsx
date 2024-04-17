import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaRegEye ,FaRegEyeSlash} from "react-icons/fa6"; 




const Register = () => {
    const {createUser} =useContext(AuthContext)
    const [ showPassword ,setShowPassword] = useState(false)
    const handleGoogleLogin = e =>{
       e.preventDefault()
       const form = new FormData(e.currentTarget)
       const name = form.get('name')
       const photo = form.get('photo')
       const email = form.get('email')
       const password = form.get('password')
       console.log(name,photo,email,password)

       createUser(email,password)

       .then(result => console.log(result.user))
       .catch(error =>console.log(error))
    }


    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className=" bg-gray-900 rounded-xl lg:mx-96 my-10 grid justify-center">
                <form onSubmit={handleGoogleLogin} className="card-body">
                    <span>Name</span>
                    <input className="input input-bordered input-primary w-96" type="text" name="name" placeholder="Your Name..." required />
                    <span>Photo URL</span>
                    <input className="input input-bordered input-primary w-96" type="text" name="photo" placeholder="Photo URL..." required />
                    <span>Email</span>
                    <input className="input input-bordered input-primary w-96" type="email" name="email" placeholder="Your Email..." required/>
                    <span>Password</span>
                    <div className="flex">
                    <input 
                    className="input input-bordered input-primary w-96" 
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password" 
                    required />
                    <span className="mt-4 -ml-8" onClick={()=>setShowPassword(!showPassword)}>
                        {
                            showPassword ? <FaRegEye/> : <FaRegEyeSlash/>
                        }
                    </span>
                    </div>
                    <br />
                    <button className="btn w-96 btn-primary">Register</button>
                <p>You have an account? Please <Link className="text-green-500 font-bold" to='/login'>Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;