//import { useState } from "react";
import InitialPage from "./components/InitialPage";
import QuestionBox from "./components/Question";
import "./App.css";
import { useState } from "react";
import { QuestionData } from "./QuestionData";

function App() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const startQuiz = () => {
    setQuizStarted(true);
  };

  const onAnswer = (answerIndex: number) => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };
  if (quizStarted) {
    return (
      <div>
        <QuestionBox
          question={QuestionData[currentQuestionIndex]}
          onAnswer={onAnswer}
        />
      </div>
    );
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
