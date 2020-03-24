import Axios from "axios";
import swal from "sweetalert";

let token = localStorage.getItem("userToken");


export let axiosInstance = Axios.create({
    baseURL: "http://localhost/api.simrs.rsudajibarang/api/"
});



// axiosInstance.interceptors.request.use(config => {

//     // console.log("axiosInstance.interceptors.request.use-------- jalan");
//     let token = localStorage.getItem("userToken");
//     // config.headers.Authorization = `Bearer ${token}`
//     // return config;

//     config.headers = Object.assign(
//         {
//             Authorization = `Bearer ${token}`
//         },
//         config.headers
//     );
//     return config;
// });

axiosInstance.interceptors.request.use(config => {
    let token = localStorage.getItem("userToken");
    // console.log("ini dari inter ceptor request");
    // console.log(config.headers);
    config.headers.Authorization = `Bearer ${token}`;
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    // config.headers.Ac = `Bearer ${token}`;
    // config.headers.c
    // config.headers = Object.assign(
    //     {
    //         Authorization: token
    //     },
    //     config.headers
    // );
    return config;
});

axiosInstance.interceptors.response.use(
    function (response) {
        // console.log("axiosInstance.interceptors.response.use-------- jalan");
        return response.data;
    },
    function (error, props) {
        // console.log("function error axiosInstance.interceptors.response.use-------- jalan");
        // console.log(error.response)
        // swal(error.response.statusText, error.response.data.metaData.message, "error");
        // if (error.response.status === 401) {
        //     window.location.href = "/login";
        // }

        return Promise.reject(error);
    }
);
