import React from "react";
import Translate from "./Translate";

function List(props) {
	return (
		<div>
			<ul className="list">
				{props.cards.map((card) => {
					return <Translate card={card} />;
				})}
			</ul>
		</div>
	);
}

export default List;
