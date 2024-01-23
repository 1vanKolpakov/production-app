import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ThemeButton } from 'shared/ui/Button';
import { ThemeSwitcher } from './ThemeSwitcher';


const meta: Meta<typeof ThemeSwitcher> = {
  title: 'widgets/ThemeSwitcher',
  component: ThemeSwitcher,
  argTypes: {
    themeBtn: ThemeButton
  },
  decorators: [withColor]
};

export default meta;



type Story = StoryObj<typeof ThemeSwitcher>;

export const OUTLINE: Story = {
  args: {
    themeBtn: ThemeButton.OUTLINE
  },
};

export const CLEAR: Story = {
  args: {
    themeBtn: ThemeButton.CLEAR
  },
};

export const BACKGROUND: Story = {
  args: {
    themeBtn: ThemeButton.BACKGROUND
  },
};

export const BACKGROUND_INVERTED: Story = {
  args: {
    themeBtn: ThemeButton.BACKGROUND_INVERTED
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

