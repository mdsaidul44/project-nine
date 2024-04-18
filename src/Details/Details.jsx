import { IoLocationOutline } from "react-icons/io5";
import Navbar from "../Pages/Navbar/Navbar";
import { useLoaderData, useParams } from 'react-router-dom';
import { useEffect } from "react";



const Details = () => {
    const homeDetails = useLoaderData()
    const { id } = useParams()
    const homes = homeDetails.find(home => home.id === id)
    const { title, description, segment_name, image, facilities,price,area,location } = homes
    

    useEffect(()=>{
        document.title  = `Home | ${homes?.segment_name}`
    },[homes])

    return (
        <div>
            <Navbar />
            <div  data-aos="zoom-out" data-aos-duration="1000" className="my-10 ">
                <div className="hero min-h-screen rounded-xl" style={{ backgroundImage: `url(${image})` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className=" hero-content text-center text-neutral-content    ">
                        <div className="">
                            <h1 className="mb-5 text-5xl font-bold text-emerald-400">{title}</h1>
                            <p className="mb-5 text-emerald-100 font-extraLight">{description}</p>
                            <button className="btn btn-primary bg-emerald-500">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div data-aos="zoom-in" data-aos-duration="1000                                                     " className="my-20">
                <div className="card lg:card-side bg-base-300 shadow-xl">
                    <figure><img className="rounded w-[500px]" src={image} alt="Album" /></figure>
                    <div className="card-body p-10">
                        <h2 className="card-title text-3xl font-bold">{segment_name}</h2>
                        <div className="flex justify-between">
                            <div>
                                <p className="underline">Facilities:</p>
                                {
                                    facilities.map(data => <li key={id}>{data}</li>)
                                }
                            </div>
                            <div className="mr-10">
                                <p ><span className="text-lime-100">Price:</span> <span className=" text-sm ">{price}</span></p>
                                <p><span className="text-lime-100">Area: </span> <span className="text-gray-300 text-sm"> {area}</span> <span className="text-sm">Sq ft</span></p>
                            </div>
                        </div>
                        <p className="flex gap-2"><IoLocationOutline className="mt-1" />  {location}</p> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;