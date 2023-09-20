# pull-ejs-tpl

从 git/npm 远程仓库中拉取基于 ejs 的代码模板

推荐: 将项目模板定义到 git 仓库上

## usage1: cli

`npm i -g pull-ejs-tpl`

`pull-ejs-tpl -h`

or

`npx pull-ejs-tpl -h`

## usage2: 根据 api 自定义 cli

<a href='./custom-cli.md'>doc</a>

## 最基础的用法: 根据定义的项目模板生成项目代码

使用: `npx pull-ejs-tpl git https://github.com/z-juln/pull-ejs-tpl-demo1 -o=./ -d project-demo1 --params.name=demo --params.description="this is demo"`

### 参考案例

git 模板仓库: <https://github.com/z-juln/pull-ejs-tpl-demo1>

使用: `npx pull-ejs-tpl git https://github.com/z-juln/pull-ejs-tpl-demo1 -o=./my-demo -d project-demo1 --params.name=demo --params.description="this is demo"`
