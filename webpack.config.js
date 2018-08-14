var path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var assetsPath = path.join(__dirname, 'src');

module.exports =
{
    entry :  {
        bundle :  ['webpack-dev-server/client?http://0.0.0.0:8080',
            'webpack/hot/only-dev-server',
           path.resolve(assetsPath,'index.js')],
    },
    output: {
        chunkFilename: '[name].js',
        filename: '[name].js', //
        path: path.join(assetsPath ,"dist/js/"),
        publicPath: 'http://localhost:8080/assets/'
    },
    devServer:
    {
      contentBase: path.resolve(__dirname, '.'),
      hot: false
    },
    module: {
        rules: [
            {
                //tell webpack to use jsx-loader for all *.jsx files
                test: /.jsx?$/,
                loaders: ['babel-loader'],
                include: [path.resolve(assetsPath)]
           }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devtool : '#source-map',

    plugins: [
     new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"development"'
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html'
    }),
     new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
    ]
};
