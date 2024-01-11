import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button, ThemeButton } from './Button';


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

export const Secondary: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.CLEAR
  },
};

export const Outlined: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE
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
        padding:'2rem 0 2rem'
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

