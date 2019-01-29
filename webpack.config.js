const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './index.html', 
  filename: 'index.html', 
  inject: 'body'})


const config = {
  mode: "development",
  entry: ['./src/client/index.tsx'],
  output: {
    path: path.resolve(__dirname + '/dist'),
    filename: 'index.js',
    // filename: 'index_bundle.js',
    publicPath: '/'
  },
  target: "web",
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      // {
      //   use: 'babel-loader',
      //   test: /\.(js|jsx)$/,
      //   include: [path.resolve(__dirname + '/src')]
      // },
	  {
        test: /\.(.ts|tsx)?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
    ]
  },
  plugins: [HtmlWebpackPluginConfig],
  devServer: {
    contentBase: path.join(__dirname, "src"),
    compress: true,
    port: 9000,
    historyApiFallback: true
  },
  // externals: {
  //   "react": "React",
  //   "react-dom": "ReactDOM"
  // }
};

module.exports = config
