import React, { useState } from 'react';

// Components
import MultipleChoiceQuestion from './MultipleChoiceQuestion';
import MultipleChoiceAnswer from './MultipleChoiceAnswer';

// Types
import { MultipleChoiceType } from '..';

// function shuffleArray<T>(array: T[]): T[] {
//   // Create a copy of the array to avoid modifying the original array
//   const result = array.slice();
  
//   for (let i = result.length - 1; i > 0; i--) {
//       // Generate a random index before the current element
//       const j = Math.floor(Math.random() * (i + 1));
      
//       // Swap the current element with the element at the random index
//       [result[i], result[j]] = [result[j], result[i]];
//   }

//   return result;
// }

/**
 * A multiple choice component
 * @param params
 * @returns
 */
const MultipleChoice: React.FC<{
  index: number;
  multipleChoice: MultipleChoiceType;
}> = ({ index, multipleChoice }) => {
  const [cachedMultipleChoice, setCachedMultipleChoice] =
    useState<MultipleChoiceType>(multipleChoice);
  const totalCorrectAnswers = multipleChoice.options.reduce((acc, option) => {
    return option.correct ? acc + 1 : acc;
  }, 0);
  const [_, setCorrectlyAnswered] = useState<number>(0);
  const addAnswer = (index: number, correct: boolean) => {

    setCorrectlyAnswered((prevCorrectlyAnswered) => {
      const currentCount = correct ? prevCorrectlyAnswered + 1 : prevCorrectlyAnswered;
      setCachedMultipleChoice((prevMultipleChoice) => {
        const newOptions = prevMultipleChoice.options.map((option, idx) => {
          // If the answer is incorrect, show the correct answer
          if (!correct && idx === index) {
            return {
              ...option,
              correctnessText: 'Try again later.'
            };
          }
          // If the answer is correct, show answer count
          if (idx === index) {
            return {
              ...option,
              correctnessText: `${currentCount} of ${totalCorrectAnswers} correct answers.`,
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