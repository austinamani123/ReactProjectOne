import React from 'react';
import { useState } from 'react';
import colorNames from 'colornames';
import Square from './Square';
import ColorInput from './ColorInput';

const Content = () => {
	const [color, setColor] = useState('');
	const [divBackgroundColor, setDivBackgroundColor] = useState('');
	const [hexValue, setHexValue] = useState('');
	const [isDarkText, setIsDarkText] = useState(true);

	const handleChange = (e) => {
		setColor(e.target.value);
		setHexValue(colorNames(e.target.value));
		setDivBackgroundColor(e.target.value);
	};

	const squareStyle = {
		backgroundColor: divBackgroundColor,
		color: isDarkText ? '#000' : '#fff',
	};

	return (
		<main className="Content">
			<Square
				color={color}
				setColor={setColor}
				handleChange={handleChange}
				squareStyle={squareStyle}
				hexValue={hexValue}
				isDarkText={isDarkText}
			/>
			<ColorInput
				color={color}
				setColor={setColor}
				handleChange={handleChange}
				setHexValue={setHexValue}
				isDarkText={isDarkText}
				setIsDarkText={setIsDarkText}
			/>
		</main>
	);
};

export default Content;
