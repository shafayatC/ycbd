import React, { Component } from 'react'; 
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './dashboard/Login';
import Dashboard from './dashboard/Dashboard';
import {Route, Redirect, Switch} from 'react-router-dom'; 
import MyNav from './MyNav'; 
import Footer from './Footer';
import ErrorPage from './pages/ErrorPage';

class MyRout extends Component{

   
    render(){

     //   var loggedIn = sessionStorage.getItem("login");

        return(

            <div>
               {/* <Route exact path="/" component={Home}/> */}
               <Switch>
                    <Route exact path="/"><MyNav/><Home/><Footer/></Route>
                    <Route exact path="/about">
                    <MyNav/><About/><Footer/></Route>
                    <Route exact path="/contact">
                    <MyNav/><Contact/><Footer/></Route>
                    <Route exact path="/yclogin">
                    <Login/>
                    {/* loggedIn ? <Redirect to="/dashboard"/> : <Login/> */}
                    </Route>
                    <Route exact path="/dashboard">
                    <Dashboard/>
                    </Route>
                    <Route><MyNav/><ErrorPage/><Footer/></Route> {/* wrong page url */}
                </Switch>
            </div>
        )
    }
}
export default MyRout