import React from "react";
import { Switch } from "react-router-dom";
//import default style
//import 'rsuite/styles/index.less'; // or 'rsuite/dist/rsuite.min.css'
import 'rsuite/dist/styles/rsuite-default.css'
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import { ProfileProvider } from "./context/profile.context";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import './styles/main.scss';
// import default style

function App() {
  return (
    <ProfileProvider>
       <Switch>
          <PublicRoute path='/signin'>
            <SignIn/>
          </PublicRoute>
          <PrivateRoute path='/'>
            <Home/>
          </PrivateRoute>
        </Switch>   
    </ProfileProvider>
           
  );
}

export default App;

