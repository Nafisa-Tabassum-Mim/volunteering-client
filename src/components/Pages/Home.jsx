import { Link, useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import PostSection from "../Section/PostSection";
import { Helmet } from "react-helmet";
import Section1 from "./Section1";
// import Section1 from "./Section";

const Home = () => {
    const posts = useLoaderData()


    return (
        <div>
            <Helmet>
                <title>Youth volunteer website</title>
            </Helmet>
            <Banner></Banner>

            <section className="mt-12 md:mt-12 mb-24 bg-gray-800 rounded-tr-[100px] md:rounded-tr-[280px] rounded-br-[80px]">
                <div>
                    <h3 className="text-3xl pt-12 font-bold text-center text-[#808000] font-serif">Volunteering Post</h3>
                    <p className="text-xl mx-6 md:mx-24 text-center mb-12 mt-2 text-white"> Engaging in volunteer work can provide a profound sense of purpose and fulfillment. By contributing to causes you care about, you can make a meaningful impact on the lives of others and your community.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-4 ">
                    {
                        posts.slice(0, 6).map(post => <PostSection key={post._id} post={post}></PostSection>)
                    }
                </div>
                <div className="flex justify-center items-center py-6">
                    <Link to='/needvolunteer' className="btn text-center bg-[#808000] bg-opacity-60 text-white">
                        NEED VOLUNTEER
                    </Link>
                </div>

            </section >
            <Section1></Section1>
        </div>
    );
};

export default Home;