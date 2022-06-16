# Expires 缓存的介绍
Browser 不仅使用缓存来减少http请求，也可以减小http响应的大小，可以让web页面加载更快速。
<br /><br />
Web服务器和Browser使用header来交互，比如Expires。Expires header通过一个时间日期的格式告知browser哪些请求的资源可以直接使用缓存在browser端而不需要服务端返回。

## 原理
利用Expires header可以让browser知道是否当前请求的资源可以直接使用缓存。其格式可以是一个日期格式，比如 **Expires: Fri, 30 May 2021 20:15:00 GMT**
<br /><br />
如果客户端请求的资源当前日期没有超过设置的Expires日期，那么将一直使用缓存在Browser端的，也不会产生请求，这样可以减少http请求的次数。
<br /><br />
但是必须得清楚的是，首次访问某个资源一定会由服务端返回，http的数量不会优化。这个很容易理解，只有从服务端返回过至少一次才可以缓存在browser。

## 问题
那么服务器端如果更新了文件，我们该则么处理呢？因为Expires的默认行为是不会向服务器端产生请求如果时间日期没有过期。那么解决方法就是直接生成一个不同名字的文件，让browser重新请求。这样就可以获取更新版本的文件。原来的文件就等着让它自己过期或者手动清理回收。

## 扩展
Expires是从http1.1之前就存在的，现在已经基本被Cache-Control: max-age 替代了。它的缺点就是Expires设置的时间是相对于服务器的，也就是说，如果用户在客户端自己更改了时间，那么这个Expires将会没有意义。那么我们在下一章来解读一下Cache-Control: max-age 的使用方法
