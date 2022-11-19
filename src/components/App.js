import Signup from "./Signup"
import Dashboard from "./Dashboard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import React from "react"
import {Container} from 'react-bootstrap'
import AuthProvider from "../context/AuthContext";
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import ForgotPassword from "./ForgotPassword";
function App() {
  return (
    
    
    <Container className = 'd-flex align-items-center justify-content-center' style = {{minHeight:'100vh'}} >
    <div className="w-100" style={{maxWidth:'600px'}}>
    <Router>
    <AuthProvider>
<Routes>
<Route
exact
  path="/dashboard"
  element={
    <PrivateRoute>
      <Dashboard />
    </PrivateRoute>
  }></Route>
  <Route path="/signup" element = {<Signup/>}/>
  <Route path="/login" element = {<Login/>}/>
  <Route path="/forgot-password" component = {<ForgotPassword/>}/>
</Routes>
</AuthProvider>
      </Router>
      </div>
    
    </Container>
  );
}

export default App;