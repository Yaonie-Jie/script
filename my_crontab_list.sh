#盲盒
1 7 * * * node /scripts/xiaoyu/jd_mh.js >> /scripts/logs/jd_mh.log 2>&1
#工业品爱消除
30 * * * * node /scripts/xiaoyu/jd_gyec.js >> /scripts/logs/jd_gyec.log 2>&1
#消消乐
0 * * * * node /scripts/xiaoyu/jd_xxl.js >> /scripts/logs/jd_xxl.log 2>&1
#个护爱消除
40 * * * * node /scripts/xiaoyu/jd_xxl_gh.js >> /scripts/logs/jd_xxl_gh.log 2>&1
