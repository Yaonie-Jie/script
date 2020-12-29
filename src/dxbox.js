let a = {
  id: "BaiduTB",
  name: "百度贴吧",
  keys: ["CookieTB"],
  descs_html: [
    '<h4 align="center">获取Cookie以及脚本配置请查看<a href="https://raw.githubusercontent.com/NobyDa/Script/master/BDTieBa-DailyBonus/TieBa.js">脚本注释</a></h4>',
  ],
  settings: [
    {
      id: "BDTB_DailyBonus_Mode",
      name: "签到模式",
      val: "0",
      type: "radios",
      desc: "",
      items: [
        { key: "0", label: "自动切换" },
        { key: "1", label: "顺序执行" },
        { key: "2", label: "并发执行" },
      ],
    },
    {
      id: "BDTB_DailyBonus_notify",
      name: "通知汇总",
      val: "",
      type: "number",
      placeholder: "默认20 (点击以展开说明)",
      desc:
        "想签到几个汇总到一个通知里, 这里就填几个(比如我有13个要签到的, 这里填了5, 就会分三次推送通知)",
    },
  ],
  script:
    "https://raw.githubusercontent.com/NobyDa/Script/master/BDTieBa-DailyBonus/TieBa.js",
  author: "@sazs34, @NobyDa",
  repo:
    "https://github.com/sazs34/TaskConfig/blob/master/task/sign_baidu_tieba_v2.js",
  icons: [
    "https://raw.githubusercontent.com/Orz-3/mini/master/tieba.png",
    "https://raw.githubusercontent.com/Orz-3/task/master/tieba.png",
  ],
  icon: "https://raw.githubusercontent.com/Orz-3/task/master/tieba.png",
  favIcon: "mdi-star-outline",
  favIconColor: "grey",
  datas: [
    {
      key: "CookieTB",
      val:
        "SG_FW_VER=1.26.3; SP_FW_VER=3.230.34; TIEBAUID=181e554036ae5bfc8f29bd0c; BDUSS=WZkdDhMZVdlfmNjdTNnZXl1endMOUt2Z2xEdjZqanB5dTQ3SVB5dmRqN1NUaVZlSUFBQUFBJCQAAAAAAAAAAAEAAADnpENVbG92ZdH9xPXU2rTLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANLB~V3Swf1dU; passtheme=light; BAIDUCUID=gPHfi_uM2igwuvuxl8-YujiSSaY6aHuV0a24u_8MS8gnuvakla-Du_80QOlutHaX66EmA; BAIDUID=38DB0DF9FC6DC8D8A866FA6CF43C94C9:FG=1; BAIDUZID=SRQ_XG5gaH8AAAADVAP6S28BawJl8SMQ_DkNMx4hIX8v-GJSiii4bX1If3fWIwSEOEZTaDMzdxpJO2hYaj9hRHTw8PzWAAW3kLruIPAmVHs; TBBRAND=iPhone; _client_version=12.1.2",
    },
  ],
  sessions: [],
  isLoaded: true,
};
