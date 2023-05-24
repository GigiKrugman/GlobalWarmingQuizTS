interface Final {
  finalScore: number;
  resetQuiz: () => void;
}

export default function EndScreen({ finalScore, resetQuiz }: Final) {
  return (
    <div className="final-screen--container">
      <h2>Your Final Score is {finalScore} points</h2>
      <button onClick={resetQuiz}>Start Again</button>
    </div>
  );
}
