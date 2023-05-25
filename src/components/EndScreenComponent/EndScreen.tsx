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
    rating = "Not enough!";
  } else if (finalScore >= 5 && finalScore <= 10) {
    rating = "Good score";
  } else {
    rating = "Amazing score!";
  }
  return (
    <div className="final-screen--container">
      <h2>Your Final Score is {finalScore} points</h2>
      <h3>Correct answers: {correctAnswers}</h3>
      <h3>Wrong answers: {wrongAnswers}</h3>
      <h3>Rating: {rating}</h3>
      <button onClick={resetQuiz}>Start Again</button>
    </div>
  );
}
