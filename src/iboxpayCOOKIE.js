//独立COOKIE文件     ck在``里面填写，多账号换行
let iboxpayheaderVal = `{"Accept":"*/*","Accept-Encoding":"gzip, deflate, br","Accept-Language":"zh-Hans-CN;q=1, en-CN;q=0.9","Connection":"keep-alive","Content-Type":"application/json; charset=utf-8","Host":"veishop.iboxpay.com","User-Agent":"VeiShop, 1.4.4 (iOS, 14.3, zh_CN, Apple, iPhone, F30626AF-2CC3-4C2F-872D-164B6F3CE8CF)","X-User-Agent":"VeiShop, 1.4.4 (iOS, 14.3, zh_CN, Apple, iPhone, F30626AF-2CC3-4C2F-872D-164B6F3CE8CF)","mchtNo":"100529600058887","shopkeeperId":"1148855820752977920","source":"VEISHOP_APP_IOS","token":"0e58b08c9a414022a5b9594ece54eccd","traceid":"3135046887621832704016125111901982bfa26fca4b8","version":"1.4.4"}
{"Accept":"*/*","Accept-Encoding":"br, gzip, deflate","Accept-Language":"zh-Hans-CN;q=1","Connection":"keep-alive","Content-Type":"application/json; charset=utf-8","Host":"veishop.iboxpay.com","User-Agent":"VeiShop, 1.4.4 (iOS, 12.5.1, zh_CN, Apple, iPhone, 9AD90C12-D759-4742-9DF3-2129622147EA)","X-User-Agent":"VeiShop, 1.4.4 (iOS, 12.5.1, zh_CN, Apple, iPhone, 9AD90C12-D759-4742-9DF3-2129622147EA)","mchtNo":"100529600058887","shopkeeperId":"1148855820752977920","source":"VEISHOP_APP_IOS","token":"b843811c251343d78f1d4a4dd8e29089","traceid":"3135048440367014707216120698801642bfa26fca4b8","version":"1.4.4"}
{"Accept":"*/*","Accept-Encoding":"gzip, deflate, br","Accept-Language":"zh-Hans-CN;q=1","Connection":"keep-alive","Content-Type":"application/json; charset=utf-8","Host":"veishop.iboxpay.com","User-Agent":"VeiShop, 1.4.4 (iOS, 13.3.1, zh_CN, Apple, iPhone, 4D3E22BA-BD88-46CC-985C-C5CDD55510E5)","X-User-Agent":"VeiShop, 1.4.4 (iOS, 13.3.1, zh_CN, Apple, iPhone, 4D3E22BA-BD88-46CC-985C-C5CDD55510E5)","mchtNo":"100529600058887","shopkeeperId":"1148855820752977920","source":"VEISHOP_APP_IOS","token":"3f328c73df844e2a87800f49232f6341","traceid":"313506639147055759361612077647528a4b888dea4b8","version":"1.4.4"}`;
let refreshtokenVal = `9408af3517fc4f039303c94f48fdc846
803a4d3d79c54e3bad1803baeef43946
a58eb3d18b884802a6d51adb9840042b`;

let iboxpaycookie = {
  iboxpayheaderVal: iboxpayheaderVal,
  refreshtokenVal: refreshtokenVal,
};

module.exports = iboxpaycookie;
