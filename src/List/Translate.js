import React from "react";

function Translate({ card }) {
	return (
		<div className="wrap">
			<div className="card">
				<div className="front">{card.eng}</div>
				<div className="back">{card.rus}</div>
			</div>
		</div>
	);
}
export default Translate;
