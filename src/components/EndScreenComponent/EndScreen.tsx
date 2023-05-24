interface Final {
  finalScore: number;
  resetQuiz: () => void;
}

export default function EndScreen({ finalScore, resetQuiz }: Final) {
  return (
    <div>
      Your FInal Score is {finalScore}
      <button onClick={resetQuiz}>Let's Start</button>;
    </div>
  );
}
