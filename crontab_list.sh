#喜马拉雅
*/30 8-23 * * * /usr/bin/python3 /root/xmly_speed/xmly_speed.py >> /root/xmly_speed/xmly.log 2>&1
#qq阅读
*/20 8-23 * * * /root/.nvm/versions/node/v14.15.1/bin/node /root/script/qqread.js >> /root/script/log/qqread.log 2>&1




55 23 */1 * * rm -rf /root/xmly_speed/*.log
55 23 */1 * * rm -rf /root/script/log/*.log
