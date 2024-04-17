import Navbar from "../../Pages/Navbar/Navbar";



const Contact = () => {
    return (
        <div>
            <Navbar />
            <div>
                <div className="hero min-h-screen ">
                    <div className="hero-content text-center">
                        <div className="max-w-md">
                            <h1 className="text-5xl font-bold text-emerald-400">Tranquil Oasisz</h1>
                            <p className="py-6 text-3xl font-semibold">Residential</p>
                            <p>Copyright © 2024 - All right reserved</p>
                            <p>Contact : <span className="font-semibold"> phone</span> +00124849852</p>
                            <p className="font-semibold">gmail : TranquilOasisz@gamil.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;