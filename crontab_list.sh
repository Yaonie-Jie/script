#喜马拉雅
*/30 * * * * /usr/bin/python3 /root/script/python/xmly/xmly.py >> /root/script/log/xmly.log 2>&1
#百度极速版
*/30 6-18 * * * /root/.nvm/versions/node/v14.15.1/bin/node /root/script/src/baidu_speed.js >> /root/script/log/baidu_speed.log 2>&1
#笑谱
*/20 6-20 * * * /root/.nvm/versions/node/v14.15.1/bin/node /root/script/src/iboxpay.js >> /root/script/log/iboxpay.log 2>&1
#快手签到
45 9 * * * /root/.nvm/versions/node/v14.15.1/bin/node /root/script/src/kuaishou.js >> /root/script/log/kuaishou.log 2>&1
#今日头条
5,35 8-23 * * * /root/.nvm/versions/node/v14.15.1/bin/node /root/script/src/jrtt.js >> /root/script/log/jrtt.log 2>&1
#悦动族
0,30 0-23 * * * /root/.nvm/versions/node/v14.15.1/bin/node /root/script/src/yuedongzu.js >> /root/script/log/yuedongzu.log 2>&1
#联通签到
3 0 * * * cd /root/script/python/unicomTask/ && /usr/bin/python3 /root/script/python/unicomTask/main.py >> /root/script/log/unicomTask.log 2>&1

55 23 * * * rm -rf /root/script/log/*.log
