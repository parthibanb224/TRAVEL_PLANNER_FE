import { Route, Routes } from 'react-router-dom';
import './App.css';
import FrontPage from './Pages/FrontPage';
import Dashboard from './Pages/Dashboard';
import ApplicationLayout from './Pages/ApplicationLayout';
import TripDetailPage from './Pages/TripDetailPage';
import DestinationPage from './Pages/DestinationPage';
import ResetPasswordForm from './components/ResetPasswordForm';
import { useUser } from './context/Users.context';
import { useEffect } from 'react';
import jwtDecode from 'jwt-decode';

function App() {

  const { isLoggedin, setIsLoggedin, setSigninUser } = useUser();
  useEffect(() => {
    let token = sessionStorage.getItem("Authorization");
    if (token) {
      var decoded = jwtDecode(token);
      setSigninUser(decoded.name);
      setIsLoggedin(true);
    }
  })

  return (
    <div >
      <Routes>
        {!isLoggedin ? (
          <>
            <Route path='/' Component={FrontPage}></Route>
            <Route path='/ResetPassword/:token' Component={ResetPasswordForm}></Route>
          </>
        ) : (
          <Route path='/Layout' Component={ApplicationLayout}>
            <Route path='dashboard' Component={Dashboard}></Route>
            <Route path='trip' Component={TripDetailPage}></Route>
            <Route path='destination' Component={DestinationPage}></Route>
          </Route>
        )}
      </Routes>
    </div>
  );
}

export default App;
