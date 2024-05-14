import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../firebase/AuthProvider";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify"
import { Helmet } from "react-helmet";


const VolunteerDetails = () => {
    const post = useLoaderData()
    console.log(post)

    const { thumbnail, post_title, description, category, location, volunteers_needed, deadline, organizer_name, organizer_email } = post

    const { user } = useContext(AuthContext)

    const handleVolunteerRequest = event => {
        event.preventDefault();

        const form = event.target;

        const thumbnail = form.thumbnail.value;
        const post_title = form.post_title.value;
        const description = form.description.value;
        const category = form.category.value;
        const location = form.location.value;
        const volunteers_needed = form.volunteers_needed.value;
        const deadline = form.deadline.value;
        const organizer_name = form.organizer_name.value;
        const organizer_email = form.organizer_email.value;
        const volunteer_name = form.volunteer_name.value;
        const volunteer_email = form.volunteer_email.value;
        const suggestion = form.suggestion.value;
        const status = form.status.value;

        const newRequest = { thumbnail, post_title, description, category, location, volunteers_needed, deadline, organizer_name, organizer_email, volunteer_name, volunteer_email, suggestion, status }

        // send data to the server
        fetch('http://localhost:5000/request', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newRequest)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    form.reset()
                    toast.success('Your Request has been submitted')
                }
            })
    }


    return (
        <div >
            <Helmet>
                <title>Volunteer post details</title>
            </Helmet>
            <h3 className="text-5xl font-semibold font-serif text-center my-4 mx-2">Yolunteer post details</h3>
            <div className="flex justify-center md:gap-10 my-6 items-center mx-4">
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
            <div className="text-lg font-medium font-mono text-center my-4 mx-2">
                <h3> Yolunteering service type : {category}</h3>
                <h3>Location : {location}</h3>
                <h3>We need {volunteers_needed} volunteer</h3>
            </div>
            <div className="text-lg font-normal text-center my-4 font-mono mx-2">
                <h3>Last date to join {deadline}</h3>
                <h3>{organizer_name}</h3>
                <h3>{organizer_email}</h3>
            </div>

            {/* volunter modal */}

            <div className="flex justify-center items-center py-6">
                <button className="btn text-center bg-[#808000] bg-opacity-60 text-white" onClick={() => document.getElementById('my_modal_5').showModal()}>BE A VOLUNTEER</button>
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <div className="">

                            <div className="p-2 ">
                                <h2 className="text-xl font-bold my-4">Be A Volunteer</h2>
                                <form onSubmit={handleVolunteerRequest}>
                                    {/* form  row */}
                                    <div className="md:flex mb-8 gap-2">
                                        <div className="form-control md:w-1/2">
                                            <label className="label">
                                                <span className="label-text font-medium text-lg text-[#808000]">Thumbnail</span>
                                            </label>
                                            <label className="input-group">
                                                <input type="text" name="thumbnail" defaultValue={user.photoURL} placeholder="Thumbnail" className="input input-bordered w-full" readOnly />
                                            </label>
                                        </div>
                                        <div className="form-control md:w-1/2 ">
                                            <label className="label ">
                                                <span className="label-text font-medium text-lg text-[#808000]">Post title</span>
                                            </label>
                                            <label className="input-group">
                                                <input type="text" name="post_title" defaultValue={post_title} placeholder="Post title" className="input input-bordered w-full" readOnly />
                                            </label>
                                        </div>
                                    </div>
                                    {/* form row */}
                                    <div className="md:flex mb-8 gap-2">
                                        <div className="form-control md:w-1/2">
                                            <label className="label">
                                                <span className="label-text font-medium text-lg text-[#808000]" >Description</span>
                                            </label>
                                            <label className="input-group">
                                                <input type="text" name="description" defaultValue={description} placeholder="Description" className="input input-bordered w-full" readOnly />
                                            </label>
                                        </div>
                                        <div className="form-control md:w-1/2 ">
                                            <label className="label">
                                                <span className="label-text font-medium text-lg text-[#808000]" >Category</span>
                                            </label>
                                            <label className="input-group">
                                                <input type="text" name="category" defaultValue={category} placeholder="Category" className="input input-bordered w-full" readOnly />
                                            </label>
                                        </div>
                                    </div>
                                    {/* form  row */}
                                    <div className="md:flex mb-8 gap-2">
                                        <div className="form-control md:w-1/2">
                                            <label className="label">
                                                <span className="label-text font-medium text-lg text-[#808000]" >Location</span>
                                            </label>
                                            <label className="input-group">
                                                <input type="text" name="location" defaultValue={location} placeholder="Location" className="input input-bordered w-full" readOnly />
                                            </label>
                                        </div>
                                        <div className="form-control md:w-1/2 ">
                                            <label className="label">
                                                <span className="label-text font-medium text-lg text-[#808000]" >No of Volunteer</span>
                                            </label>
                                            <label className="input-group">
                                                <input type="number" name="volunteers_needed" defaultValue={volunteers_needed} placeholder="No of Volunteer" className="input input-bordered w-full" readOnly />
                                            </label>
                                        </div>
                                    </div>
                                    {/* form  row */}
                                    <div className="mb-8 gap-2">
                                        <div className="form-control w-full">
                                            <label className="label">
                                                <span className="label-text font-medium text-lg text-[#808000]" >Deadline</span>
                                            </label>
                                            <label className="input-group">
                                                {/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} readOnly /> */}
                                                <input type="text" name="deadline" defaultValue={deadline} placeholder="deadline" className="input input-bordered w-full" readOnly />
                                            </label>
                                        </div>
                                    </div>
                                    {/* form row */}
                                    <div className="md:flex mb-8 gap-2">
                                        <div className="form-control md:w-1/2">
                                            <label className="label">
                                                <span className="label-text font-medium text-lg text-[#808000]" >Organizer Name</span>
                                            </label>
                                            <label className="input-group">
                                                <input type="text" name="organizer_name" placeholder="Organizer Name" defaultValue={organizer_name} className="input input-bordered w-full" readOnly />
                                            </label>
                                        </div>
                                        <div className="form-control md:w-1/2 ">
                                            <label className="label">
                                                <span className="label-text font-medium text-lg text-[#808000]" >Organizer Email</span>
                                            </label>
                                            <label className="input-group">
                                                <input type="text" name="organizer_email" placeholder="Organizer Email" defaultValue={organizer_email} className="input input-bordered w-full" readOnly />
                                            </label>
                                        </div>
                                    </div>
                                    {/* form row */}
                                    <div className="md:flex mb-8 gap-2">
                                        <div className="form-control md:w-1/2">
                                            <label className="label">
                                                <span className="label-text font-medium text-lg text-[#808000]" >Volunteer name</span>
                                            </label>
                                            <label className="input-group">
                                                <input type="text" name="volunteer_name" placeholder="Volunteer name" defaultValue={user.displayName} className="input input-bordered w-full" readOnly />
                                            </label>
                                        </div>
                                        <div className="form-control md:w-1/2 ">
                                            <label className="label">
                                                <span className="label-text font-medium text-lg text-[#808000]" >Volunteer email</span>
                                            </label>
                                            <label className="input-group">
                                                <input type="text" name="volunteer_email" placeholder="Volunteer email" defaultValue={user.email} className="input input-bordered w-full" readOnly />
                                            </label>
                                        </div>
                                    </div>
                                    {/* form row */}
                                    <div className="md:flex mb-8 gap-2">
                                        <div className="form-control md:w-1/2">
                                            <label className="label">
                                                <span className="label-text font-medium text-lg text-[#808000]" >Suggestion</span>
                                            </label>
                                            <label className="input-group">
                                                <input type="text" name="suggestion" placeholder="Suggestion" className="input input-bordered w-full" />
                                            </label>
                                        </div>
                                        <div className="form-control md:w-1/2 ">
                                            <label className="label">
                                                <span className="label-text font-medium text-lg text-[#808000]" >Status</span>
                                            </label>
                                            <label className="input-group">
                                                <input type="text" name="status" placeholder="Status" defaultValue='requested' className="input input-bordered w-full" />
                                            </label>
                                        </div>
                                    </div>


                                    <input type="submit" value="Request" className="btn btn-block bg-[#808000] font-medium text-lg text-white" />
                                </form>
                            </div>

                            <form method="dialog">
                                <button className="btn border-[#808000] font-medium border-2 text-lg text-[#808000] w-full">Cancel</button>
                            </form>

                        </div>
                    </div>
                </dialog >
            </div >
            <ToastContainer></ToastContainer>

        </div >
    );
};

export default VolunteerDetails;