import React, { useEffect } from 'react';
import Login from './pages/login';
import SplashScreen from './pages/splash-screen';
import './App.css';

function App() {

  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
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
