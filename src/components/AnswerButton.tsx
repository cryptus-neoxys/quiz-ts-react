import React from "react";
import { AnswerObject } from "../App";

type Props = {
  userAnswer: AnswerObject | undefined;
  answer: string;
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const AnswerButton: React.FC<Props> = ({ userAnswer, answer, callback }) => {
  return (
    <button
      disabled={userAnswer ? true : false}
      value={answer}
      defaultValue={answer}
      onClick={callback}>
      {answer}
    </button>
  );
};

export default AnswerButton;
