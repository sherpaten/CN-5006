import React, { useState } from "react";


import meImage from './me.jpg';
// Create our Button component as a functional component.
const ImgButton = (props) => {
    const [showImage, setShowImage] = useState(false);
    const [number, setNumber] = useState(''); // State to hold the input number
    const [squareResult, setSquareResult] = useState(null); // State to hold the square result

    const handleShowImageClick = () => {
        setShowImage(true);
    };

    const handleSquareClick = () => {
        const num = parseFloat(number);
        if (!isNaN(num)) {
            setSquareResult(num * num); // Calculate the square
        } else {
            setSquareResult(null); // Reset if input is invalid
        }
    };

    return (
        <div>
            <button className="ButtonStyle" value={props.label} onClick={props.ClickHandle}>
                {props.label}
            </button>
            {/* New "Show Me" button */}
            <button className="ButtonStyle" onClick={handleShowImageClick}>
                Show Me
            </button>
            {/* Input field for number */}
            <input 
                type="number" 
                value={number} 
                onChange={(e) => setNumber(e.target.value)} 
                placeholder="Enter a number" 
            />
            {/* New "Square" button */}
            <button className="ButtonStyle" onClick={handleSquareClick}>
                Square
            </button>
            {/* Display the square result */}
            {squareResult !== null && (
                <p>The square is: {squareResult}</p>
            )}
            {/* Conditional rendering of the image */}
            {showImage && (
                <img 
                src={meImage} 
                alt="Hi I am Tenzing Norkay" 
                style={{ 
                    width: '150px', 
                    height: 'auto', 
                    borderRadius: '10px', 
                    marginTop: '10px', 
                    border: '2px solid #ccc' 
                }} 
            />
            )}
        </div>
    );
}


// Export the App component.
export default ImgButton;