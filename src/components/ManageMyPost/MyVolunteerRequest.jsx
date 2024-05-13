import  { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";


const MyVolunteerRequest = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/request')
            .then(res => res.json())
            .then((data) => setPosts(data))
    }, [])

    const handleDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: "green",
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/request/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your volunteering request has been deleted.',
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
                posts.length !== 0 ?
                // posts ?
                    (
                        <>
                            <table className="table">
                                <caption className="text-lg md:text-2xl text-center font-semibold my-8 font-mono">My Volunteer request post</caption>

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
                          

                                            <button onClick={() => handleDelete(post._id)} className="text-green-500 border-green-500 border-2 p-2 rounded-xl hover:bg-red-500 hover:text-white">Cancel</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </>)
                        :
                        (<div className=" h-[400px] w-full flex flex-col justify-center items-center gap-2">
                            <p className="text-2xl font-semibold">You didn't apply for any volunteering !</p>
                            <p className="text-2xl font-semibold">Add your data <span className="text-green-500">now !</span> </p>
                            <Link to='/needvolunteer' className="btn text-white bg-green-500 ">Apply Now !</Link>
                        </div>)

                }
            </div>
        </div>

    );
};

export default MyVolunteerRequest;