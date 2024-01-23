import React from "react";



//create your first component
const Home = (props) => {
	return (
		<div className="d-flex justify-content-center calendar">
			<h1 className="digit">
				{
					Math.floor (props.seconds/100000)%10
				}
			</h1>
			<h1 className="digit">
				{
					Math.floor (props.seconds/10000)%10
				}
			</h1>
			<h1 className="digit">
				{
					Math.floor (props.seconds/1000)%10
				}
			</h1>
			<h1 className="digit">
				{
					Math.floor (props.seconds/100)%10
				}
			</h1>
			<h1 className="digit">
				{
					Math.floor (props.seconds/10)%10
				}
			</h1>
			<h1 className="digit">
				{
					Math.floor (props.seconds)%10
				}
			</h1>
			
		</div>
	);
};

export default Home;
