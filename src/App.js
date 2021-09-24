// import logo from "./logo.svg";
import React from "react";
import "./App.css";
import AddWord from "./List/AddWord";
import List from "./List/List";

function App() {
	const [cards, setCards] = React.useState([
		{ id: 1, eng: "Hello", rus: "Привет" },
		{ id: 2, eng: "World", rus: "МИР" },
	]);

	function addWord(eng, rus) {
		console.log("Boom", eng, rus);

		setCards(
			cards.concat([
				{
					id: Date.now(),
					eng,
					rus,
				},
			])
		);
	}

	return (
		<div className="App">
			<h1> Words </h1>
			<AddWord onCreate={addWord} />
			<List cards={cards} key={cards.id} />
		</div>
	);
}
export default App;
