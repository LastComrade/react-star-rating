import "./App.css";
import { useState } from "react";

function App() {
  const [ratedStar, setRatedStar] = useState(0);

  const handleClick = (e) => {
    setRatedStar(e.target.id);
  };

  return (
    <div className="App">
      <div>
        <h1>Star Rating</h1>
      </div>
      <div className="star-screen">
        <div>
          <span
            className={`star ${
              ratedStar.toString() === "1"
                ? "ratedStar"
                : ratedStar > 1
                ? "lessRatedStar"
                : "nonRatedStar"
            }`}
            id="1"
            onClick={handleClick}
          >
            *
          </span>
          <span> </span>
          <span
            className={`star ${
              ratedStar.toString() === "2"
                ? "ratedStar"
                : ratedStar > 2
                ? "lessRatedStar"
                : "nonRatedStar"
            }`}
            id="2"
            onClick={handleClick}
          >
            *
          </span>
          <span> </span>
          <span
            className={`star ${
              ratedStar.toString() === "3"
                ? "ratedStar"
                : ratedStar > 3
                ? "lessRatedStar"
                : "nonRatedStar"
            }`}
            id="3"
            onClick={handleClick}
          >
            *
          </span>
          <span> </span>
          <span
            className={`star ${
              ratedStar.toString() === "4"
                ? "ratedStar"
                : ratedStar > 4
                ? "lessRatedStar"
                : "nonRatedStar"
            }`}
            id="4"
            onClick={handleClick}
          >
            *
          </span>
          <span> </span>
          <span
            className={`star ${
              ratedStar.toString() === "5"
                ? "ratedStar"
                : ratedStar > 5
                ? "lessRatedStar"
                : "nonRatedStar"
            }`}
            id="5"
            onClick={handleClick}
          >
            *
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
