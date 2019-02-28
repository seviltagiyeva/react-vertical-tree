const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const htmlPlugin = new HtmlWebpackPlugin({
  template: './src/index.html',
  fileName: 'index.html',
});

const ENVIRONMENT = process.env.NODE_ENV;
const PRODUCTION = ENVIRONMENT === 'production';
const SOURCEMAP = !PRODUCTION || process.env.SOURCEMAP;

const library = 'react-vertical-tree';
const filename = PRODUCTION ? `${library}.min.js` : `${library}.js`;
const plugins = [htmlPlugin];

if (PRODUCTION) {
  plugins.push(
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(ENVIRONMENT),
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      output: { comments: false, semicolons: false },
      sourceMap: SOURCEMAP,
    }),
  );
}


module.exports = {
  devtool: SOURCEMAP ? 'source-map' : 'none',
  entry: `${__dirname}/src/index.js`,
  externals: {
    react: 'commonjs react',
    'react-dom': 'react-dom',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [`${__dirname}/src`, `${__dirname}/__tests__`],
        exclude: /(node_modules|dist)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css|sass$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(eot|woff|woff2|svg|ttf)([?]?.*)$/,
        use: ['file-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    filename,
    library,
    path: `${__dirname}/dist`,
    libraryTarget: 'commonjs2',
    umdNamedDefine: true,
  },
  plugins,
};
