#喜马拉雅
*/30 * * * * /usr/bin/python3 /root/xmly_speed/xmly_speed.py >> /root/xmly_speed/xmly.log 2>&1
#qq阅读
*/11 * * * * /root/.nvm/versions/node/v14.15.1/bin/node /root/script/src/qqread.js >> /root/script/log/qqread.log 2>&1
#快手极速版
30 9 * * * /root/.nvm/versions/node/v14.15.1/bin/node /root/script/src/kuaishou.js >> /root/script/log/kuaishou.log 2>&1
#提交互助
30 4 * * * /root/.nvm/versions/node/v14.15.1/bin/node /root/script/utils/shareCode.js >> /root/script/log/shareCode.log 2>&1



55 23 * * * rm -rf /root/xmly_speed/*.log
55 23 * * * rm -rf /root/script/log/*.log
