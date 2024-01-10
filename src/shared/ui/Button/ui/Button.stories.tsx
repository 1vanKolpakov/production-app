import type { Meta, StoryObj } from '@storybook/react';

import { Button, ThemeButton } from './Button';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    theme: ThemeButton
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Text'
  },
};

export const Secondary: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.CLEAR
  },
};

export const Outlined: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.CLEAR
  },
};

