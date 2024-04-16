import Navbar from "../Pages/Navbar/Navbar";
import { useLoaderData,useParams } from 'react-router-dom';



const Details = () => { 
    const homeDetails = useLoaderData() 
    const {id} = useParams()  
    const homes = homeDetails.find(home=>home.id ===id)
    const {title,description,segment_name ,image,} = homes
    console.log(homes)

    return (
        <div>
            <Navbar />
            <div>
                <div className="hero min-h-screen" style={{ backgroundImage: `url(${image})`}}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="   ">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                            <p className="mb-5">{description}</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;