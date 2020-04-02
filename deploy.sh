#!/usr/bin/env bash

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
ng build --prod

# 运行Dockerfile文件,创建docker容器
docker build -f Dockerfile -t my-markdown .

# 将创建的容器拷贝一份,并命名为registry.cn-beijing.aliyuncs.com/hezhijian/my-book
docker tag my-markdown:latest registry.cn-beijing.aliyuncs.com/hezhijian/my-markdown

# 上传到阿里云容器镜像服务
docker push registry.cn-beijing.aliyuncs.com/hezhijian/my-markdown:latest

# 删除创建的容器
docker image rm my-markdown:latest
