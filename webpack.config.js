/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require("webpack");
const path = require("path");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// Webpack config
module.exports = (env, argv) => {
    // variables
    const isDev = argv.mode === "development";
    const sourcePath = path.join(__dirname, "./src");
    const outPath = path.join(__dirname, "./dist");

    return {
        target: "web",
        context: sourcePath,
        entry: {
            app: "./app.tsx",
        },
        output: {
            path: outPath,
            filename: "[name]-[fullhash].js",
            chunkFilename: "[name]-[fullhash].js",
        },
        resolve: {
            extensions: [".ts", ".tsx", ".js", ".json"],
        },

        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: [
                        {
                            loader: "style-loader",
                        },
                        {
                            loader: "css-loader",
                        },
                        {
                            loader: "sass-loader",
                        },
                    ],
                },
                {
                    test: /\.[jt]sx?$/,
                    exclude: [path.join(__dirname, "node_modules")],
                    use: [
                        {
                            loader: require.resolve("babel-loader"),
                            options: {
                                plugins: [
                                    isDev &&
                                        require.resolve("react-refresh/babel"),
                                ].filter(Boolean),
                                presets: [
                                    "@babel/preset-env",
                                    "@babel/preset-react",
                                    "@babel/preset-typescript",
                                ],
                                babelrc: false,
                                configFile: false,
                                cacheDirectory: true,
                            },
                        },
                    ],
                },
                {
                    test: /\.html$/,
                    use: "html-loader",
                    exclude: path.join(sourcePath, "index.html"),
                },
                {
                    test: /\.(gif|png|jpe?g)$/,
                    loader: "url-loader",
                    options: {
                        limit: 8192,
                    },
                },
                {
                    test: /\.svg$/,
                    use: ["@svgr/webpack", "url-loader"],
                },
                {
                    test: /\.(bmp|mp3|mp4|ogg|wav|eot|ttf|woff|woff2|pdf|ico)$/,
                    loader: "file-loader",
                    options: {
                        outputPath: "assets",
                    },
                },
            ],
        },
        optimization: {
            splitChunks: {
                chunks: "all",
            },
        },

        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                hash: true,
                template: "./index.html",
                favicon: "./favicon.ico",
                meta: {
                    charset: { charset: "utf-8" },
                    "x-ua-compatible": {
                        "http-equiv": "x-ua-compatible",
                        content: "ie=edge",
                    },
                    viewport:
                        "width=device-width, initial-scale=1, shrink-to-fit=no",
                    manifest: "./site.webmanifest",
                },
            }),
            isDev && new ReactRefreshWebpackPlugin(),
        ].filter(Boolean),

        devServer: {
            hot: true,
            port: 4200,
            historyApiFallback: {
                disableDotRule: true,
            },
        },
        devtool: isDev ? "source-map" : false,
    };
};
