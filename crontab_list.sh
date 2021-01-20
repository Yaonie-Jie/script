#喜马拉雅
*/30 * * * * /usr/bin/python3 /root/script/python/xmly.py >> /root/script/log/xmly.log 2>&1
#百度极速版
10 8-18/2 * * * /root/.nvm/versions/node/v14.15.1/bin/node /root/script/src/baidu_speed.js >> /root/script/log/baidu_speed.log 2>&1
#快手签到
45 9 * * * /root/.nvm/versions/node/v14.15.1/bin/node /root/script/src/kuaishou.js >> /root/script/log/kuaishou.log 2>&1
#今日头条
5,35 8-23 * * * /root/.nvm/versions/node/v14.15.1/bin/node /root/script/src/jrtt.js >> /root/script/log/jrtt.log 2>&1

55 23 * * * rm -rf /root/script/log/*.log




# 宝洁美发屋
1 8,9 14-31/1 1 * /root/.nvm/versions/node/v14.15.1/bin/node /root/Loon/jd_bj.js >> /root/script/log/jd_bj.log 2>&1

# 工业品爱消除
20 * * * * /root/.nvm/versions/node/v14.15.1/bin/node /root/Loon/jd_gyec.js >> /root/script/log/jd_gyec.log 2>&1

# 超级直播间红包雨
30,31 20-23/1 19 1 * /root/.nvm/versions/node/v14.15.1/bin/node /root/Loon/jd_live_redrain.js >> /root/script/log/jd_live_redrain.log 2>&1

# 直播间红包雨
0,1 19-21/1 * * * /root/.nvm/versions/node/v14.15.1/bin/node /root/Loon/jd_live_redrain2.js >> /root/script/log/jd_live_redrain2.log 2>&1

# 半点红包雨
30,31 12-23/1 * * * /root/.nvm/versions/node/v14.15.1/bin/node /root/Loon/jd_live_redrain_half.js >> /root/script/log/jd_live_redrain_half.log 2>&1

# 年货直播红包雨
0 0,9,11,13,15,17,19,20,21,23 3,5,20-30/1 1,2 * /root/.nvm/versions/node/v14.15.1/bin/node /root/Loon/jd_live_redrain_nian.js >> /root/script/log/jd_live_redrain_nian.log 2>&1

# 官方号直播红包雨
0 0,9,11,13,15,17,19,20,21,23 * * * /root/.nvm/versions/node/v14.15.1/bin/node /root/Loon/jd_live_redrain_offical.js >> /root/script/log/jd_live_redrain_offical.log 2>&1

# 盲盒抽京豆
1 7 * * * /root/.nvm/versions/node/v14.15.1/bin/node /root/Loon/jd_mh.js >> /root/script/log/jd_mh.log 2>&1

# 京东秒秒币
10 7 * * * /root/.nvm/versions/node/v14.15.1/bin/node /root/Loon/jd_ms.js >> /root/script/log/jd_ms.log 2>&1

# 京年团圆pick
5 0 19,20 1 * /root/.nvm/versions/node/v14.15.1/bin/node /root/Loon/jd_vote.js >> /root/script/log/jd_vote.log 2>&1

# 京东粉丝专享
10 0 * * * /root/.nvm/versions/node/v14.15.1/bin/node /root/Loon/jd_wechat_sign.js >> /root/script/log/jd_wechat_sign.log 2>&1

# 小鸽有礼
5 7 * * * /root/.nvm/versions/node/v14.15.1/bin/node /root/Loon/jd_xg.js >> /root/script/log/jd_xg.log 2>&1

# 东东爱消除
0 * * * * /root/.nvm/versions/node/v14.15.1/bin/node /root/Loon/jd_xxl.js >> /root/script/log/jd_xxl.log 2>&1

# 个护爱消除
40 * * * * /root/.nvm/versions/node/v14.15.1/bin/node /root/Loon/jd_xxl_gh.js >> /root/script/log/jd_xxl_gh.log 2>&1
