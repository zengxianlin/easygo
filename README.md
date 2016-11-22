##  介绍
 这是一个easygo的虚拟售货机demo，包括了vue和vuex的基本用法，以及nodejs辅助前端进行跨域，node跨域代理转发请求等基础用法。
 由于目前就只有一台机器，所有没有做vue-router，后面如果有机器，添加`vue-router`和`.vue`即可。
## 使用
### 安装依赖

```bash
npm install
```

### 启动vue开发服务
```bash
npm run dev
```

### 启动node代理转发服务
```bash
cd server
node app
```
### 测试
安卓id生成就可以，机器id随便，不填都行。。。自动化没有写。。只能凑合看把。

### 端口
前端开发端口在`localhost:8080`

后端转发端口在`localhost:3333`
