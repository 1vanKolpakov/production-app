import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { NotFoundPage } from './NotFoundPage';


const meta: Meta<typeof NotFoundPage> = {
  title: 'pages/NotFoundPage',
  component: NotFoundPage,
  argTypes: {
  },
  decorators: [withColor]
};

export default meta;



type Story = StoryObj<typeof NotFoundPage>;

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