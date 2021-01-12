#看一看
1 7 * * * node /scripts/jd_mh.js >> /scripts/logs/jd_mh.log 2>&1

#快手播放视频
# */30 2,8,16 * * * node /scripts/xiaoyu/auto_kuaishou.js >> /scripts/logs/auto_kuaishou.log 2>&1