const Square = ({ color, squareStyle }) => {
	return (
		<div style={squareStyle} className="Square">
			{color ? <p>{color}</p> : <p>Empty Value</p>}
		</div>
	);
};

export default Square;
