//独立COOKIE文件     ck在``里面填写，多账号换行
let iboxpayheaderVal = `{"Accept":"*/*","Accept-Encoding":"gzip, deflate, br","Accept-Language":"zh-Hans-CN;q=1, en-CN;q=0.9","Connection":"keep-alive","Content-Type":"application/json; charset=utf-8","Host":"veishop.iboxpay.com","User-Agent":"VeiShop, 1.4.4 (iOS, 14.3, zh_CN, Apple, iPhone, F30626AF-2CC3-4C2F-872D-164B6F3CE8CF)","X-User-Agent":"VeiShop, 1.4.4 (iOS, 14.3, zh_CN, Apple, iPhone, F30626AF-2CC3-4C2F-872D-164B6F3CE8CF)","mchtNo":"100529600058887","shopkeeperId":"1148855820752977920","source":"VEISHOP_APP_IOS","token":"0e58b08c9a414022a5b9594ece54eccd","traceid":"3135046887621832704016125111901982bfa26fca4b8","version":"1.4.4"}
{"Accept":"*/*","Accept-Encoding":"br, gzip, deflate","Accept-Language":"zh-Hans-CN;q=1","Connection":"keep-alive","Content-Type":"application/json; charset=utf-8","Host":"veishop.iboxpay.com","User-Agent":"VeiShop, 1.4.4 (iOS, 12.5.1, zh_CN, Apple, iPhone, 9AD90C12-D759-4742-9DF3-2129622147EA)","X-User-Agent":"VeiShop, 1.4.4 (iOS, 12.5.1, zh_CN, Apple, iPhone, 9AD90C12-D759-4742-9DF3-2129622147EA)","mchtNo":"100529600058887","shopkeeperId":"1148855820752977920","source":"VEISHOP_APP_IOS","token":"b843811c251343d78f1d4a4dd8e29089","traceid":"3135048440367014707216120698801642bfa26fca4b8","version":"1.4.4"}
{"Accept":"*/*","Accept-Encoding":"gzip, deflate, br","Accept-Language":"zh-Hans-CN;q=1","Connection":"keep-alive","Content-Type":"application/json; charset=utf-8","Host":"veishop.iboxpay.com","User-Agent":"VeiShop, 1.4.4 (iOS, 13.3.1, zh_CN, Apple, iPhone, 4D3E22BA-BD88-46CC-985C-C5CDD55510E5)","X-User-Agent":"VeiShop, 1.4.4 (iOS, 13.3.1, zh_CN, Apple, iPhone, 4D3E22BA-BD88-46CC-985C-C5CDD55510E5)","mchtNo":"100529600058887","shopkeeperId":"1148855820752977920","source":"VEISHOP_APP_IOS","token":"3f328c73df844e2a87800f49232f6341","traceid":"313506639147055759361612077647528a4b888dea4b8","version":"1.4.4"}
{"Accept": "*/*","Accept-Encoding": "gzip, deflate, br","Accept-Language": "zh-Hans-CN;q=1, en-CN;q=0.9","Connection": "keep-alive","Content-Length": "73","Content-Type": "application/json; charset=utf-8","Host": "veishop.iboxpay.com","User-Agent": "VeiShop, 1.4.8 (iOS, 14.4, zh_CN, Apple, iPhone, F92B2EC9-94CD-4AEA-A844-0CEDB246BF3C)","X-User-Agent": "VeiShop, 1.4.8 (iOS, 14.4, zh_CN, Apple, iPhone, F92B2EC9-94CD-4AEA-A844-0CEDB246BF3C)","mchtNo": "100529600058887","random": "BD8DF20E-EAFE-46A2-9479-9FA2F8F4AC8B","signature": "1188ABA12D647DF36D8EDA74A169961B4CCEAF04910B5417E10AD11F5B12FCB1","source": "VEISHOP_APP_IOS","timestamp": "1614737760997","traceid": "30000000000000000000161473738029126fc2a7f3fe2","version": "1.4.8",}`;
let refreshtokenVal = `9408af3517fc4f039303c94f48fdc846
803a4d3d79c54e3bad1803baeef43946
a58eb3d18b884802a6d51adb9840042b
8946df4188954033ad2cb5c05aa65b21`;

let iboxpaycookie = {
  iboxpayheaderVal: iboxpayheaderVal,
  refreshtokenVal: refreshtokenVal,
};

module.exports = iboxpaycookie;
