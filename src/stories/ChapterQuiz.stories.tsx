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

// React Native chapter quiz
const rnQuizes: QuizType = {
  topic: "React Native Fundamentals",
  questions: [{
    question: "What does React Native render UI elements into?",
    options: [
      {
        text: "WebView",
        correct: false,
        explanation: "React Native uses native components, not WebViews."
      },
      {
        text: "Native components",
        correct: true,
        explanation: "🎉 React Native renders components as native views."
      },
      {
        text: "HTML elements",
        correct: false,
        explanation: "React Native does not render HTML elements."
      },
      {
        text: "Canvas",
        correct: false,
        explanation: "React Native does not use a canvas for rendering."
      }
    ]
  }, {
    question: "What is the purpose of the React Native Bridge?",
    options: [
      {
        text: "To enable communication between JavaScript and native modules",
        correct: true,
        explanation: "🎉 The React Native Bridge facilitates communication between the JavaScript code and the native platform."
      },
      {
        text: "To render UI components",
        correct: false,
        explanation: "The Bridge is not responsible for rendering UI components."
      },
      {
        text: "To manage application state",
        correct: false,
        explanation: "State management is handled by React's state and props, not the Bridge."
      },
      {
        text: "To optimize performance",
        correct: false,
        explanation: "While the Bridge can impact performance, its primary purpose is communication."
      }
    ]
  }, {
    question: "Which of the following is **not** a React Native component?",
    options: [
      {
        text: "<View>",
        correct: false,
        explanation: "🎉 <View> is a core component in React Native."
      },
      {
        text: "<Text>",
        correct: false,
        explanation: "🎉 <Text> is a core component in React Native."
      },
      {
        text: "<Image>",
        correct: false,
        explanation: "🎉 <Image> is a core component in React Native."
      },
      {
        text: "<ScrollView>",
        correct: false,
        explanation: "🎉 <ScrollView> is a core component in React Native."
      },
      {
        text: "<Div>",
        correct: true,
        explanation: "🎉 <Div> is not a core component, it's a web component."
      }
    ]
  }]
}

export const reactNativeQuiz: Story = {
  args: {
    quiz: rnQuizes,
  },
};
