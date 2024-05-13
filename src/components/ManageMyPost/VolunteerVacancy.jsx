import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../firebase/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";

const VolunteerVacancy = () => {
    const { user } = useContext(AuthContext)
    const [posts, setPosts] = useState([])


    useEffect(() => {
        fetch(`http://localhost:5000/post?organizer_email=${user?.email}`)
            .then(res => res.json())
            .then((data) => setPosts(data))
    }, [user?.email])

    const handleDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/post/${_id}`, {
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
                            setPosts(remaining);
                        }
                    })

            }
        })
    };


    return (
        <div>
            <div className="overflow-x-auto">
                {
                    // posts.length !== 0 ?
                    posts ?
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
                                                    <Link className="text-white bg-green-500 p-2  rounded-xl hover:bg-blue-300 mr-2">Update</Link>
                                                    <button onClick={() => handleDelete(post._id)} className="text-green-500 border-green-500 border-2 p-2 rounded-xl hover:bg-blue-200">Delete</button>
                                                </td>

                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </>)
                        :
                        (<div className=" h-[400px] w-full flex flex-col justify-center items-center gap-2">
                            <p className="text-2xl font-semibold">Your post Data is empty</p>
                            <p className="text-2xl font-semibold">Add your data <span className="text-green-500">now !</span> </p>
                            <Link  className="btn text-white bg-green-500 ">Add Now !</Link>
                        </div>)

                }
            </div>
        </div>

    );
};

export default VolunteerVacancy;