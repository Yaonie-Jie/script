#看一看
# 5 10 * * * node /scripts/jd_watch.js >> /scripts/logs/jd_watch.log 2>&1

#快手播放视频
*/30 2,8,16 * * * node /xiaoyu/auto_kuaishou.js >> /scripts/logs/auto_kuaishou.log 2>&1