// import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Header from "./header/header";

function App() {
	const [name, setName] = React.useState([]);
	return (
		<div className="App">
			<form>
				<label> ВВедите Ваше имя</label>
				<input type="text"></input>
			</form>

			<Header word="Hello" name={addName}></Header>
		</div>
	);

	function addName() {
		setName(name.concat({ name }));
	}
}

export default App;
