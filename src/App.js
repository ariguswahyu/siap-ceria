import React, { useEffect } from 'react';
import Login from './pages/login';
import { Switch, Route, withRouter } from "react-router-dom";
import SplashScreen from './pages/splashscreen';
import Home from './pages/home';
import './App.css';

function App(props) {

  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {


    if (localStorage.getItem("login")) {
      console.log("login");
    } else {
      console.log("belum login");
      props.history.push("/login");
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  if (isLoading === true) {
    return <SplashScreen />;
  }

  return (
    // <div className="App">
    //   <Home />
    // </div>
    <div>
      <Switch>
        <Route path="/" exact={true}>
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <h1>Error 404 | Page Not Found</h1>
        </Route>
      </Switch>
    </div>
  );
}

// export default App;
export default withRouter(App);
