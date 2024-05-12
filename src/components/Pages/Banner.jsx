
import { Link} from 'react-router-dom';

const Banner = () => {



    return (
        <div className='flex flex-col md:flex-row bg-[#71c4cc] '>
      
            <div className=' h-full '>
                <div className="carousel carousel-center max-w-[950px]  md:space-x-4 rounded-none  md:rounded-r-[35px]">
                    <div className="carousel-item">
                        <img src="https://i.ibb.co/GW3rM77/depositphotos-190921584-stock-photo-group-of-volunteers-making-high.webp" className="rounded-r-[35px]" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.ibb.co/LS8QkD9/istockphoto-1303107115-612x612.jpg" className="rounded-r-[35px]" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.ibb.co/ZWYxRHm/istockphoto-1333961968-612x612.jpg" className="rounded-r-[35px]" />
                    </div>
                </div>
            </div>


            <div className=''>
                <div className="bg-[#71c4cc] rounded-xl flex items-center justify-center h-full">
                    <div className="text-center">
                        <h1 className="md:text-4xl text-xl font-bold mb-4 text-green-900 font-serif">Become a Volunteer</h1>
                        <p className="md:text-lg text-black mb-2 md:mb-8 font-serif mx-14">Join us in making a difference! Whether you have a few hours to spare or want to get involved in a long-term project, your contribution can create positive change in our community.</p>
                        <Link to='/register' className="btn mb-4 bg-green-400 bg-opacity-60 text-white">Sign Up Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;