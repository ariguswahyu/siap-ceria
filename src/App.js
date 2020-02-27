import React, { useEffect } from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
import Login from './pages/login';
import SplashScreen from './pages/splashscreen';
import Profile from './pages/profile';
import Home from './pages/home';
// import './App.css';
import BottomNavigation from "./component/bottom-navigation";

function App(props) {

  const [isLoading, setIsLoading] = React.useState(true);
  const homeRoute = ["/", "/pilih-loket", "/profil", "/riwayat"];

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
        <Route path="/" exact={true} component={Home} />
        <Route path="/login" exact={true} component={Login} />
        <Route path="/profile" exact={true} component={Profile} />
        <Route path="/home" exact={true} component={Profile} />
        {/* <Route path="/" > <h1>Error 404 | Page Not Found</h1></Route> */}
      </Switch>
      {homeRoute.indexOf(props.location.pathname) !== -1 && <BottomNavigation />}
    </React.Fragment>
  );
}

// export default App;
export default withRouter(App);
