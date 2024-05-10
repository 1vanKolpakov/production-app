import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Text, TextTheme } from './Text';


const meta: Meta<typeof Text> = {
  title: 'shared/Text',
  component: Text,
  argTypes: {
  },
  decorators: [withColor]
};

export default meta;



type Story = StoryObj<typeof Text>;

export const Light: Story = {
  args: {
    title: 'bla title',
    text: 'bla text'
  },
};

export const onlyTitle: Story = {
  args: {
    title: 'bla title',
  },
};

export const onlyText: Story = {
  args: {
    text: 'bla text'
  },
};

export const Error: Story = {
  args: {
    text: 'bla text',
    title: 'Error title',
    theme: TextTheme.ERROR
  },
};


function withColor(Story: any, context: any) {
  let {theme}  = context.globals;
  function Flex(props: any) {
    return (
      <div
      {...props}
      style={{
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center',
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
  
}