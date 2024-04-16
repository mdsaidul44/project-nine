import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Register = () => {
    const {createUser} =useContext(AuthContext)
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
                    <input className="input input-bordered input-primary w-96" type="password" name="password" placeholder="Password" required />
                    <br />
                    <button className="btn w-96 btn-primary">Register</button>
                <p>You have an account? Please <Link className="text-green-500 font-bold" to='/login'>Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;