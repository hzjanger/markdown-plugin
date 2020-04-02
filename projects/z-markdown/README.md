# ZMarkdown

该库使用的 [Angular CLI](https://github.com/angular/angular-cli) 版本为 8.2.0.

## 安装

使用该库时必须先安装`codemirror`,`highlight.js`,`marked`

```bash
npm install codemirror highlight.js marked
```

本来是直接使用[ngx-codemirror](https://www.npmjs.com/package/@ctrl/ngx-codemirror),但是在打包的时候出现了报错,我使用的是`2.2.1`的版本,
然后看了下它的实现方式,就没有在使用`ngx-codemirror`了
