// import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Header from "./header/header";

function App() {
	const [names] = [
		{
			id: 1,
			greeting: "Hello",
			name: "World",
		},
	];
	return (
		<div className="App">
			<form>
				<label> ВВедите Ваше имя</label>
				<input type="text"></input>
			</form>

			<Header names={names}></Header>
		</div>
	);
}

export default App;
