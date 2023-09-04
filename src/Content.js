import React from 'react';
import { useState } from 'react';
import Square from './Square';
import ColorInput from './ColorInput';

const Content = () => {
	const [color, setColor] = useState('');

	const handleChange = (e) => {
		setColor(e.target.value);
	};

	return (
		<main className="Content">
			<Square color={color} setColor={setColor} handleChange={handleChange} />
			<ColorInput color={color} setColor={setColor} handleChange={handleChange} />
		</main>
	);
};

export default Content;
