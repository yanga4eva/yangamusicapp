import React from 'react'
import Signup from './Signup'
import Login from './Login'
import Dashboard from './Dashboard'
import ForgotPassword from './ForgotPassword'
import ChartPage from './chart'
import {Container} from 'react-bootstrap'
import {AuthProvider} from "../contexts/AuthContext"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import "@blueprintjs/core/lib/css/blueprint.css"
import "@blueprintjs/icons/lib/css/blueprint-icons.css"
// import './App.css'

// import AuthLayout from "../layouts/Auth/Auth";

// import "../assets/css/chart.css";
// // import "react-notification-alert/dist/animate.css";
// import "../assets/scss/black-dashboard-pro-react.scss";
// import "../assets/demo/demo.css";




function App() {
  return (
    <div >
      <Router>
       <AuthProvider>
          <Switch>
            <PrivateRoute exact path='/' component={Dashboard} />
            <Route path='/signup' component={Signup} />
            <Route path='/login' component={Login} />
            <Route path='/forgotpassword' component={ForgotPassword} />
            <Route path='/chartpage' component={ChartPage} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;

