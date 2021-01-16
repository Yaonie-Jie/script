#喜马拉雅
*/30 * * * * /usr/bin/python3 /root/script/python/xmly.py >> /root/script/log/xmly.log 2>&1
#百度极速版
10 8-18/2 * * * /root/.nvm/versions/node/v14.15.1/bin/node /root/script/src/baidu_speed.js >> /root/script/log/baidu_speed.log 2>&1
#提交互助
10,40 4 1,10,20 * * /root/.nvm/versions/node/v14.15.1/bin/node /root/script/utils/shareCode.js >> /root/script/log/shareCode.log 2>&1
#快手签到
45 9 * * * /root/.nvm/versions/node/v14.15.1/bin/node /root/script/src/kuaishou.js >> /root/script/log/kuaishou.log 2>&1
#今日头条
5,35 8-23 * * * /root/.nvm/versions/node/v14.15.1/bin/node /root/script/src/jrtt.js >> /root/script/log/jrtt.log 2>&1
#笑谱
*/5 * * * * /root/.nvm/versions/node/v14.15.1/bin/node /root/script/src/xp.js >> /root/script/log/xp.log 2>&1

55 23 * * * rm -rf /root/script/log/*.log
