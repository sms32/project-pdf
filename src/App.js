import React from 'react';
import Header from './Header';

import Footer from './Footer';
import "./App.css";

// importing components from react-router-dom package
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
 
// import Home component
import Home from "./components/Home";
// import About component
import About from "./components/About";
// import ContactUs component
import ContactUs from "./components/ContactUs";
 
function App() {
    return (
      
        <><div>
        <Header /></div>
        <hr id='hr2'></hr>
            {/* This is the alias of BrowserRouter i.e. Router */}
            <section>
            <Router>
                <Routes>
                    {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
                    <Route
                        exact
                        path="/"
                        element={<Home />}
                    />
 
                    {/* This route is for about component 
          with exact path "/about", in component 
          props we passes the imported component*/}
                    <Route
                        path="/about"
                        element={<About />}
                        
                    />
 
                    {/* This route is for contactus component
          with exact path "/contactus", in 
          component props we passes the imported component*/}
                    <Route
                        path="/contactus"
                        element={<ContactUs />}
                    />
 
                    {/* If any route mismatches the upper 
          route endpoints then, redirect triggers 
          and redirects app to home component with to="/" */}
                    {/* <Redirect to="/" /> */}
                    <Route
                        path="*"
                        element={<Navigate to="/" />}
                    />
                </Routes>
            </Router>
            </section>
            <br></br>
            <br></br>
            <br></br><br></br><br></br>
            <hr id='hr1'></hr>
            <Footer />
        </>
        
    );
}
 
export default App;