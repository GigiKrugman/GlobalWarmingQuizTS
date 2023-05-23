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
    <div>
      <h1>{question.questionText}</h1>
      <div>
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
            >
              {answer}
            </button>
          );
        })}
      </div>
    </div>
  );
}
