import { useLoaderData } from "react-router-dom";


const VolunteerDetails = () => {
    const post = useLoaderData()
    const { thumbnail, post_title, description, category, location, volunteers_needed, deadline, organizer_name, organizer_email } = post

    return (
        <div >
            <h3 className="text-5xl font-semibold font-serif text-center my-4 mx-2">Yolunteer post details</h3>
            <div className="flex justify-center gap-10 my-6 items-center mx-6">
                <h3 className="text-3xl font-semibold font-mono">
                    {post_title}

                </h3>
                <div className="avatar">
                    <div className="w-24 rounded-full ring ring-green-500 ring-offset-base-100 ring-offset-2">
                        <img src={thumbnail} />
                    </div>
                </div>
            </div>

            <h3 className="text-xl font-medium  text-center px-6 md:px-[170px]">
                {description}
            </h3>
            <div className="text-lg font-medium font-mono text-center my-4">
                <h3> Yolunteering service type : {category}</h3>
                <h3>Location : {location}</h3>
                <h3>We need {volunteers_needed} volunteer</h3>
            </div>
            <div className="text-lg font-normal text-center my-4 font-mono">
                <h3>Last date to join {deadline}</h3>
                <h3>{organizer_name}</h3>
                <h3>{organizer_email}</h3>
            </div>
        </div>
    );
};

export default VolunteerDetails;