import React, { useEffect } from 'react';
import Login from './pages/login';
import SplashScreen from "./pages/splashscreen";
import './App.css';

function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    // if (!dataUser) {
    //   props.history.push("/login");
    // } else if (!dataUserToken) {
    //   props.history.push("/login");
    // }
    if (localStorage.getItem("login")) {
      console.log("login");
    } else {
      console.log("belum login");
      // props.history.push("/login");
      // props.history.push('/login/email');
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
      <Login />
    </div>
  );
}

export default App;
