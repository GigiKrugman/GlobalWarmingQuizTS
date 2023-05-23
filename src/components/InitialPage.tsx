interface InitialPageProps {
  startQuiz: () => void;
}

export default function InitialPage({ startQuiz }: InitialPageProps) {
  return (
    <div>
      <h1>Welcome to the Global Warming Quiz</h1>
      <h2>
        The ultimate quiz to test your knowledge regarding the Glocal Warming!{" "}
      </h2>

      <button onClick={startQuiz}>Let's Start</button>
    </div>
  );
}
