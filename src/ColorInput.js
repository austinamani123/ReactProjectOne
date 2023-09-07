import React from 'react';

const ColorInput = ({ color, handleChange, setHexValue, isDarkText, setIsDarkText }) => {
	return (
		<form className="ColorInput">
			<input
				type="text"
				id="ColorInput"
				placeholder="Add Color Name"
				onChange={handleChange}
				value={color}
			/>
			<button type="button" onClick={() => setIsDarkText(!isDarkText)}>
				Toggle Text Color
			</button>
		</form>
	);
};

export default ColorInput;
