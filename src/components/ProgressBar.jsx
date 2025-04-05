<<<<<<< HEAD
import React from "react";

const ProgressBar = ({ value, threshold }) => {
  const progress = Math.min((value / threshold) * 100, 100);

  return (
    <div className="progress-bar">
      {value >= threshold ? (
        <div className="free-gift">
          <p>You got a free Wireless Mouse!</p>
          <p className="get">Get Free Gift</p>
        </div>
      ) : (
        `Add ₹${threshold - value} more to get a free gift!`
      )}
      <div className="bar">
        <div className="fill" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
=======
import React from "react";

const ProgressBar = ({ value, threshold }) => {
  const progress = Math.min((value / threshold) * 100, 100);

  return (
    <div className="progress-bar">
      {value >= threshold ? (
        <div className="free-gift">
          <p>You got a free Wireless Mouse!</p>
          <p className="get">Get Free Gift</p>
        </div>
      ) : (
        `Add ₹${threshold - value} more to get a free gift!`
      )}
      <div className="bar">
        <div className="fill" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
>>>>>>> 05f1d3aaa41f1188034041fedf0345b92658c662
