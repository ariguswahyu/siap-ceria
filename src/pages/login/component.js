import React from 'react';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";



const handleLogin = function (event) {
    let data = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value
    };

    console.log(data);
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
                placeholder="isi username"
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
