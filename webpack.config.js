const path = require('path'); //nodejs内置模块
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  //本地服务
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    historyApiFallback: true, //不跳转
    inline: true //实时刷新
  },
  //入口
  entry: './src/main.js',
  //出口
  output: {
    path: path.resolve(__dirname, 'dist'), // d://webpakc/dist
    filename: 'bundle.js' // d://webpakc/dist/bundle.js
  },

  //配置别名和后缀名
  resolve: {
    extensions: [".js", ".json", ".vue"],
    // 设置别名
    alias: {
      '@': resolve('src'), // 这样配置后 @ 可以指向 src 目录

    }
  },
  //loaders
  module: {
    rules: [{
        test: /\.js$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 12192
          }
        }]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(eot|woff2?|ttf|svg)$/,
        use: [{
          loader: "url-loader",
          options: {
            name: "[name]-[hash:5].min.[ext]",
            limit: 5000, // fonts file size <= 5KB, use 'base64'; else, output svg file
            // publicPath: "fonts/",
            // outputPath: "fonts/"
          }
        }]
      }
    ]
  },

  //插件
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: __dirname + "/public/index.html"
    }),
    // 请确保引入这个插件！
    new VueLoaderPlugin()
  ]

};