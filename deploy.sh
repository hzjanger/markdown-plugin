#!/usr/bin/env bash

# 确保脚本抛出遇到的错误
set -e

# 切换为npm镜像,避免上传到npm时出错
nrm use npm

# 插件打包
ng build --project z-markdown --prod

# 进入打包文件
cd dist/z-markdown/

# 上传
npm publish --access public

# 切换为淘宝镜像
nrm use taobao
