# 如何自定义 cli

## usage

```typescript
const { gitPullEjsTpl, npmPullEjsTpl } = require("pull-ejs-tpl");
const path = require("path");

/**
 * 内置逻辑与流程:
 * 1. 拉取模板代码
 * 2. 根据模板代码和参数, 生成最终代码
 */
gitPullEjsTpl(
  "you git repository",
  {
    outputDir: path.resolve("."), // 默认为'.'
    targetDir: "projects/ssr", // 目标目录（git仓库中的相对目录）, 默认为''
    branch: "v1.0.0", // 默认为master
  },
  { name: "xxx" }, // ejs编译时的参数，参数中已自带了changeCase函数(https://www.npmjs.com/package/@juln/change-case)
  () => console.log("代码拉取完成"), // 代码拉取完成后的回调, 可选值, 可不传
)
  .catch(err => {
    if (err?.type === 'superEjsParseError') {
      type Err = {
        type: 'superEjsParseError';
        data: {
          path: string;
          error: unknown;
        }[];
      };
      console.log(err.data);
    }
  });

/**
 * 内置逻辑与流程:
 * 1. 拉取模板代码
 * 2. 根据模板代码和参数, 生成最终代码
 */
npmPullEjsTpl(
  "cra-template", // package name
  {
    outputDir: path.resolve("."), // 默认为'.'
    targetDir: "template", // 目标目录（npm包目录结构中的相对目录）, 默认为''
    registryUrl: "https://registry.npmjs.org/", // 默认为'https://registry.npmjs.org/'
    tag: "beta", // 默认为'latest'
  },
  { name: "xxx" }, // ejs编译时的参数，参数中已自带了changeCase函数(https://www.npmjs.com/package/@juln/change-case)
  () => console.log("代码拉取完成"), // 代码拉取完成后的回调, 可选值, 可不传
)
  .catch(err => {
    if (err?.type === 'superEjsParseError') {
      type Err = {
        type: 'superEjsParseError';
        data: {
          path: string;
          error: unknown;
        }[];
      };
      console.log(err.data);
    }
  });
```
