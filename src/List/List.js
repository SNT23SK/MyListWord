import React from "react";
import Translate from "./Translate";

function List(props) {
	return (
		<div>
			<ul className="list">
				{props.cards.map((card) => {
					return <Translate card={card} key={card.id} />;
				})}
			</ul>
		</div>
	);
}

export default List;
