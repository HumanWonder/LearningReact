import * as React from 'react';


function Button({ onClick, isSpinning }) {

    const buttonStyle = {
        backgroundColor: '#4CAF50', // Green background
        border: 'none',              // No border
        color: 'white',              // White text
        padding: '15px 32px',       // Padding
        textAlign: 'center',         // Centered text
        textDecoration: 'none',      // No underline
        display: 'inline-block',     // Inline block
        fontSize: '16px',           // Font size
        margin: '4px 2px',          // Margin
        cursor: 'pointer',           // Pointer cursor on hover
        borderRadius: '4px',         // Rounded corners
    };
    return (
        <div>
        <button className="button" style={buttonStyle} onClick={onClick}>
            {isSpinning ? 'Stop' : 'Spin'} {/* Change button text based on isSpinning */}
        </button>
    </div>
    );
}

export default Button;