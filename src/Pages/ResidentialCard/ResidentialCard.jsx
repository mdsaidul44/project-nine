import { Link } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import PropTypes from 'prop-types';




const ResidentialCard = ({item}) => {
    const { id, title, segment_name, description, price, stats, image, facilities, area, location } =item || {}
    console.log(item)
    return (
        <div>
            <div className="card w-96 bg-base-200 shadow-xl">
                <figure><img className="w-full h-[280px]" src={image} alt="Shoes" /></figure>
                <div className="card-body text-stone-200">
                    <h2 className="card-title text-2xl">
                        {title}
                        <div className="badge badge-secondary border-none bg-lime-700">{stats}</div>
                    </h2>
                    <p className="font-semibold">{segment_name}</p>
                    {
                        description.length > 200 ? <p>{description.slice(0, 100)} <Link to={`/details/${id}`} className="text-green-700 font-bold">Read more...</Link></p> : <p>{description}</p>
                    }
                    <span className="underline text-lime-100">Facilities:</span>
                    <div className="flex justify-between">
                        <div>
                            {
                                facilities.map(data => <li key={data.id} className="text-gray-400">{data}</li>)
                            }
                        </div>
                        <div>
                            <p ><span className="text-lime-100">Price:</span> <span className=" text-sm ">{price}</span></p>
                            <p><span className="text-lime-100">Area: </span> <span className="text-gray-300 text-sm"> {area}</span> <span className="text-sm">Sq ft</span></p>
                        </div>
                    </div>
                    <p className="flex gap-2"><IoLocationOutline className="mt-1" />  {location}</p>
                </div>
                <Link to={`/details/${id}`}><button className="btn btn-primary font-bold w-full">View Property</button></Link>
            </div>
        </div>
    );
};
ResidentialCard.propTypes ={
    item: PropTypes.func
}

export default ResidentialCard;