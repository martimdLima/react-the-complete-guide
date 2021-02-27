import axios from "axios";

const instance = axios.create({
    baseURL:
        "https://react-course-project-31af6-default-rtdb.europe-west1.firebasedatabase.app/",
});

export default instance;
