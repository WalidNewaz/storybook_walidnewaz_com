import React, { useState } from "react";

// Components
import MultipleChoiceQuestion from "./MultipleChoiceQuestion";
import MultipleChoiceAnswer from "./MultipleChoiceAnswer";

// Utils
import { shuffleArray } from "../../../utils/array";

// Types
import { MultipleChoiceType } from "..";

/**
 * A multiple choice component
 * @param params
 * @returns
 */
const MultipleChoice: React.FC<{
  index: number;
  multipleChoice: MultipleChoiceType;
}> = ({ index, multipleChoice }) => {
  // Reshuffle the answer options and cache it
  const [cachedMultipleChoice, setCachedMultipleChoice] =
    useState<MultipleChoiceType>(() => ({
      ...multipleChoice,
      options: shuffleArray(multipleChoice.options),
    }));
  const totalCorrectAnswers = multipleChoice.options.reduce((acc, option) => {
    return option.correct ? acc + 1 : acc;
  }, 0);
  const [_, setCorrectlyAnswered] = useState<number>(0);
  const addAnswer = (index: number, correct: boolean) => {
    setCorrectlyAnswered((prevCorrectlyAnswered) => {
      const currentCount = correct
        ? prevCorrectlyAnswered + 1
        : prevCorrectlyAnswered;
      setCachedMultipleChoice((prevMultipleChoice) => {
        const newOptions = prevMultipleChoice.options.map((option, idx) => {
          // If the answer is incorrect, show the correct answer
          if (!correct && idx === index) {
            return {
              ...option,
              correctnessText: "Try again later.",
            };
          }
          // If the answer is correct, show answer count
          if (idx === index) {
            return {
              ...option,
              correctnessText:
                totalCorrectAnswers > 1
                  ? `${currentCount} of ${totalCorrectAnswers} correct answers.`
                  : "Correct!",
            };
          }
          return option;
        });
        return {
          ...prevMultipleChoice,
          options: newOptions,
        };
      });
      return currentCount;
    });
  };

  return (
    <div
      key={`${cachedMultipleChoice.question.replace(" ", "")}${index}`}
      className="assesment-multiple-choice"
    >
      <MultipleChoiceQuestion question={cachedMultipleChoice.question} />
      {cachedMultipleChoice.options.map((option, optIdx) => (
        <MultipleChoiceAnswer
          key={optIdx}
          index={optIdx}
          optionText={option.text}
          correct={option.correct}
          explanationText={option.explanation}
          correctnessText={option.correctnessText as string}
          addAnswer={addAnswer}
        />
      ))}
    </div>
  );
};

export default MultipleChoice;
