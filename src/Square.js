const Square = ({ color, squareStyle, hexValue, isDarkText }) => {
	return (
		<div style={squareStyle} className="Square">
			{color ? <p>{color}</p> : <p>Empty Value</p>}
			<p>{hexValue ? hexValue : null}</p>
		</div>
	);
};

export default Square;
