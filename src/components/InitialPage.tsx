interface InitialPageProps {
  startQuiz: () => void;
}

export default function InitialPage({ startQuiz }: InitialPageProps) {
  return (
    <div>
      <h1>Welcome to the Quiz</h1>
      <h2>lorem ipsum and bla bla bla</h2>
      <button onClick={startQuiz}>Let's Start</button>
    </div>
  );
}
