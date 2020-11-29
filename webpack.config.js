"use strict";
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  resolve: {
    extensions: [".js", ".jsx"],
  },

  entry: {
    main: ["./src/main.js"],
  },

  node: {
    fs: "empty",
    net: "empty",
  },

  output: {
    path: path.resolve(__dirname, "./build"), //  resolve(__dirname) -> 현재 내 파일의 위치 , "./build" =>
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, "./src"),
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader",
      },
      {
        test: /\.(jpg|jpeg|gif|png|svg|ico)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000,
              fallback: "file-loader",
              name: "images/[name].[ext]", // images안에서만 인식할 수 있다 파일을.
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000,
              fallback: "file-loader",
              name: "fonts/[name].[ext]", // fonts는 fonts안에서만 인식
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        context: "./public", // public 안에 있는 index html 인식
        from: "*.*",
      },
    ]),
    new Dotenv(), // Dotenv사용 할 것 이다.
  ],
  devServer: {
    contentBase: "./public",
    host: "localhost",
    port: 3000,
    proxy: {
      "**": "http://localhost:7000", // proxy : 서포터 역할   // ** : 모든 파일, 모든 폴더
    },
  },
  devtool: "eval-source-map",
};

// webpack의 기능은 여러가지가 있다.
// 모바일 어플리케이션을 개발하는 방법 : 네이티브 개발 , 웹 뷰 개발, 크로스플렛폼 하이브리드 개발이 있다.
// 그 중에서 웹 뷰 개발을webpack이라는 녀석이 해줄 수 있다.
// webpack 을 가지고 있으면 브라우저에도 보여줄 수 있고, 어플 로 뽑아낼 수 있다.
// 문제는 webpack을 쓰는것이 쉽지 않다. webpack은 버전이 되게 많다.
// webpack은 버전이 하나 바뀌면 사용방법이 엄청나게 바뀐다.
// webpack을 하나 셋팅을 잘 해놓으면 셋팅해 놓은 webpack을 우리는 계속 사용 해야된다.
