//独立COOKIE文件     ck在``里面填写，多账号换行
let iboxpayheaderVal = `{"Accept":"*/*","Accept-Encoding":"gzip, deflate, br","Accept-Language":"zh-Hans-CN;q=1","Connection":"keep-alive","Content-Type":"application/json; charset=utf-8","Host":"veishop.iboxpay.com","User-Agent":"VeiShop, 1.4.4 (iOS, 13.3.1, zh_CN, Apple, iPhone, 4D3E22BA-BD88-46CC-985C-C5CDD55510E5)","X-User-Agent":"VeiShop, 1.4.4 (iOS, 13.3.1, zh_CN, Apple, iPhone, 4D3E22BA-BD88-46CC-985C-C5CDD55510E5)","mchtNo":"100529600058887","shopkeeperId":"1148855820752977920","source":"VEISHOP_APP_IOS","token":"8168b477a895436091e97f834963a388","traceid":"313506639147055759361610858319253a29d88dea4b8","version":"1.4.4"}`;


// {"Connection":"keep-alive","Accept-Encoding":"gzip, deflate, br","version":"1.4.4","mchtNo":"100529600058887","Content-Type":"application/json; charset=utf-8","source":"VEISHOP_APP_IOS","shopkeeperId":"1148855820752977920","User-Agent":"VeiShop, 1.4.4 (iOS, 14.3, zh_CN, Apple, iPhone, F30626AF-2CC3-4C2F-872D-164B6F3CE8CF)","token":"543486850fdf45a4b4803065b15e5165","X-User-Agent":"VeiShop, 1.4.4 (iOS, 14.3, zh_CN, Apple, iPhone, F30626AF-2CC3-4C2F-872D-164B6F3CE8CF)","traceid":"3135046887621832704016108118303262bfa26fca4b8","Host":"veishop.iboxpay.com","Accept-Language":"zh-Hans-CN;q=1, en-CN;q=0.9","Accept":"*/*"}
// {"Host":"veishop.iboxpay.com","X-User-Agent":"VeiShop, 1.4.4 (iOS, 14.0, zh_CN, Apple, iPad, 6717F404-3C67-42CF-A255-A3C3E3A15116)","Accept":"*/*","version":"1.4.4","shopkeeperId":"1148855820752977920","source":"VEISHOP_APP_IOS","Accept-Language":"zh-Hans;q=1, zh-Hans-CN;q=0.9","Accept-Encoding":"gzip, deflate","token":"a59166c4c8164f77b54e1ef8511ca4e2","Content-Type":"application/json; charset=utf-8","traceid":"31350484403670147072161081552308793249324a4b8","User-Agent":"VeiShop, 1.4.4 (iOS, 14.0, zh_CN, Apple, iPad, 6717F404-3C67-42CF-A255-A3C3E3A15116)","Connection":"keep-alive","mchtNo":"100529600058887"}
let iboxpaycookie = {
  iboxpayheaderVal: iboxpayheaderVal,
};

module.exports = iboxpaycookie;
