import { useContext } from "react";
import Navbar from "../Navbar/Navbar";
import { AuthContext } from "../../Provider/AuthProvider";


const UpdateProfile = () => {
    const {profileUpdate} = useContext(AuthContext)

    const handleUpdateProfile = e =>{
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const photo = form.get('photo')
        console.log(name,photo)

        profileUpdate(name,photo)
        

    }
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse"> 
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleUpdateProfile} className="card-body">
                            <div className="form-control">
                                <div>
                                <img className="mask mask-circle" src="https://i.ibb.co/ZS3Zvq3/adobe-stock-homes-cul-de-sac-scaled-1-63081f559d3de.webp" />
                                </div>
                                <div className="font-bold text-center text-3xl my-6">
                                    <h1>Profile</h1>
                                </div>
                                <label className="label">
                                    <span className="label-text">User Name</span>
                                </label>
                                <input type="text" placeholder="User Name..." className="input input-bordered" name="name" required />
                            </div>
                            <div className="form-control">
                            <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="Photo URL..." className="input input-bordered" name="photo" required />
                            </div> 
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;