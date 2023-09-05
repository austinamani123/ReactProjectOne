import React from 'react';
import { useState } from 'react';
import Square from './Square';
import ColorInput from './ColorInput';

const Content = () => {
	const [color, setColor] = useState('');
	const [divBackgroundColor, setDivBackgroundColor] = useState('');

	const handleChange = (e) => {
		setColor(e.target.value);

		setDivBackgroundColor(e.target.value);
	};

	const squareStyle = {
		backgroundcColor: divBackgroundColor,
	};

	return (
		<main className="Content">
			<Square
				color={color}
				setColor={setColor}
				handleChange={handleChange}
				squareStyle={squareStyle}
			/>
			<ColorInput color={color} setColor={setColor} handleChange={handleChange} />
		</main>
	);
};

export default Content;
