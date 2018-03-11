# 天气预报 #
***
## 介绍 ##

1. 一款跨平台的天气预报App
2. 可以获取最近五天中国各个城市的天气预报信息
3. 会首先将默认城市设置为定位所在城市，若定位失败，则将默认城市设置为北京。

根据下面的步骤，执行代码，就可以完美的运行这款App了


## 使用方法 ##
### 安装所需要的依赖包 ###
首先请安装操作系统所对应的 [Node](https://nodejs.org/en/download/)（如果已经安装完毕可以忽略这一步）

在源代码目录里执行： ```npm insall```，这一步会安装所需要的依赖包

可以将Node镜像库设置为淘宝镜像库，可获得更快的速度： ```npm config set registry https://registry.npm.taobao.org```

### 测试以及本地使用App ###
执行： ```webpack-dev-server```

在浏览器上打开： ```http://localhost:8080/```

即可以在浏览器上运行

以下为一些运行过程中的截图

**在默认情况下的时候**
![image1](./Doc-Image/ScreenShot_1.png)

**在城市栏输入上海以后**
![image2](./Doc-Image/ScreenShot_2.png)

**选择天气预报简介**
![image3](./Doc-Image/ScreenShot_3.png)
## 技术细节 ##
### 前端 ###
- HTML && CSS && JavaScript
- [React](https://reactjs.org/)
- [Material-ui](http://www.material-ui.com/#/) && [Weather-icons](http://erikflowers.github.io/weather-icons/)

### 打包 ###
- [Webpack](http://webpack.github.io/)：打包工具，并提供Babel为React所需要的语法进行转码。
- [Webpack-dev-server](https://github.com/webpack/webpack-dev-server): 解决请求数据过程中可能出现的跨域问题。