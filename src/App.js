import React, { useEffect } from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
import Login from './pages/login';

import SplashScreen from './pages/splashscreen';
import Home from './pages/home';
import './App.css';
import BottomNavigation from "./component/bottom-navigation";

function App(props) {

  const [isLoading, setIsLoading] = React.useState(true);
  // const homeRoute = ["/", "/pilih-loket", "/profil", "/riwayat"];

  useEffect(() => {
    if (localStorage.getItem("login")) {
      console.log("login");
    } else {
      console.log("belum login");
     props.history.push("/login");
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);
  if (isLoading === true) {
    return <SplashScreen />;
  }

  return (
    <div className="App">
      <React.Fragment>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
      </Switch>
      {/* {homeRoute.indexOf(props.location.pathname) !== -1 && <BottomNavigation />} */}
    </React.Fragment>
      {/* <Home /> */}
    </div>
  );
}

// export default App;
export default withRouter(App);
