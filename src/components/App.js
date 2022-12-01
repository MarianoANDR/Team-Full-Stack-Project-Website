
import Signup from "./Signup"
import Dashboard from "./Dashboard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import React from "react"
import {Container} from 'react-bootstrap'
import AuthProvider from "../context/AuthContext";
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import ForgotPassword from "./ForgotPassword";
import Home from "./Home";
import './fontawesome/Fontawesome'
import Post from "./Post";
function App() {
  return (
    
    <>
   <Router>
    <AuthProvider>
<Routes>
<Route
  path="/dashboard"
  element={
    <PrivateRoute>
      <Dashboard />
    </PrivateRoute>
  }></Route>
  <Route path="/post" element = {
  <PrivateRoute>
    <Post/>
    </PrivateRoute>
  }></Route>
  <Route exact path="/" element = {<Home/>}></Route>
  <Route path="/signup" element = {<Signup/>}/>
  <Route path="/login" element = {<Login/>}/>
  <Route path="/forgot-password" element = {<ForgotPassword/>}/>
</Routes>
</AuthProvider>
      </Router>

        </>
  );
}

export default App;
