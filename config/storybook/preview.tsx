import type { Preview } from "@storybook/react";
import React from "react";
import '../../src/app/styles/index.scss'
import { BrowserRouter } from "react-router-dom";
// import 'src/app/styles/index.scss'

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
  ],
  parameters: {

  },
};


export default preview;
