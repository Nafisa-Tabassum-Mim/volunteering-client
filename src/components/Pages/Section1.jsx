import { FaArrowRight } from "react-icons/fa";

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
                            <button className="btn bg-blue-400 w-full text-white">Buy Now</button>
                        </div>
                    </div>
                </div >
                <div className="m-8 ">
                    <div className="w-96 bg-base-100 shadow-xl p-8 my-4">
                        <h3 className="text-2xl font-bold">Excursions Included</h3>
                        {/* <p ><span className="text-7xl font-bold">$50/</span> Day</p> */}
                        <p className="flex items-center gap-4 mt-2"> <FaArrowRight /> Supports local communities</p>
                        <p className="flex items-center gap-4"> <FaArrowRight />Sustains environments.</p>
                        <p className="flex items-center gap-4"><FaArrowRight />Tourism preserves heritage.</p>
                        <p className="flex items-center gap-4"><FaArrowRight /> Supports local businesses.</p>
                        <p className="flex items-center gap-4"><FaArrowRight />Tourism enriches lives through exploration.</p>

                        <div className="card-actions my-4">
                            <button className="btn bg-blue-400 w-full text-white">Buy Now</button>
                        </div>
                    </div>
                </div >
                <div className="m-8 ">
                    <div className="w-96 bg-base-100 shadow-xl p-8 my-4">
                        <h3 className="text-2xl font-bold">All Inclusive</h3>
                        <p ><span className="text-7xl font-bold">$80/</span> Day</p>
                        <p className="flex items-center gap-4 mt-2"><FaArrowRight /> Tourism drives economies.</p>
                        <p className="flex items-center gap-4"><FaArrowRight /> Tourism shares cultures.</p>
                        <p className="flex items-center gap-4"><FaArrowRight /> Tourism supports local communities.</p>
                        <p className="flex items-center gap-4"><FaArrowRight /> Tourism sustains environments.</p>
                        <p className="flex items-center gap-4"><FaArrowRight /> Tourism builds bridges between people.</p>
                        <p className="flex items-center gap-4"><FaArrowRight /> Tourism shares cultures.</p>

                        <div className="card-actions my-4">
                            <button className="btn bg-blue-400 w-full text-white">Buy Now</button>
                        </div>
                    </div>
                </div >
            </div>
        </div>
    );
};

export default Section1;