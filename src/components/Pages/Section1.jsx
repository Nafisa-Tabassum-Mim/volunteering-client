import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Section1 = () => {
    return (
        <div>
            <div className="text-center my-4 mx-4 md:mx-24">
                <h3 className="text-4xl font-semibold mb-4 font-serif">Volunteering offers a multitude of benefits</h3>
                <p className="text-xl ">Volunteering can provide valuable opportunities for networking, skill-building, and career exploration. It may also enhance your resume and make you more attractive to potential employers.</p>
            </div>
            <div className="flex flex-col md:flex-row justify-center m-auto">

                <div className="m-8 ">
                    <div className="w-96 bg-base-100 shadow-xl p-8 my-4">
                        <h3 className="text-2xl font-bold font-mono">Self development</h3>
                        {/* <p ><span className="text-7xl font-bold">$30/</span> Day</p> */}
                        <p className="flex items-center gap-4 mt-2"> <FaArrowRight /> Personal Fulfillment</p>
                        <p className="flex items-center gap-4"> <FaArrowRight />Skill Development</p>
                        <p className="flex items-center gap-4"><FaArrowRight /> Social Connections</p>
                        <p className="flex items-center gap-4"><FaArrowRight />Improved Mental and Physical Health</p>
                        <p className="flex items-center gap-4"><FaArrowRight />Career Advancement</p>
                        <div className="card-actions my-4">
                            <Link to='/needvolunteer' className="btn bg-green-500 w-full text-white">Join Now</Link>
                        </div>
                    </div>
                </div >
                <div className="m-8 ">
                    <div className="w-96 bg-base-100 shadow-xl p-8 my-4">
                        <h3 className="text-2xl font-bold font-mono">Social improvement</h3>
                        {/* <p ><span className="text-7xl font-bold">$50/</span> Day</p> */}
                        <p className="flex items-center gap-4 mt-2"> <FaArrowRight /> Addressing Inequality</p>
                        <p className="flex items-center gap-4"> <FaArrowRight />Building Stronger Communities</p>
                        <p className="flex items-center gap-4"><FaArrowRight />Promoting Social Justice</p>
                        <p className="flex items-center gap-4"><FaArrowRight /> Creating Lasting Impact</p>
                        <p className="flex items-center gap-4"><FaArrowRight />Fostering Empathy and Compassion</p>
                        <div className="card-actions my-4">
                            <Link to='/needvolunteer' className="btn bg-green-500 w-full text-white">Join Now</Link>
                        </div>
                    </div>
                </div >
                <div className="m-8 ">
                    <div className="w-96 bg-base-100 shadow-xl p-8 my-4">
                        <h3 className="text-2xl font-bold font-mono">Health benefit</h3>
                        {/* <p ><span className="text-7xl font-bold">$80/</span> Day</p> */}
                        <p className="flex items-center gap-4 mt-2"><FaArrowRight /> Supporting Vulnerable Populations</p>
                        <p className="flex items-center gap-4"><FaArrowRight /> Promoting Wellness and Disease Prevention</p>
                        <p className="flex items-center gap-4"><FaArrowRight /> Building Healthcare Capacity</p>
                        <p className="flex items-center gap-4"><FaArrowRight /> Fostering Personal Well-being</p>
                        {/* <p className="flex items-center gap-4"><FaArrowRight /> Improving Public Health</p> */}
                        {/* <p className="flex items-center gap-4"><FaArrowRight /> Tourism shares cultures.</p> */}

                        <div className="card-actions my-4">
                            <Link to='/needvolunteer' className="btn bg-green-500 w-full text-white">Join Now</Link>
                        </div>
                    </div>
                </div >
            </div>
        </div>
    );
};

export default Section1;