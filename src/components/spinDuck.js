import * as React from 'react';
import Button from './button.js';
import duck from '../duck.jpg';

const MIN = 1;
const MAX = 10;

function SpinDuck() {
    const [value, setValue] = React.useState(0);
    // const [rotation, setRotation] = React.useState(0);
    const [isSpinning, setIsSpinning] = React.useState(false); // New state for spinning
    const toggleDuck = () => {
      console.log(isSpinning);
      setIsSpinning((prev) => {console.log("now :",!prev); return !prev}) // Toggle the spinning state
    }
    const handleChange = (e) => {
      setValue(e.target.value);
    };
  
    
    const getBackgroundSize = () => {
      return { backgroundSize: `${(value * 100) / MAX}% 100%` };
    };
  
  // Function to create keyframes
  const createKeyframes = (speed) => {
    const duration = MIN * speed; // Adjust based on your needs
    console.log("duration:", duration, "speed: ", speed);
    return `
        @keyframes App-logo-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(${360 * duration}deg);
          }
        }
      `;
  };
  
  // Effect to inject keyframes into the document
  React.useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = createKeyframes(value);
    document.head.appendChild(styleElement);
  
    // Cleanup on unmount
    return () => {
      document.head.removeChild(styleElement);
    };
  }, [value]);
  return (
    <div className="spin">
        <img
            src={duck}
            className="App-logo"
            alt="logo"
            style={{ animation: isSpinning ? `App-logo-spin infinite ${20 - (value - 1) * 2}s linear` : 'none' }} // Use animation
        />
        <input
            type="range"
            min={MIN}
            max={MAX}
            step="1"
            onChange={handleChange}
            value={value}
            style={getBackgroundSize()}
            disabled={!isSpinning}
        />
        <Button onClick={toggleDuck} isSpinning={isSpinning} />

    </div>
  );
}

export default SpinDuck;