import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";


const PostSection = ({ post }) => {
    const { _id, thumbnail, post_title, category, deadline } = post
    // console.log(typeof _id)
    // console.log(_id)
    return (
        <div >
            <div className="relative">
                <div className="rounded-6xl card-body flex flex-col items-center">
                    <h3 className="p-2 bg-[#808000] rounded-3xl text-white font-bold absolute left-[80px] top-[62px] z-10">{deadline}</h3>
                    <img className="bg-white p-4 rounded-[60px] w-full h-[270px] md:h-[320px]" src={thumbnail} alt="" />
                    <div className="bg-white card-body w-[15em] md:w-[350px] rounded-[30px]  mt-[-90px]">
                        <h3 className="text-black md:text-xl font-extrabold font-mono">{post_title}</h3>
                        <h3 className="text-lg">{category}</h3>
                        <Link to={`/${_id}`} className="text-lg text-left text-amber-900 flex items-center  gap-2 mt-2">VIEW DETAILS <FaArrowRight /></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PostSection;