//独立COOKIE文件     ck在``里面填写，多账号换行
let iboxpayheaderVal = `{"Connection":"keep-alive","Accept-Encoding":"gzip, deflate, br","version":"1.4.4","mchtNo":"100529600058887","Content-Type":"application/json; charset=utf-8","source":"VEISHOP_APP_IOS","shopkeeperId":"1148855820752977920","User-Agent":"VeiShop, 1.4.4 (iOS, 14.3, zh_CN, Apple, iPhone, F30626AF-2CC3-4C2F-872D-164B6F3CE8CF)","token":"543486850fdf45a4b4803065b15e5165","X-User-Agent":"VeiShop, 1.4.4 (iOS, 14.3, zh_CN, Apple, iPhone, F30626AF-2CC3-4C2F-872D-164B6F3CE8CF)","traceid":"3135046887621832704016108118303262bfa26fca4b8","Host":"veishop.iboxpay.com","Accept-Language":"zh-Hans-CN;q=1, en-CN;q=0.9","Accept":"*/*"}`;

let iboxpaycookie = {
  iboxpayheaderVal: iboxpayheaderVal,
};

module.exports = iboxpaycookie;
