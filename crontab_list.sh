#喜马拉雅
*/30 * * * * /usr/bin/python3 /root/script/python/xmly.py >> /root/script/log/xmly.log 2>&1
#qq阅读
*/11 * * * * /root/.nvm/versions/node/v14.15.1/bin/node /root/script/src/qqread.js >> /root/script/log/qqread.log 2>&1
#百度极速版
10 8-18/2 * * * /root/.nvm/versions/node/v14.15.1/bin/node /root/script/src/baidu_speed.js >> /root/script/log/baidu_speed.log 2>&1
#提交互助
30 4 1,10,20 * * /root/.nvm/versions/node/v14.15.1/bin/node /root/script/utils/shareCode.js >> /root/script/log/shareCode.log 2>&1
#聚看
*/30 * * * * /root/.nvm/versions/node/v14.15.1/bin/node /root/script/src/jukan.js >> /root/script/log/jukan.log 2>&1

55 23 * * * rm -rf /root/script/log/*.log
