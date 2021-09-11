import React from "react";
function Header(props) {
	return (
		<h1>
			{props.names.greeting}, {props.names.name}
		</h1>
	);
}
export default Header;
