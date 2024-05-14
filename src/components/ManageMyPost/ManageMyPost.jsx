import { Helmet } from "react-helmet";
import MyVolunteerRequest from "./MyVolunteerRequest";
import VolunteerVacancy from "./VolunteerVacancy";

const ManageMyPost = () => {
    return (
        <div>
            <Helmet>
                <title>Manage my posts</title>
            </Helmet>
            <VolunteerVacancy></VolunteerVacancy>
            <MyVolunteerRequest></MyVolunteerRequest>
        </div>
    );
};

export default ManageMyPost;