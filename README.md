# 小付博客园

### 主要技术栈

##### 前端
`vue` `vue-cli3` `webpack4` `axios` `vue-router` `vuex`

##### 后台
`koa-generator` `koa2` `ali-oss` `gd-bmp` `jsonwebtoken` `koa/multer`

##### 数据库
`mongodb`

##### 服务器相关
`nginx` `pm2` `阿里云服务器` `域名` `oss对象存储`

#### 服务器安装Nginx
首先，你要知道我们的静态资源和后台服务代码都存在nginx服务器的一个目录下

在通过域名解析后，当我们通过域名访问前端静态资源时，会指向你之前在nginx.conf文件里面的root目录，同时会访问你的默认首页index.html

这时，前端已经就绪了，但是因为后台程序是启动在服务器的本地3000端口上，如果直接访问，会存在跨域的问题，这个时候，nginx的主要作用之一**反向代理**就起作用了

```
// nginx.conf配置文件

server {
    listen 80; // 默认端口
    server_name 123.56.119.218; // 域名，当你访问这个域名时，会直接去找/home/www目录下的index.html文件
    root   /home/www; // 根目录
    index  index.html index.htm index.php; // 默认首页
    
    // 反向代理
    location /api/ { // 前端访问api下的接口时，会代理到proxy_pass指向的地址
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header Host $http_host;
        proxy_pass http://127.0.0.1:3000; // 反向代理，用户访问api接口时，指向本地服务3000端口
    }
}

```

**提示：** 每次修改完nginx.conf配置文件，都需要执行以下命令，重新启动nginx服务器

## 本地启动

首先你本地要全局安装了mongodb、node、npm、robo3T等相关工具，本地启动mongodb

```
1.git clone https://github.com/fushichang/fscblog.git 把项目克隆到本地

2.cnpm install // 项目根目录安装前端项目依赖

3.cnpm install // server目录下安装后端项目依赖

4.在根目录下启动前端程序

    npm run serve
    
5.在server目录下启动后端程序

    npm run start 

6.访问localhost:8080即可看到成果

```

### 项目目录
```
待更新......
```


**线上地址：**[itc](http://www.xiaofuweb.com)

**源码地址：**[GITHUB](https://github.com/fushichang/xiaofu-blog-park.git)


## 参考

[VUE+KOA+MONGODB小练习](https://juejin.im/post/5ba0a27b5188255c6a043058)

[centos云服务器系统下vuecli+koa实现前后端分离项目的部署](https://blog.csdn.net/zxy15946565183/article/details/82317887)

[PM2入门](https://wohugb.gitbooks.io/pm2/content/deployment/getting_started_with_deployment.html)

[Mongo API](https://docs.mongodb.com/manual/reference/method/js-collection/)

[前端想要了解的Nginx](https://juejin.im/post/5cae9de95188251ae2324ec3#heading-6)

[Nginx与前端开发](https://juejin.im/post/5bacbd395188255c8d0fd4b2)