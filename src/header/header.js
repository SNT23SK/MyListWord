import React from "react";
function Header(props) {
	return (
		<h1>
			{props.word}, {props.name}
		</h1>
	);
}
export default Header;
