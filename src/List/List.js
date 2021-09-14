import React from "react";
import Greeting from "./Greeting";

function List(props) {
	return (
		<div>
			<ul className="list">
				{props.starts.map((start) => {
					return <Greeting start={start} />;
				})}
			</ul>
		</div>
	);
}

export default List;
