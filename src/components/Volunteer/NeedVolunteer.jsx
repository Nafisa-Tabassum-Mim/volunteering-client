import { Link, useLoaderData } from "react-router-dom";

const NeedVolunteer = () => {
    const posts = useLoaderData()
    console.log(posts)
    return (
        <div>
            <p className="text-3xl font-semibold text-center my-8">All needed volunteering <span className="text-[#808000] mr-2">posts</span></p>

            {posts.map((post) => (
                <div key={post._id}>
                    <div className="card  shadow-sm border shadow-[#808000] my-4 mx-4">
                        <div className="avatar flex justify-center md:justify-start">
                            <div className="w-32 m-4 rounded ">
                                <img src={post.thumbnail} />
                            </div>
                        </div>
                        <div className="mx-4">
                            <h1 className="text-xl font-bold md:mt-2 mb-2 font-serif">{post.post_title}</h1>
                            <div className="flex border-b-2 pb-2 ">
                                <p className="flex items-center mr-8 gap-2 font-mono ">  Visitors per year - {post.description} </p>
                            </div>

                            <div className="my-2">
                                <button className="text-[#808000] rounded-2xl bg-[#8080005c] font-semibold px-4 mr-2 mb-2 py-[2px]">We need {post.volunteers_needed} volunteer </button>
                                <button className="text-[#808000] rounded-2xl bg-[#80800061] font-semibold px-4 mr-2 mb-2 py-[2px]">Location - {post.location} </button>
                            </div>
                            <div>
                                <Link to={`/${post._id}`} className="btn mb-2 bg-[#808000] font-semibold text-white"> View Details</Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
    // );
};

export default NeedVolunteer;