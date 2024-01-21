// Filename - Home.jsx
import React from "react";
// Importing Link from react-router-dom to 
// navigate to different end points.
import { Link } from "react-router-dom";
import './style.css';

const Home = () => {
	return (<>
		<div id="s">
		<div className="HEADING"><h1>TO INITIATE PDF GENERATION , </h1><h1>CLICK ON ANYONE OF THE IMAGES</h1></div>
           </div>
		   <div>
			<ul className="grid-container"   id="ul1"> 
            
				<li id="L1">
					{/* Endpoint to route to Home component */}
					<Link to="/"><img id="img" src="./permissionlater.jpg" alt="PERMISSION LETTER" /></Link> <h3>OD LETTER</h3>
				</li>
				<li id="L1">
					{/* Endpoint to route to About component */}
					<Link to="/about"><img id="img" src="./permissionlater.jpg" alt="PERMISSION LETTER" /></Link> <h3>PHYSICAL ATTENDANCE LETTER</h3>
				</li>
				<li id="L1">
					{/* Endpoint to route to Contact Us component */}
					<Link to="/contactus">
                    <img id="img" src="./permissionlater.jpg" alt="PERMISSION LETTER" />
</Link> <h3>PERMISSION LETTER</h3>
				</li>
			</ul>
            </div>
	</>	
	);
};

export default Home;
