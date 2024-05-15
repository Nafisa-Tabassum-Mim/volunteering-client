import { useContext } from "react";
import { AuthContext } from "../firebase/AuthProvider";
import  { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from 'sweetalert2'
import { Helmet } from "react-helmet";


const AddVolunteer = () => {

    const [startDate, setStartDate] = useState(new Date());
    const { user } = useContext(AuthContext)
    // console.log(user)

    const handleAddVolunteer = event => {
        event.preventDefault();

        const form = event.target;

        const thumbnail = form.thumbnail.value;
        const post_title = form.post_title.value;
        const description = form.description.value;
        const category= form.category.value;
        const location = form.location.value;
        const volunteers_needed = Number(form.volunteers_needed.value);
        const deadline = form.deadline.value;
        const organizer_name = form.organizer_name.value;
        const organizer_email = form.organizer_email.value;

        const newPost = { thumbnail, post_title, description,category, location, volunteers_needed, deadline, organizer_name,organizer_email }


        // send data to the server
        fetch('https://volunteer-website-server.vercel.app/post', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newPost)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    form.reset()
                    Swal.fire({
                        title: 'Success!',
                        text: 'Volunteer card Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'

                    })
                }
            })
    }

    return (
        <div className='flex justify-center gap-4 flex-col-reverse md:flex-row'>
                 <Helmet>
                <title>Add volunteer post</title>
            </Helmet>
            <div className='relative h-[1200px]'>
                <img src="https://i.ibb.co/xDTDMT2/istockphoto-1188864563-612x612-1.jpg" alt="" />
            </div>
            <div className='card  w-full  shadow-md shadow-roaming  shadow-[#808000] shadow-t-2 my-4 md:my-12'>
                <div className="p-4 md:p-24">
                    <h2 className="text-3xl font-extrabold my-4">Add Volunteer Page </h2>
                    <form onSubmit={handleAddVolunteer}>
                        {/* form  row */}
                        <div className="md:flex mb-8 gap-2">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-medium text-lg text-[#808000]">Thumbnail</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="thumbnail" defaultValue={user.photoURL} placeholder="Thumbnail" className="input input-bordered w-full" required />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2 ">
                                <label className="label ">
                                    <span className="label-text font-medium text-lg text-[#808000]">Post title</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="post_title" placeholder="Post title" className="input input-bordered w-full" required />
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
                                    <input type="text" name="description" placeholder="Description" className="input input-bordered w-full" required />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2 ">
                                <label className="label">
                                    <span className="label-text font-medium text-lg text-[#808000]" >Category</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="category" placeholder="Category" className="input input-bordered w-full" required />
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
                                    <input type="text" name="location" placeholder="Location" className="input input-bordered w-full" required />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2 ">
                                <label className="label">
                                    <span className="label-text font-medium text-lg text-[#808000]" >No of Volunteer</span>
                                </label>
                                <label className="input-group">
                                    <input type="number" name="volunteers_needed" placeholder="No of Volunteer" className="input input-bordered w-full" required />
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
                                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} name="deadline" className="input input-bordered w-full" required/>
                                    {/* <input type="text"  placeholder="deadline"  /> */}
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
                                    <input type="text" name="organizer_name" placeholder="Organizer Name" defaultValue={user.displayName} className="input input-bordered w-full"  required />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2 ">
                                <label className="label">
                                    <span className="label-text font-medium text-lg text-[#808000]" >Organizer Email</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="organizer_email" placeholder="Organizer Email" defaultValue={user.email} className="input input-bordered w-full" required />
                                </label>
                            </div>
                        </div>


                        <input type="submit" value="Add Post" className="btn btn-block bg-[#808000] font-medium text-lg text-white" />

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddVolunteer;