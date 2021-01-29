//独立COOKIE文件     ck在``里面填写，多账号换行
let iboxpayheaderVal = `{"Connection":"keep-alive","Accept-Encoding":"gzip, deflate, br","version":"1.4.4","mchtNo":"100529600058887","Content-Type":"application/json; charset=utf-8","source":"VEISHOP_APP_IOS","shopkeeperId":"1148855820752977920","User-Agent":"VeiShop, 1.4.4 (iOS, 14.3, zh_CN, Apple, iPhone, F30626AF-2CC3-4C2F-872D-164B6F3CE8CF)","token":"d6feb397719547c683c7f79b7e01c9db","X-User-Agent":"VeiShop, 1.4.4 (iOS, 14.3, zh_CN, Apple, iPhone, F30626AF-2CC3-4C2F-872D-164B6F3CE8CF)","traceid":"3135046887621832704016118943331712bfa26fca4b8","Host":"veishop.iboxpay.com","Accept-Language":"zh-Hans-CN;q=1, en-CN;q=0.9","Accept":"*/*"}
{"Accept":"*/*","Accept-Encoding":"br, gzip, deflate","Accept-Language":"zh-Hans-CN;q=1","Connection":"keep-alive","Content-Type":"application/json; charset=utf-8","Host":"veishop.iboxpay.com","User-Agent":"VeiShop, 1.4.4 (iOS, 12.4.8, zh_CN, Apple, iPhone, 9AD90C12-D759-4742-9DF3-2129622147EA)","X-User-Agent":"VeiShop, 1.4.4 (iOS, 12.4.8, zh_CN, Apple, iPhone, 9AD90C12-D759-4742-9DF3-2129622147EA)","mchtNo":"100529600058887","shopkeeperId":"1148855820752977920","source":"VEISHOP_APP_IOS","token":"70701229964a4b2896eb0d76f1a35c4b","traceid":"313504844036701470721611902111376a29d88dea4b8","version":"1.4.4"}`;

let iboxpaycookie = {
  iboxpayheaderVal: iboxpayheaderVal,
};

module.exports = iboxpaycookie;
