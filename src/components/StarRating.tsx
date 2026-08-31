import React, { useState } from "react";

const StarRating = () => {
  const [rating, setRating] = useState<number>(0);
  const [hoveredRating, setHoveredRating] = useState<number>(0);
  const activeRating = hoveredRating || rating;
  return (
    <div>
      <p>Rating: {rating}</p>
      <div onMouseLeave={() => setHoveredRating(0)}>
        {[1, 2, 3, 4, 5].map((num) => (
          <button
            type="button"
            key={num}
            onClick={() => setRating(num)}
            onMouseEnter={() => setHoveredRating(num)}
            style={{
              border: "none",
              background: "transparent",
              fontSize: "32px",
              cursor: "pointer",
              padding: "2px",
              color: activeRating >= num ? "#5B9BD5" : "#B0B0B0",
            }}
          >
            {activeRating >= num ? "★" : "☆"}
          </button>
        ))}
      </div>
    </div>
  );
};

export default StarRating;

// Requirements

// 1. Render 5 stars.

// 2. The user can click a star to select a rating from 1 to 5.

// 3. Display the currently selected rating.

// 4. If the user clicks star 3:
//    - stars 1, 2, and 3 should appear selected
//    - stars 4 and 5 should appear unselected

// 5. Add hover behavior:
//    - when the user hovers over a star, temporarily highlight that star and all stars before it
//    - for example, hovering star 4 should temporarily show 4 highlighted stars

// 6. When the mouse leaves the star-rating area:
//    - remove the temporary hover state
//    - show the actual selected rating again

// 7. Clicking a star while hovering should update the actual selected rating.

// 8. Use React + TypeScript.

// You may use:
// - useState
// - map()
// - mouse events
// - conditional rendering / conditional styling

// Do not use:
// - external star-rating libraries
