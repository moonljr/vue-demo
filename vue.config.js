const path = require("path");
const configs = require("./config");

// 用于做相应的merge处理
const merge = require("webpack-merge");
const { DefinePlugin } = require("webpack");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

const isPro = process.env.NODE_ENV === "production";
const cfg = isPro ? configs.build.env : configs.dev.env;

const resolve = dir => {
  return path.join(__dirname, dir);
};

module.exports = {
  publicPath: "/",
  outputDir: "dist",
  productionSourceMap: true,
  lintOnSave: false,
  // 是否使用包含运行时编译器的 Vue 构建版本
  runtimeCompiler: true,
  chainWebpack: config => {
    config.module
      .rule("images")
      .use("url-loader")
      .tap(options =>
        merge(options, {
          limit: 5120
        })
      );

    config.resolve.alias
      .set("@", resolve("src"))
      .set("_lib", resolve("src/common"))
      .set("_com", resolve("src/components"))
      .set("_img", resolve("src/images"))
      .set("_ser", resolve("src/services"));

    config.plugin("define").tap(args => {
      let name = "process.env";

      args[0][name] = merge(args[0][name], cfg);

      return args;
    });
  },
  css: {
    modules: false,
    extract: isPro,
    // 为css后缀添加hash
    // extract: {
    //  filename: 'css/[name].[hash:8].css',
    //  chunkFilename: 'css/[name].[hash:8].css'
    //}，
    sourceMap: true,
    loaderOptions: {
      sass: {
        // 向全局sass样式传入共享的全局变量
        data: `@import "./src/assets/styles/variables.scss";`
        // ;$src: "${process.env.VUE_APP_SRC}";
        // data: `$src: "${process.env.VUE_APP_SRC}";`
      }
    }
  },

  configureWebpack: config => {
    // config.plugins = [] // 这样会直接将 plugins 置空

    // 使用 return 一个对象会通过 webpack-merge 进行合并
    if (isPro) {
      return {
        plugins: [
          // 开启 Gzip 压缩
          new CompressionWebpackPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: new RegExp("\\.(js|css)$"),
            threshold: 10240,
            minRatio: 0.8
          }),

          // 使用包分析工具
          new BundleAnalyzerPlugin()
        ]
      };
    }
  },

  devServer: {
    open: false, // 是否自动打开浏览器页面
    host: "127.0.0.1", // 指定使用一个 host。默认是 localhost
    port: 8080, // 端口地址
    https: false, // 使用https提供服务

    // string | Object 代理设置
    proxy: {
      "/api": {
        target: "http://localhost:3000/",
        changeOrigin: true,
        pathRewrite: {'^/api': ''}
      }
    },
    progress: true,

    // 提供在服务器内部的其他中间件之前执行自定义中间件的能力
    before: app => {
      // `app` 是一个 express 实例
    }
  }
};
