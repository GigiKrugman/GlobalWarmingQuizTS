//import { useState } from "react";
import InitialPage from "./components/InitialPageComponent/InitialPage";
import QuestionBox from "./components/QuestionComponent/Question";
import EndScreen from "./components/EndScreenComponent/EndScreen";
import "./App.css";

import { useState } from "react";
import { QuestionData } from "./QuestionData";

function App() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const startQuiz = () => {
    setQuizStarted(true);
  };

  const resetQuiz = () => {
    setQuizStarted(false);
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
  };

  const onAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    if (answerIndex === QuestionData[currentQuestionIndex].correctAnswerIndex) {
      setScore(score + QuestionData[currentQuestionIndex].score);
    }
    setTimeout(() => {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
    }, 1000);
  };

  if (quizStarted) {
    if (currentQuestionIndex < QuestionData.length) {
      return (
        <div>
          <QuestionBox
            question={QuestionData[currentQuestionIndex]}
            onAnswer={onAnswer}
            selectedAnswer={selectedAnswer}
          />
        </div>
      );
    } else {
      return <EndScreen finalScore={score} resetQuiz={resetQuiz} />;
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
