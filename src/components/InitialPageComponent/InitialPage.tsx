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
      <h3 className="initial--screen--h3">Rules of the game:</h3>
      <h4 className="initial--screen--h4">
        There are 10 Questions regarding the climate change and global warming:
      </h4>
      <p className="initial--screen--paragraph">
        Each Questions has a different grade of difficulty, so the relative
        score will be different!
      </p>
      <ul className="initial--screen--ul">
        <li>
          <span className="span--easy">Easy</span> - 1 point
        </li>
        <li>
          <span className="span--medium">Medium</span> - 2 points
        </li>
        <li>
          <span className="span--hard">Difficult</span> - 3 points
        </li>
      </ul>
      <p className="initial--screen--paragraph">
        Scores from 0 to 5 points:{" "}
        <span className="span--hard">Not Enough! 😩</span>
      </p>
      <p className="initial--screen--paragraph">
        Scores from 5 to 10 points:
        <span className="span--medium">Good Score! 🤓</span>
      </p>
      <p className="initial--screen--paragraph">
        Scores from 0 to 5 points:{" "}
        <span className="span--easy">Amazing Score! 🤩</span>{" "}
      </p>

      <h4 className="initial--screen--h4">Ready to Take the Challenge?</h4>
      <button onClick={startQuiz} className="initial--screen--btn">
        Let's Start
      </button>
    </div>
  );
}
