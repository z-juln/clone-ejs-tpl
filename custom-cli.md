# 如何自定义 cli

## usage

```javascript
const { gitPullEjsTpl, npmPullEjsTpl } = require("pull-ejs-tpl");
const path = require("path");

gitPullEjsTpl(
  "you git repository",
  {
    outputDir: path.resolve("."), // 默认为'.'
    targetDir: "projects/ssr", // 目标目录（git仓库中的相对目录）, 默认为''
    branch: "v1.0.0", // 默认为master
  },
  { name: "xxx" } // ejs编译时的参数，参数中已自带了changeCase函数(https://www.npmjs.com/package/@juln/change-case)
);

npmPullEjsTpl(
  "cra-template", // package name
  {
    outputDir: path.resolve("."), // 默认为'.'
    targetDir: "template", // 目标目录（npm包目录结构中的相对目录）, 默认为''
    registryUrl: "https://registry.npmjs.org/", // 默认为'https://registry.npmjs.org/'
    tag: "beta", // 默认为'latest'
  },
  { name: "xxx" } // ejs编译时的参数，参数中已自带了changeCase函数(https://www.npmjs.com/package/@juln/change-case)
);
```
