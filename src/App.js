import React, { useState } from "react";
import StarRating from "./StarRating";
import "./App.css";

export default function App() {
  const [rating1, setRating1] = useState(2);
  const [rating2, setRating2] = useState(5);
  /* :::::::DELETE BELOW AFTER::::::: */
  const [rating3, setRating3] = useState(0);

  return (
    <div className="App">
      <StarRating
        value={rating1}
        onClick={setRating1}
        emptyColor="#bbb"
        filledColor="green"
        size="3x"
      />
      <StarRating
        className="mt d-block"
        starCount={10}
        value={rating2}
        onClick={setRating2}
      />
      {/* :::::::DELETE BELOW AFTER::::::: */}
      <StarRating value={rating3} onClick={setRating3} />
    </div>
  );
}
