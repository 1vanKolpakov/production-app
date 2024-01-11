import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import AppLink, { AppLinkTheme } from './AppLink';


const meta: Meta<typeof AppLink> = {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {
    theme: AppLinkTheme
  },
  args: {
    to: '/'
  },
  decorators: [withColor]
};

export default meta;



type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY
  },
};

export const Secondary: Story = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.SECONDARY
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