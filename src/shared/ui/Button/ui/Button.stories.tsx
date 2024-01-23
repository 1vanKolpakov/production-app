import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button, ButtonSize, ThemeButton } from './Button';


const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    theme: ThemeButton
  },
  decorators: [withColor]
};

export default meta;



type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Text'
  },
};

export const PrimaryXL: Story = {
  args: {
    children: 'Text',
    size: ButtonSize.XL
  },
};

export const Secondary: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.CLEAR
  },
};

export const SecondaryL: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.CLEAR,
    size: ButtonSize.L
  },
};

export const Outlined: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE
  },
};

export const Square: Story = {
  args: {
    children: '>',
    theme: ThemeButton.BACKGROUND,
    square: true
  },
};

export const SquareL: Story = {
  args: {
    children: '>',
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L
  },
};

export const SquareXL: Story = {
  args: {
    children: '>',
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL
  },
};


function withColor(Story: any, context: any) {
  let {theme}  = context.globals;
  console.log('asdsad',theme)
  function Flex(props: any) {
    return (
      <div
      {...props}
      style={{
        // display: 'flex',
        // justifyContent:'center',
        padding:'2rem 2rem'
      }}
      />
    )
  }

  if(theme === 'light') {
    return (
      <Flex className='app light'>
        <Story />
      </Flex>
    )
    
  }

  if(theme === 'dark') {
    return (
      <Flex className='app dark'>
        <Story />
      </Flex>
    )
    
  }

  // if(scheme === 'both') {
    return (
      <div >
        <Flex className='app light'>
          <Story />
        </Flex>
        <Flex className='app dark'>
          <Story />
        </Flex>
      </div>
    )
  // }
  
}

