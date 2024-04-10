# 简易版OA系统

这是一个简易般的oa系统

## 项目启动

项目使用nest.js框架开发，数据库使用的是sqlite。因为使用了Prisma框架，所以数据库可以根据自己的需要自行进行替换

```bash
pnpm i # 安装依赖
pnpm dlx prisma db push # 创建数据库
npm run start:dev # 启动项目
# 启动之后直接在 http://localhost:3000进行访问
# 接口文档地址为 http://localhost:3000/docs
```

**如果执行初始化数据库操作失败，记得设置prisma的镜像地址**

```bash
# mac或者linux在终端中直接执行就好
export PRISMA_ENGINES_MIRROR=https://registry.npmmirror.com/-/binary/prisma

# windows在powershell中执行
$Env:PRISMA_ENGINES_MIRROR='https://registry.npmmirror.com/-/binary/prisma'
```

## 数据库ER图

![](docs/er.gif)

[数据字典](docs/数据字典.xlsx)在docs目录下

## 功能

![](docs/OA.png)
