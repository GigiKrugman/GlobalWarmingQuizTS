export type Question = {
  questionNumber: number;
  questionText: string;
  answers: string[];
  correctAnswerIndex: number;
  score: number;
};

interface QuestionBoxProps {
  question: Question;
  onAnswer: (answerIndex: number) => void;
  selectedAnswer: number | null;
}

export default function QuestionBox({
  question,
  onAnswer,
  selectedAnswer,
}: QuestionBoxProps) {
  return (
    <div className="question--box--container">
      <h3 className="question--box--number">
        <span className="span--question--color">
          {" "}
          Question {question.questionNumber} of 10
        </span>
      </h3>
      <h2 className="question--box--text--title">{question.questionText}</h2>
      <div className="questions--btn--container">
        {question.answers.map((answer, index) => {
          let backgroundColor = "";

          if (selectedAnswer === index) {
            backgroundColor =
              question.correctAnswerIndex === index ? "green" : "red";
          }

          return (
            <button
              key={index}
              onClick={() => onAnswer(index)}
              style={{ backgroundColor: backgroundColor }}
              className="question--btn"
            >
              <h4 className="answer--box"> {answer} </h4>
            </button>
          );
        })}
      </div>
    </div>
  );
}
