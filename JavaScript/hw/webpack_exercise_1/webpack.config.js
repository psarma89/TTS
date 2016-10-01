module.exports = {
 entry: "./app/javascript",
 output: {
   path: __dirname + '/dist',
   publicPath: '/',
   filename: 'bundle.js'
 },
 module: {
   loaders: [
     {test: /\.jade$/, loader: "jade"},
     {test: /\.css$/, loader: "style!css"}
   ]
 },
 watch: true
};
