import Axios from "axios";

let token = localStorage.getItem("userToken");


export let axiosInstance = Axios.create({
    baseURL: "http://localhost/api.simrs.rsudajibarang/api/auth/"
});

axiosInstance.interceptors.request.use(config => {
    let token = localStorage.getItem("userToken");
    config.headers = Object.assign(
        {
            Authorization: token
        },
        config.headers
    );
    return config;
});

axiosInstance.interceptors.response.use(
    function (response) {
        // console.log(response.data);
        return response.data;
    },
    function (error, props) {
        if (error.response.status === 401) {
            window.location.href = "/login";
        }

        return Promise.reject(error);
    }
);
