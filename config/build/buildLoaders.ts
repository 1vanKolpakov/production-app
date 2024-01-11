import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { buildCssLoaders } from "./loaders/buildCssLoaders";
import { BuildOptions } from "./types/config";
export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const { isDev } = options;

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const cssLoader = buildCssLoaders(isDev)

  const svgLoader = {
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  };

  const babelLoader = {
    test: /\.(js|ts"jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env"],
      },
    },
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff)$/i,
    use: [
      {
        loader: "file-loader",
      },
    ],
  };

  return [
    fileLoader, 
    svgLoader, 
    babelLoader,
    typescriptLoader, 
    cssLoader
  ];
}
