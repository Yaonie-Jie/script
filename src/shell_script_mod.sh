#!/bin/sh
#@shylocks仓库脚本
function initShylocks() {
    git clone https://github.com/shylocks/Loon.git /shylocks
    npm install
}

 if [ ! -d "/shylocks/" ]; then
    echo "未检查到shylocks仓库脚本，初始化下载相关脚本"
    initShylocks
else
    echo "更新shylocks脚本相关文件"
    git -C /shylocks reset --hard
    git -C /shylocks pull --rebase
    npm install --loglevel error
fi

##复制两个文件
cp -f /shylocks/jd*.js /scripts/
##加入 @shylocks 仓库的定时任务
cat /shylocks/docker/crontab_list.sh >> /scripts/docker/merged_list_file.sh
