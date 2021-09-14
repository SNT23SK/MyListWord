import React from "react";

function Greeting({ start }) {
	return (
		<li>
			{start.greeting}, {start.name}!
		</li>
	);
}
export default Greeting;
