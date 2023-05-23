//import { useState } from "react";
import InitialPage from "./components/InitialPage";
import QuestionBox from "./components/Question";
import EndScreen from "./components/EndScreen";
import "./App.css";
import { useState } from "react";
import { QuestionData } from "./QuestionData";

function App() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const startQuiz = () => {
    setQuizStarted(true);
  };

  const onAnswer = (answerIndex: number) => {
    if (answerIndex === QuestionData[currentQuestionIndex].correctAnswerIndex) {
      setScore(score + QuestionData[currentQuestionIndex].score);
    }

    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  if (quizStarted) {
    if (currentQuestionIndex < QuestionData.length) {
      return (
        <div>
          <QuestionBox
            question={QuestionData[currentQuestionIndex]}
            onAnswer={onAnswer}
          />
        </div>
      );
    } else {
      return <EndScreen finalScore={score} />;
    }
  } else {
    return (
      <>
        <div>
          <InitialPage startQuiz={startQuiz} />
        </div>
      </>
    );
  }
}

export default App;
