import type { Preview } from "@storybook/react";
import React from "react";
import '../../src/app/styles/index.scss'
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import StoreProvider from '../../src/app/providers/StoreProvider/ui/StoreProvider'

const preview: Preview = {
  globalTypes: {
    theme: {
      name: "Scheme",
      description: "Выбрать темную или светлую тему",
      defaultValue: "both",
      toolbar: {
        icon: "mirror",
        items: ["light", "dark", "both"],
        dynamicTitle: true
      }
    }
  },
  decorators: [
    (Story) => (
      
      <BrowserRouter >
        <Story />
      </BrowserRouter>
    ),
    Story => (
      <StoreProvider >
        <Story />
      </StoreProvider>
    )
  ],
  parameters: {

  },
};


export default preview;
