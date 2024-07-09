import type { Meta, StoryObj } from '@storybook/react';

import '@fontsource/inter';

// Components
import ChapterQuiz from '../components/ChapterQuiz';

// Types
import { QuizType } from '../components/ChapterQuiz';

export default {
  title: 'Quiz/Quiz',
  component: ChapterQuiz,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

// export default meta;
type Story = StoryObj<typeof ChapterQuiz>;

const quizes: QuizType = {
  topic: "Unions, Intersections, and Generics",
  questions: [
    {
      question: "Which of the following are valid colors?",
      options: [
        {
          text: "#OOFZ2",
          correct: false,
          explanation: "This is not a hex value, it's only 5 numbers and includes an Z, making it invalid.",
        },
        {
          text: "#0f08",
          correct: true,
          explanation: "🎉",
        },
        {
          text: "rbga(400 0 1)",
          correct: false,
          explanation: "rbga is a typo of rgba and 400 is larger than it would accept anyway, making it invalid.",
        },
        {
          text: "hotpink",
          correct: true,
          explanation: "🎉",
        },
        {
          text: "hsl(180deg 50% 50%)",
          correct: true,
          explanation: "🎉",
        },
        {
          text: "rgb(255, 0, 0)",
          correct: true,
          explanation: "🎉",
        },
      ],
    },
    {
      question: "Spot the invalid hsl color.",
      options: [
        {
          text: "hsl(0 0% 0% / 20%)",
          correct: false,
          explanation: "This is a valid hsl value.",
        },
        {
          text: "hsl(.5turn 40% 60%)",
          correct: false,
          explanation: "This is a valid hsl value.",
        },
        {
          text: "hsl(2rad 50% 50%)",
          correct: false,
          explanation: "This is a valid hsl value.",
        },
        {
          text: "hsl(5, 0%, 90%)",
          correct: false,
          explanation: "This is a valid hsl value.",
        },
        {
          text: "hsl(0, 0, 0)",
          correct: true,
          explanation: "🎉 You found it, the 2nd and 3rd values should be percentages.",
        },
      ],
    },
  ],
};


export const chapterQuiz: Story = {
  args: {
    quiz: quizes,
  },
};
