#!/bin/bash
#
arr=(
base
type
is
inherits

extend
clone
event
guid

pubsub
querystring
url
md5
base64
load
console
)

for var in ${arr[@]} 
do
   echo $var
   cd $var
   pwd

   # 安装依赖
   # npm i --save-dev istanbul

   # 自动更新第4位版本
   # sed -i "" 's/"version": "[0-9].[0-9].[0-9]/&-5/g' package.json
   
   # 自动重新安装依赖
   # rm -rf node_modules
   # rm -rf package-lock.json
   # npm i

   # 自动发布新版本
   # npm run release && npm publish --access=public

   # 文件操作
   # cp ../.istanbul.yml .istanbul.yml
   cd ..
done
