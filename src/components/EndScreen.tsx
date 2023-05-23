interface Final {
  finalScore: number;
}

export default function EndScreen({ finalScore }: Final) {
  return <div>Your FInal Score is {finalScore}</div>;
}
