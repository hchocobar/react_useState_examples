import React from "react";

// Import your own components
import Counter from './Counter.jsx';
import DropDownList from './DropDownList.jsx';

const Home = () => {
	return (
		<div className="container">
			<h1 className="text-center mt-5">Hook: useState</h1>
			<Counter/>
			<DropDownList/>
		</div>
	);
};

export default Home;
