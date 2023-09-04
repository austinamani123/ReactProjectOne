import React from 'react';

const ColorInput = ({ color, handleChange }) => {
	return (
		<form className="ColorInput">
			<input
				type="text"
				id="ColorInput"
				placeholder="Add Color Name"
				onChange={handleChange}
				value={color}
			/>
		</form>
	);
};

export default ColorInput;
