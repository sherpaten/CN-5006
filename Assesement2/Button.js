import React, { useState } from "react";
import './App.css';
import './calculator.css';
import meImage from './me.jpg';
// Create our Button component as a functional component.
const Button = (props) => {
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
                <img src={meImage} alt="Hi i am tenzing norkay"/>
            )}
        </div>
    );
}

// Main App component
const App = () => {
    return (
        <div className="App">
            <h1>Calculator App</h1>
            <Button label="Click Me" ClickHandle={() => alert('Button clicked!')} />
        </div>
    );
}

// Export the App component.
export default App;