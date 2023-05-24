interface InitialPageProps {
  startQuiz: () => void;
}

export default function InitialPage({ startQuiz }: InitialPageProps) {
  return (
    <div className="initial--screen--container">
      <h1 className="initial--screen--title">
        Welcome to the Global Warming Quiz
      </h1>
      <h2 className="initial--screen--sub-title">
        The ultimate quiz to test your knowledge regarding the Global Warming!{" "}
      </h2>
      <h3>Rules of the game:</h3>
      <h4>
        There are 10 Questions regarding the climate change and global warming:
      </h4>
      <p>
        Each Questions has a different grade of difficulty, so the relative
        score will be different!
      </p>
      <ol>
        <li>Easy - 1 point</li>
        <li>Medium - 2 point</li>
        <li>Difficult - 3 point</li>
      </ol>
      <h3>Ready to Take the Challenge?</h3>
      <button onClick={startQuiz} className="initial--screen--btn">
        Let's Start
      </button>
    </div>
  );
}
