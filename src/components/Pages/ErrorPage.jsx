import { NavLink } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center text-xl mt-[300px] ">
        <h2>Opps!!!!!!</h2>
        <button className="bg-green-600 rounded-xl p-4 mt-2 text-white">
            <NavLink to='/'>Go Back</NavLink>
        </button>
    </div>
    );
};

export default ErrorPage;