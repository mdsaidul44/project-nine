
import Banner from "../Banner/Banner"; 
import Navbar from "../Navbar/Navbar";


const Home = () => {
    return (

        <div>
            <Navbar />
            <div className="mt-10">
                <Banner />
            </div>
            <div>
                <h2 className="text-xl font-bold">This is home</h2>
            </div> 
        </div>
    );
};

export default Home;