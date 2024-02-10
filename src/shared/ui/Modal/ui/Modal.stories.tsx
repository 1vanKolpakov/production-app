import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Modal } from './Modal';


const meta: Meta<typeof Modal> = {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
  },
  decorators: [withColor]
};

export default meta;



type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
  args: {
    children: 'Text'
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

