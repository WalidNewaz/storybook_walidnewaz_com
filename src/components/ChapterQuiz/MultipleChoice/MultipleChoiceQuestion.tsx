import React from 'react';
import styled from "styled-components";

// Styles
const StyledQuestion = styled.div`
  font-size: 1.2rem;
  padding: 1rem 0;
  background-color: #5f6368;
  color: #fff;
`;

const MultipleChoiceQuestion: React.FC<{ question: string }> = ({
  question,
}) => {
  return (
    <StyledQuestion>
      <p>{question}</p>
    </StyledQuestion>
  );
};

export default MultipleChoiceQuestion;