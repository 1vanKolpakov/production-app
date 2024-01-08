import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import { BuildOptions } from './types/config'
export function buildLoaders(options : BuildOptions): webpack.RuleSetRule[] {

  const {isDev} = options

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const cssLoader = {
      test: /\.s[ac]ss$/i,
      use: [
        // Creates `style` nodes from JS strings
        MiniCssExtractPlugin.loader,
        // Translates CSS into CommonJS
        {
          loader: "css-loader",
          options: {
            modules: {
              auto: (resPath: string) => Boolean(resPath.includes('.module.')),
              localIdentName: isDev ? '[name]__[local]--[hash:base64:8]' : '[hash:base64:8]'
            },
            
          },
        },
        // Compiles Sass to CSS
        "sass-loader",
      ]
    
  }

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  }

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  }

  return [
    fileLoader, svgLoader, typescriptLoader, cssLoader
  ]
}