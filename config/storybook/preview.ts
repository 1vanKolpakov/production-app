import type { Preview } from "@storybook/react";
import { Decorator } from '@storybook/react'
import { StyleDecorator } from "shared/config/StyleDecorator/StyleDecorator";
import 'app/styles/index.scss'
import 'app/styles/variables/globals.scss'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  // decorators: [
  //   (Story) => (
  //     Story()
  //   )
  //   ]
};

// Decorator(StyleDecorator)

export default preview;
