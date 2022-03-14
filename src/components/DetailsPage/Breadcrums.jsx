import React from "react";
import Style from "../../helper.css"

const Breadcrums  = (props) => {
	return (
		<>
		<div className="container">
			<p style={{"text-transform": "capitalize", "padding": "20px" }}>{props.title}</p>
		</div>
	</>
	)
}
export default Breadcrums;
