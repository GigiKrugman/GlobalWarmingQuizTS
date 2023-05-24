export type Question = {
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
      <h3 className="question--box--title">
        Question {question.questionText} of 10
      </h3>
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
