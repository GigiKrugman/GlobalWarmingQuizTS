export type Question = {
  questionText: string;
  answers: string[];
  correctAnswerIndex: number;
  score: number;
};

interface QuestionBoxProps {
  question: Question;
  onAnswer: (answerIndex: number) => void;
}

export default function QuestionBox({ question, onAnswer }: QuestionBoxProps) {
  return (
    <div>
      <h1>{question.questionText}</h1>
      <div>
        {question.answers.map((answer, index) => (
          <button key={index} onClick={() => onAnswer(index)}>
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
}
