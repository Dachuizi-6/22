# Cache-Control设置的介绍
Expires 的不足指出就是客户端如果修改了时间日期那么就会变得没有意义。在http1.1推出了替代方法，Cache-Control: max-age = 100000。不管Expires还是Cache-Control都是属于强缓存，即只要资源没有超过过期时间就不会向服务器发送请求。

## 原理
Cache-Control: max-age = 100000, 这里100000是以秒为单位，表示自第一次访问之后的100000秒之内都使用缓存。 这样就可以解决Expires的不足。
<br /><br />
Cache-Control 可以在request 和 response 一起设置，但是2个还是有区别的。只有当request 设置 Cache-Control: max-age = 0 ｜ no-store | no-cache 其中的任意一种才会覆盖服务端设置的Cache-Control设置的值。比如，request设置过期为30秒，服务端设置过期60秒，那么就会按照60秒为准，因为request设置的30秒不属于 max-age = 0 ｜ no-store | no-cache 的任何一种。

## 扩展
有时候这个也不能满足我们的需求，因为Cache-Control是以秒为单位的，如果资源刷新的频率是1秒很多次，那么Cache-Control就会产生偏差，造成数据更新延迟。如果是对数据的更新敏感的功能，那么这个是无法满足我们的需求的。