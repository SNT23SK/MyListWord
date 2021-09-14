// import logo from "./logo.svg";
import React from "react";
import "./App.css";
import AddWord from "./List/AddWord";
import List from "./List/List";

function App() {
	const starts = [
		{ id: 1, greeting: "Hello", name: "World" },
		{ id: 2, greeting: "Byenno", name: "Amigos" },
	];
	return (
		<div className="App">
			<h1> Привествия </h1>
			<AddWord />
			<List starts={starts} />
		</div>
	);
}
export default App;
