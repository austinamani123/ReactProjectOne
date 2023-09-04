import React from 'react';

const Square = ({ color }) => {
	return <div className="Square">{color ? <p>{color}</p> : <p>Empty Value</p>}</div>;
};

export default Square;
