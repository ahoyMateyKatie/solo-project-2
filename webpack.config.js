const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index.bundle.js",
  },
  mode: "development", // we can say the string it will or what it will be in the package.json script that we will run.  Lookup process.env.NODE_ENV
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],
  devServer: {
    port: "8080", //this is where we put our port.  Put in lower case (? will it get coerced- might be because URL is a string.  Look up)
    open: true, // ?
    /** "hot"
     * enabling and disabling HMR. takes "true", "false" and "only".
     * "only" is used if enable Hot Module Replacement without page
     * refresh as a fallback in case of build failures
     */
    hot: true, // ? related to liveReload- will quickly reload your page
    /** "liveReload"
     * disable live reload on the browser. "hot" must be set to false for this to work
     */
    liveReload: true, // ? related to hot
    historyApiFallback: true, // fall back to entry path every time it loads for react router- let's you go backwards in your browser history.  Thank Max every time you use it.
    static: {
      directory: path.join(__dirname, "/dist"), // this is like a pseudo-bundlememory vs disk storage.  From build up top, with npm run build, we are saving build.  What if we are doing npm run dev and not build- create a temporarily version of the build.  We are storing build temporarily in the RAM/memory- this is hot storage.  The difference between saving and not saving file.  Will go away when you turn the server down.  Pretend to build it.
      publicPath: "/build",
    },
    proxy: {
      "/**": "http://localhost:3000", // ** is the same as *.  Make sure it's very vanilla.  Can have multiple proxy's. // this is where http requests come in
      // you see your html page on port 8080.  We have 1-64,000 ports.
      //express and node are written under the hood in c++.  JS can't interface hardware in your computer- that's why we use node.  Node converts JS into c++.
    },
  },
  resolve: {
    /** "extensions"
     * If multiple files share the same name but have different extensions, webpack will
     * resolve the one with the extension listed first in the array and skip the rest.
     * This is what enables users to leave off the extension when importing
     */
    extensions: [".js", ".jsx", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /.(css|scss)$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
