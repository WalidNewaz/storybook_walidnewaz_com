import type { Meta, StoryObj } from '@storybook/react';

import '@fontsource/inter';

// Components
import Helpful from '../components/Feedback/Helpful';

// Types
import { HelpfulProps } from '../components/Feedback/Helpful';
import { QuizType } from '../components/ChapterQuiz';

export default {
  title: 'Feedback/Helpful',
  component: Helpful,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} as Meta;

// export default meta;
type Story = StoryObj<typeof Helpful>;

const onYes = () => {
  alert("Thank you for your feedback!");
};

const onNo = () => {
  alert("We're sorry to hear that. We'll strive to improve.");
};

export const Default: Story = {
  args: {
    onYes,
    onNo,
  } as HelpfulProps,
};