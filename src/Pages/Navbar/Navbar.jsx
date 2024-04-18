import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import  { AuthContext } from "../../Provider/AuthProvider"; 


const Navbar = () => {
    const {logOut,user} = useContext(AuthContext)
    console.log(user)
     
    const handleLogOut = () =>{
        logOut() 
    }
    const navLink = <>
        <Link to="/"><a>Home</a></Link>   
        <Link to="/update"><a>Update Profile</a></Link>  
        <Link to='/about'><a>About</a></Link>
        <Link to='/contact'><a>Contact</a></Link>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="gap-4 menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}
                    </ul>
                </div>
                <Link to='/' className="btn font-bold btn-ghost text-xl lg:text-3xl">Tranquil <span className="text-green-600">Oasis</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu gap-4  font-semibold menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end"> 
            <div className="lg:ml-4 flex" >
                {
                    user ? <button onClick={handleLogOut} className="btn">LogOut</button> : <NavLink to='/login'><button className="btn">Log In</button></NavLink>
                }
                <Link to='/register'><a className="btn ml-2">Sign Up</a></Link>
            </div>
            <div className="dropdown dropdown-end ml-2">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src={user ? `${user?.photoURL}`:"https://i.ibb.co/09CxQmr/unnamed.png"} />
                        </div>
                    </div>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                {user?.displayName}
                            </a>
                            <Link to='/update'>Update Profile</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;