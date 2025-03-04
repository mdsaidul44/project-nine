import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner"; 
import Navbar from "../Navbar/Navbar";
import ResidentialCard from "../ResidentialCard/ResidentialCard";
import Intro from "../Intro/Intro";
import { useEffect } from "react";


const Home = () => {

    useEffect(()=>{
        document.title  = "Home | Home"
    },[])
    const home = useLoaderData()  
    return (

        <div>
            <Navbar />
            <div className="mt-10">
                <Banner />
            </div>
            <div className="text-center">
                <Intro/>
            </div>
            <div className="lg:grid-cols-3 grid lg:my-12 lg:gap-28">
                {
                    home.map(item=><ResidentialCard item={item} key={item.id}></ResidentialCard>)
                }
            </div> 
        </div>
    );
};

export default Home;