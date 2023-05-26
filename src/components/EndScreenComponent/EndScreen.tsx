import { ReactComponent as RightComponent } from "../../assets/Images/correct.svg";
import { ReactComponent as WrongComponent } from "../../assets/Images/wrong.svg";

interface Final {
  finalScore: number;
  correctAnswers: number;
  wrongAnswers: number;
  resetQuiz: () => void;
}

export default function EndScreen({
  finalScore,
  resetQuiz,
  correctAnswers,
  wrongAnswers,
}: Final) {
  let rating = "";
  if (finalScore <= 5) {
    rating = "Not Enough! 😩";
  } else if (finalScore >= 5 && finalScore <= 10) {
    rating = "Good Score! 🤓";
  } else {
    rating = "Amazing Score! 🤩";
  }
  return (
    <div className="final-screen--container">
      <h2>
        Your Final Score is{" "}
        <span className="final--score--span"> {finalScore}</span> points
      </h2>

      <div className="svg-text-container">
        <RightComponent className="right--answer--svg" />
        <h3>Correct answers: {correctAnswers}</h3>
      </div>

      <div className="svg-text-container">
        <WrongComponent className="wrong--answer--svg" />
        <h3>Wrong answers: {wrongAnswers}</h3>
      </div>

      <h3>Rating: {rating}</h3>
      <button onClick={resetQuiz}>Start Again</button>
    </div>
  );
}
