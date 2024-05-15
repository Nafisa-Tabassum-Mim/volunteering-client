import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";

const NeedVolunteer = () => {
    const allPost = useLoaderData()
    const [posts, setPosts] = useState(allPost)
    const [search, setSearch] = useState('')

    const handleSearch = e => {
        e.preventDefault()
        const text = e.target.search.value
        setSearch(text)
    }

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`https://volunteer-website-server.vercel.app/post?search=${search}`)
            setPosts(data)
        }
        getData()
    }, [search])


    return (
        <div>
            <Helmet>
                <title>Need Volunteer</title>
            </Helmet>
            <p className="text-3xl font-semibold text-center my-8">All needed volunteering <span className="text-[#808000] mr-2">posts</span></p>
            {/* form  */}

            <form onSubmit={handleSearch} className="flex justify-center items-center my-4">
                <fieldset className="form-control w-80">
                    <label className="label">
                    </label>
                    <div className="join">
                        <input type="text" placeholder="Search by post title" name='search' className="input input-bordered join-item" />
                        <button className="btn bg-[#808000] join-item text-white">Search</button>
                    </div>
                </fieldset>
            </form>


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