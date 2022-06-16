# 静态资源内联的介绍
我们接着来聊静态资源内联。静态资源可以是脚本，样式文件，图片等等因为其中不设计数据的动态变换，所以我们以静态来对应动态。我们本章讲一下图片的内联方法和解决的问题。静态图片资源内联就是通过data: URL让web 页面中包含图片单无需任何额外的http请求。

## 原理
静态图片资源内联就是通过data: URL让web 页面中包含图片单无需任何额外的http请求。对的，这么做的目标就是减少http请求的数量，从而提升网站的性能。我们可以借助工程化工具比如webpack自动让尺寸小于设定值的图片自动转换成内联图片，比如webpack 的url-loader, 
```js
// webpack.config.js

const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
    search: './src/search.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]_[chunkhash:8].js'
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name]_[hash:8].[ext]',
              limit: 10240
            }
          }
        ]
      },
      {
        test: /.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name]_[hash:8][ext]',
              limit: 10240
            }
          }
        ]
      }
    ]
  }
};
```
如果想使用url-loader，需要记得安装一下。现在的工具真的对比之前方便了很多。

