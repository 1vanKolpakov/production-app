import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Loader } from './Loader';


const meta: Meta<typeof Loader> = {
  title: 'shared/Loader',
  component: Loader,
  argTypes: {
  },
  decorators: [withColor]
};

export default meta;



type Story = StoryObj<typeof Loader>;

export const Light: Story = {
  args: {
    // children: 'Text'
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