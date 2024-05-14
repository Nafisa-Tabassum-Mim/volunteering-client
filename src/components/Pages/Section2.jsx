
import { MdStarBorder } from "react-icons/md";


const Section2 = () => {
    return (
        <div>
            <div className="text-center my-4 mx-4 md:mx-24">
                <h3 className="text-4xl font-semibold mb-4 font-serif">Review about our website</h3>
                <p className="text-xl ">We recognize the significance of delivering timely and informative responses to inquiries and feedback, particularly on a volunteering website where user engagement and satisfaction are fundamental. Our team is committed to promptly addressing any concerns or queries raised by volunteers, ensuring that their experience on our platform is enriching and fulfilling</p>
            </div>
            <div className="flex flex-col md:flex-row justify-center m-auto">
                <div className="m-8">
                    <div className="w-full md:w-96 bg-base-100 shadow-xl p-8 my-4">
                        <div className="font-bold text-xl mb-2 font-mono">Excellent collaboration</div>
                        <p className="text-gray-700 text-base">
                            I had a fantastic experience with this volunteering website. The service was exceptional, and the team was incredibly friendly and supportive. They went above and beyond to address my needs and ensure I found meaningful volunteer opportunities. I would highly recommend this platform to anyone looking for a top-notch volunteering experience          </p>
                        <div className="px-6 py-4">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Security</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#Impactful Projects</span>
                        </div>

                        <div className="flex text-4xl justify-around ">
                            <MdStarBorder className="text-yellow-400" /><MdStarBorder className="text-yellow-400" /><MdStarBorder className="text-yellow-400" />
                            <MdStarBorder className="text-yellow-400" />
                            <MdStarBorder />
                        </div>
                    </div>
                </div>

                <div className="m-8">
                    <div className="w-full md:w-96 bg-base-100 shadow-xl p-8 my-4">
                        <div className="font-bold text-xl mb-2 font-mono">Highly Recommend</div>
                        <p className="text-gray-700 text-base">

                            I am incredibly satisfied with the volunteering opportunities I found on this website. They exceeded my expectations in terms of the quality and diversity of projects available. The process of finding and signing up for volunteer opportunities was seamless, and the support from the team was prompt and helpful. I would definitely volunteer through this platform again             </p>
                        <div className="px-6 py-4">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#WebsiteQuality</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#PromptService</span>
                        </div>
                        <div className="flex text-4xl justify-around ">
                            <MdStarBorder className="text-yellow-400" /><MdStarBorder className="text-yellow-400" /><MdStarBorder className="text-yellow-400" />
                            <MdStarBorder className="text-yellow-400" />
                            <MdStarBorder />
                        </div>
                    </div>
                </div>

                <div className="m-8">
                    <div className="w-full md:w-96 bg-base-100 shadow-xl p-8 my-4">
                        <div className="font-bold text-xl mb-2 font-mono">Great Experience</div>
                        <p className="text-gray-700 text-base">
                        I recently engaged with this volunteering platform and had a wonderful experience. The opportunities presented were diverse and meaningful, allowing me to contribute to causes I care about. The platform was user-friendly, making it easy to find and sign up for volunteer activities. The support from the team was also exceptional
                        </p>
                        <div className="px-6 py-6">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#GreatExperience</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#Positivity</span>
                        </div>
                        <div className="flex text-4xl justify-around ">
                            <MdStarBorder className="text-yellow-400" /><MdStarBorder className="text-yellow-400" /><MdStarBorder className="text-yellow-400" />
                            <MdStarBorder className="text-yellow-400" />
                            <MdStarBorder className="text-yellow-400" />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Section2;