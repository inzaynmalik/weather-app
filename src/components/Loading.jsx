import React, { useState, useEffect } from "react";
import "../App.css"; 

const Loading = () => {
  const [activeDot, setActiveDot] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveDot((prevDot) => (prevDot % 3) + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const renderDots = () => {
    return (
      <div className="dots-container">
        {[1, 2, 3].map((dot) => (
          <span
            key={dot}
            className={`dot${dot === activeDot ? " active" : ""}`}
          >
            .
          </span>
        ))}
      </div>
    );
  };

  return <div className="loading-container">{renderDots()}</div>;
};

export default Loading;
