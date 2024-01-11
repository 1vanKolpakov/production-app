import type { Preview } from "@storybook/react";
import { StyleDecorator } from "../../src/shared/config/StyleDecorator/StyleDecorator";
import '../../src/app/styles/index.scss'
import { ThemeDecorator } from "../../src/shared/config/ThemeDecorator/ThemeDecorator";
import { Theme } from "../../src/app/providers/ThemeProvider";
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
  parameters: {

  },
  // decorators: [ThemeDecorator(Theme.DARK)]
};


export default preview;

// export const globalTypes = {
//   schema: {
//     name: "Schema",
//     desc
//   }
// }
