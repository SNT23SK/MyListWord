import React, { useState } from "react";

function useInputValue(defaultValue = "") {
	const [value, setValue] = useState(defaultValue);
	return {
		bind: { value, onChange: (event) => setValue(event.target.value) },
		clear: () => setValue(""),
		value: () => value,
	};
}

function AddWord() {
	const inputEng = useInputValue();
	const inputRus = useInputValue();
	return (
		<form onSubmit={console.log("click button")}>
			<input {...inputEng.bind}></input>
			<input {...inputRus.bind}></input>
			<button type="submit"> Add word</button>
		</form>
	);
}
export default AddWord;
