import React from 'react';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Axios from "axios";



const handleLogin = function (event) {
    let data = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value
    };
    console.log(data);
    // INI ADALAH BENTUK PROMISE JAVASCRIPT
    Axios.get("https://api.github.com/users/" + data.username, {
        //
    })
        .then(function (response) {
            console.log("---- FUNGSI INI MEMANGGIL IDNTITAS AKUN GITHUB LEWAT REST -");
            console.log("---- ini adalah tangkapan dari rest--");
            console.log(response.data);
            console.log("---- --- --");
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(function () { });


    event.preventDefault();
};



function Login() {
    return (
        <form action="">
            <TextField
                type="text"
                label="Username"
                variant="outlined"
                id="username"
                placeholder="isi username github"
            />

            <TextField
                type="password"
                label="Password"
                variant="outlined"
                id="password"
                placeholder="isi password"
            />

            <Button
                variant="contained"
                color="primary"
                type="submit"
                onClick={handleLogin}
            // onClick={
            //     function () {
            //         alert("oke");
            //     }}
            >
                Submit
      </Button>
        </form>
    );
}

export default Login;

