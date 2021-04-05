---
title: webpack-plugins
date: 2021-03-09
lang: "zh-CN"
sidebar: "auto"
categories:
  - webpack
tags:
  - webpack-plugins
location: HangZhou
---

# Heading

[[toc]]
TODO  未完成

## webpack.BannerPlugin

为每个文件添加头部注释

> Adds a banner to the top of each generated chunk.

```js
import webpack from "webpack";

// string
new webpack.BannerPlugin({
  banner: "hello world",
});

// function
new webpack.BannerPlugin({
  banner: (yourVariable) => {
    return `yourVariable: ${yourVariable}`;
  },
});
Plac;
```

## webpack.DefinePlugin

创建编译时的全局常量。

> The DefinePlugin allows you to create global constants which can be configured at **compile time**.

```js
new webpack.DefinePlugin({
  PRODUCTION: JSON.stringify(true),
  VERSION: JSON.stringify("5fa3b9"),
  BROWSER_SUPPORTS_HTML5: true,
  TWO: "1+1",
  "typeof window": JSON.stringify("object"),
  "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
});
```

## webpack.DllPlugin
>The DllPlugin and DllReferencePlugin provide means to split bundles in a way that can drastically improve build time performance. The term "DLL" stands for Dynamic-link library which was originally introduced by Microsoft.

```js
new webpack.DllPlugin({
  path: path.join(__dirname, "../dllManifest", "[name]-manifest.json"),//absolute path to the manifest json file (output)
  name: "[name]_[chunkhash:8]",
  context: path.resolve(__dirname, "../"),
});
```

## VueLoaderPlugin

const VueLoaderPlugin = require('vue-loader/lib/plugin')

## MiniCssExtractPlugin

const MiniCssExtractPlugin = require('mini-css-extract-plugin')

## DllReferencePlugin

webpack.DllReferencePlugin 可以帮助 webpack 得知哪些包是 dll 负责的，进而避免重复打包

## copy-webpack-plugin

const CopyWebpackPlugin = require('copy-webpack-plugin')
new CopyWebpackPlugin(copyPlugin)

## terser-webpack-plugin

const TerserJSPlugin = require('terser-webpack-plugin')

## optimize-css-assets-webpack-plugin

const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

## clean-webpack-plugin

const CleanWebpackPlugin = require('clean-webpack-plugin')

## compression-webpack-plugin

```js
if (config.build.productionGzip) {
  const CompressionWebpackPlugin = require("compression-webpack-plugin");

  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: new RegExp(
        "\\.(" + config.build.productionGzipExtensions.join("|") + ")$"
      ),
      threshold: 10240,
      minRatio: 0.8,
    })
  );
}
```

## webpack-bundle-analyzer

```js
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
webpackConfig.plugins.push(new BundleAnalyzerPlugin());
```

## html-webpack-plugin

```js
const HtmlWebpackPlugin = require("html-webpack-plugin");

plugins: [
  new HtmlWebpackPlugin({
    filename: "index.html",
    template: "index.ejs",
    hash: true,
    inject: "body",
    chunksSortMode: "none",
    dll: (function() {
      let max = config.build.dllNum;
      let res = [];
      for (let i = 0; i < max; i++) {
        const dllName = require(path.resolve(
          __dirname,
          `../dllManifest/vendor${i}-manifest.json`
        )).name.split("_");
        res.push(`./static/dll/${dllName[0]}.${dllName[1]}.dll.js`);
      }
      return res;
    })(),
  }),
];
```

## friendly-errors-webpack-plugin

```js
const FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin");
const portfinder = require("portfinder");

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port;
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err);
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port;
      // add port to devServer config
      devWebpackConfig.devServer.port = port;

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(
        new FriendlyErrorsPlugin({
          compilationSuccessInfo: {
            messages: [
              `Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`,
            ],
          },
          onErrors: config.dev.notifyOnErrors
            ? utils.createNotifierCallback()
            : undefined,
        })
      );
      resolve(devWebpackConfig);
    }
  });
});
```
