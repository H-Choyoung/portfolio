// const HtmlWebpackPlugin = require('html-webpack-plugin'); //script 태그를 사용하여 body에 모든 webpack 번들을 포함하는 HTML5 파일을 생성. 수동으로 컴파일해야하는 번거로움을 덜어주고 변경할 때마다 파일을 수정하지 않게 해준다. -> ex: dist/~.html 파일 생성
// // const dotenv = require('dotenv');
// // dotenv.config();
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const path = require('path'); // node.js가 기본으로 제공하는 모듈 파일,폴더,디렉토리 등의 '경로'를 편리하게 설정할 수 있는 기능 제공
// const webpack = require('webpack'); // 여러 개의 자바스크립트 모듈을 하나의 파일로 묶어내는 번들러 

// module.exports = {
//   /**
//    * entry: 웹팩이 빌드할 파일의 시작 위치(디폴트: ./src/index.js)
//    * loaders: js가 아닌 파일들도 유효한 모듈로 변환시켜준다. 설정은 싱글 모듈에 대한 rules 프로퍼티를 정의해야 함(필수 프로퍼티: test, use)
//    *  - test : 변환해야하는 파일 또는 파일들을 식별하는 역할 
//    *  - use : 변환되어야 하는 파일에 대하여 어떤 로더를 사용할지 설정
//    * plugins: 번들된 결과물을 처리함(번들된 js를 난독화하거나 특정 텍스트를 추출하는 등)
//    */
//   entry: `${path.resolve(__dirname, '../src')}/index.tsx`,
//   output: {
//     // output 속성은 번들 결과물의 경로를 설정하고 이름을 지정하는 옵션 등을 추가할 수 있음. (번들링 결과물 설정)
//     // entry 설정은 항상 프로젝트 디렉터리 내부이기 때문에 상대 경로로 하는 반면에 output 설정은 항상 프로젝트 디렉터리 내부라는 보장이 없으므로 절대 경로로 함.
//     filename: '[name].[contenthash].js', //번들파일 이름
//     publicPath: '/', //웹팩 미들웨어 장소, 얜 앞에 . 없어야됨 ./하면 에러
//   },
//   devServer: {
//     contentBase: path.resolve("./build"),
//     index: "index.html",
//     open: true, //dev server 구동 후 브라우저 열기
//     hot: true, //webpack의 HMR기능활성화
//     compress: true, //모든 항목에 대해 gzip압축 사용
//     port: 3010, //접속 포트 설정
//     historyApiFallback: true,//다중 엔트리 일 때 시작시 기본 사용할 페이지를 지정해 줄 수 있음. 
//     liveReload: true,
//   },
//   mode: "none",
//   module: {
//     rules: [
//       // 규칙
//       {
//         test: /\.(ts|tsx|js|jsx)$/,
//         use: 'babel-loader', //.babelrc를 참고하여 es6 -> es5변환
//         exclude: /node_modules/,
//       },
//       {
//         test: /\.html$/,
//         use: [
//           {
//             loader: "html-loader",
//             options: { minimize: true }
//           }
//         ]
//       },
//       {
//         test: /.(jpe?g|png|gif|svg)$/i,
//         use: [
//           {
//             loader: 'file-loader',
//             options: {
//               limit: 8192,
//               name: '/img/[name].[ext]',
//             },
//           },
//         ],
//       },
//       {
//         test: /\.scss$/,
//         use: [MiniCssExtractPlugin.loader, 'css-loader', "sass-loader"] //우->좌로 실행이 됨
//       },
//       {
//         test: /\.css$/,
//         use: [MiniCssExtractPlugin.loader, 'css-loader']
//       }
//     ],
//   },
//   //설정 파일에 설치한 플러그인을 임포트한 후에, plugins 속성에 임포트한 플러그인을 추가
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: 'public/index.html',
//       filename: 'index.html'
//       // env: process.env
//     }),
//     new webpack.ProvidePlugin({
//       React: 'react',
//     }),
//     new webpack.DefinePlugin({
//       "process.env": JSON.stringify(process.env)
//     }),
//         new MiniCssExtractPlugin({
//       filename: 'style.css'
//     }),
//   ],
//   resolve: {
//     //object import나 require로 간단히 특정 모듈의 별칭을 만들 수 있음
//     alias: {
//       '@': path.resolve(__dirname, '../src/'),
//     },
//     //확장자를 순서대로 해석함. 여러파일에서 이름이 동일하지만 다른 확장자를 가진 경우 webpack은 배열의 앞에서부터 파일을 해석하고 남은 것은 해석하지 않음
//     extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json'],
//   },
// }