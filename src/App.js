import React, { useEffect } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import BottomNavigation from "./component/bottom-navigation";

import Login from './pages/login';
import SplashScreen from './pages/splashscreen';
import Profile from './pages/profile';
import Home from './pages/home';

function App(props) {

  const [isLoading, setIsLoading] = React.useState(true);
  const homeRoute = ["/", "/home", "/profile", "/login"];


  // const handleBack = () => {
  //   props.history.push("/");
  // };

  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      console.log("login");
      let localStorageku = localStorage.getItem('userToken');
      console.log("ini lokal storage : " + localStorageku);
    } else {
      console.log("belum login");
      props.history.push("/login");
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  if (isLoading === true) {
    return <SplashScreen />;
  }

  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/login" exact component={Login} />
      </Switch>
      {homeRoute.indexOf(props.location.pathname) !== -1 && <BottomNavigation />}
    </React.Fragment>
  );
}

// export default App;
export default withRouter(App);
