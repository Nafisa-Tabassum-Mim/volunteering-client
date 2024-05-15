import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../firebase/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify"


const VolunteerVacancy = () => {
    const { user } = useContext(AuthContext)
    const [posts, setPosts] = useState([])
    const [startDate, setStartDate] = useState(null);



    useEffect(() => {
        if (user?.email) {
            const url = (`https://volunteer-website-server.vercel.app/post?organizer_email=${user?.email}`)
            fetch(url, { credentials: 'include' })
                .then(res => res.json())
                .then((data) => setPosts(data))
        }
    }, [user?.email])

    const handleDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'green',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://volunteer-website-server.vercel.app/post/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your vacancy volunteer post has been deleted.',
                                'success'
                            )
                            const remaining = posts.filter(post => post._id !== _id);
                            setPosts(remaining)
                        }
                    })
            }
        })
    };


    const handleUpdateCard = (e, _id) => {
        e.preventDefault();
        const form = e.target;
        const thumbnail = form.thumbnail.value;
        const post_title = form.post_title.value;
        const description = form.description.value;
        const category = form.category.value;
        const location = form.location.value;
        const volunteers_needed = Number(form.volunteers_needed.value);
        const deadline = form.deadline.value;
        const organizer_name = form.organizer_name.value;
        const organizer_email = form.organizer_email.value;

        const updatePost = { thumbnail, post_title, description, category, location, volunteers_needed, deadline, organizer_name, organizer_email }

        fetch(`https://volunteer-website-server.vercel.app/post/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatePost)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount>0) {
                    toast.success('Your volunteer post is updated now!')
                }
            })

    }


    return (
        <div>
            <div className="overflow-x-auto">
                {
                    posts.length !== 0 ?
                        (
                            <>
                                <table className="table">
                                    <caption className="text-lg md:text-2xl text-center font-semibold my-4 font-mono">Seeking volunteers for my project</caption>

                                    {/* head */}
                                    <thead>
                                        <tr className='text-medium md:text-lg font-mono'>
                                            <th>Post Title</th>
                                            <th>Category</th>
                                            <th>Location</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {posts.map((post) => (
                                            <tr key={post._id} className='text-medium md:text-lg font-mono'>
                                                <td>{post.post_title}</td>
                                                <td>{post.category}</td>
                                                <td>{post.location}</td>
                                                <td className="px-2 py-4">
                                                   
                                                    <button className="text-white bg-green-500 p-2 rounded-xl hover:bg-green-300 mr-2" onClick={() => document.getElementById('my_modal_5').showModal()}>Update</button>
                                                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                                        <div className="modal-box">
                                                            <div className="">

                                                                <div className="p-2 ">
                                                                    <h2 className="text-xl font-bold my-4">Be A Volunteer</h2>
                                                                    <form onSubmit={(e) => handleUpdateCard(e, post._id)}>
                                                                        {/* form  row */}
                                                                        <div className="md:flex mb-8 gap-2">
                                                                            <div className="form-control md:w-1/2">
                                                                                <label className="label">
                                                                                    <span className="label-text font-medium text-lg text-[#808000]">Thumbnail</span>
                                                                                </label>
                                                                                <label className="input-group">
                                                                                    <input type="text" name="thumbnail" defaultValue={post.thumbnail} placeholder="Thumbnail" className="input input-bordered w-full" />
                                                                                </label>
                                                                            </div>
                                                                            <div className="form-control md:w-1/2 ">
                                                                                <label className="label ">
                                                                                    <span className="label-text font-medium text-lg text-[#808000]">Post title</span>
                                                                                </label>
                                                                                <label className="input-group">
                                                                                    <input type="text" name="post_title" defaultValue={post.post_title} placeholder="Post title" className="input input-bordered w-full" />
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
                                                                                    <input type="text" name="description" defaultValue={post.description} placeholder="Description" className="input input-bordered w-full" />
                                                                                </label>
                                                                            </div>
                                                                            <div className="form-control md:w-1/2 ">
                                                                                <label className="label">
                                                                                    <span className="label-text font-medium text-lg text-[#808000]" >Category</span>
                                                                                </label>
                                                                                <label className="input-group">
                                                                                    <input type="text" name="category" defaultValue={post.category} placeholder="Category" className="input input-bordered w-full" />
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
                                                                                    <input type="text" name="location" defaultValue={post.location} placeholder="Location" className="input input-bordered w-full" />
                                                                                </label>
                                                                            </div>
                                                                            <div className="form-control md:w-1/2 ">
                                                                                <label className="label">
                                                                                    <span className="label-text font-medium text-lg text-[#808000]" >No of Volunteer</span>
                                                                                </label>
                                                                                <label className="input-group">
                                                                                    <input type="number" name="volunteers_needed" defaultValue={post.volunteers_needed} placeholder="No of Volunteer" className="input input-bordered w-full" />
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
                                                                                    <DatePicker selected={post.deadline} onChange={(date) => setStartDate(date)} name="deadline" className="input input-bordered w-full" required />
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
                                                                                    <input type="text" name="organizer_name" placeholder="Organizer Name" defaultValue={post.organizer_name} className="input input-bordered w-full" readOnly />
                                                                                </label>
                                                                            </div>
                                                                            <div className="form-control md:w-1/2 ">
                                                                                <label className="label">
                                                                                    <span className="label-text font-medium text-lg text-[#808000]" >Organizer Email</span>
                                                                                </label>
                                                                                <label className="input-group">
                                                                                    <input type="text" name="organizer_email" placeholder="Organizer Email" defaultValue={post.organizer_email} className="input input-bordered w-full" readOnly />
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                        <input type="submit" value="Update Post" className="btn btn-block bg-[#808000] font-medium text-lg text-white" />
                                                                    </form>
                                                                </div>

                                                                <form method="dialog">
                                                                    <button className="btn border-[#808000] font-medium border-2 text-lg text-[#808000] w-full">Cancel</button>
                                                                </form>

                                                            </div>
                                                        </div>
                                                    </dialog >
                                                    <button onClick={() => handleDelete(post._id)} className="text-green-500 border-green-500 border-2 p-2 rounded-xl hover:bg-blue-200">Delete</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </>)
                        :
                        (<div className=" my-4 w-full flex flex-col justify-center items-center gap-2">
                            <p className="text-2xl font-semibold text-center">Your didn't add any volunteering project</p>
                            <Link to='/addvolunteer' className="btn text-white bg-green-500 ">Add Now !</Link>
                        </div>)

                }
            </div>
            <ToastContainer></ToastContainer>

        </div>

    );
};

export default VolunteerVacancy;