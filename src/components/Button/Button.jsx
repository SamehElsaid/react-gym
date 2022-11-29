import React from 'react';
import "./Button.css"
const Button = ({title ,color ,textClor}) => {
    return (
      <div>
        <div className="btn">
          {color ? (
            <button
              style={{
                background: color,
                color: textClor,
                border: `2px solid ${color}`,
              }}
            >
              {title}
            </button>
          ) : (
            <button>{title}</button>
          )}
        </div>
      </div>
    );
};

export default Button;