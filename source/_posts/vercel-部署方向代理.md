---
title: vercel| 部署方向代理
tags:
  - 反向代理
abbrlink: 7d5077fd
date: 2024-06-29 14:24:10
---
# 准备
Vercel账户
NPM环境

# 部署
# 安装Vercel CLI
```yml
npm i-g vercel
```

# 登录
```yml
vercel login
```

# 配置文件
新建一个```.json```文件，把下面的内容复制进去
```bash
{
  "version": 2,
  "routes": [
      {"src": "/(.*)","dest": "https://domain.com/$1"}
  ]
}
``` 
把```https://domain.com/```改成需要代理的URL
# 部署至Vercel
在```.json```文件的目录下执行，其中```vercel.json```是```.json```文件的文件名
```yml
verceL-A vercel.json--prod
```
然后按照提示部署

其中，```Link to existing project```选择``no``
# 绑定域名
到``Vercel``->``Project``->``Settings``->``Domain``绑定域名