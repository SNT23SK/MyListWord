// import logo from "./logo.svg";
import React from "react";
import "./App.css";
import AddWord from "./List/AddWord";
import List from "./List/List";

function App() {
	const cards = [
		{ id: 1, eng: "Hello", rus: "Привет" },
		{ id: 2, eng: "World", rus: "МИР" },
	];
	return (
		<div className="App">
			<h1> Привествия </h1>
			<AddWord />
			<List cards={cards} />
		</div>
	);
}
export default App;
