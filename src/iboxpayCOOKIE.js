//独立COOKIE文件     ck在``里面填写，多账号换行
let iboxpayheaderVal = `{"Accept":"*/*","Accept-Encoding":"gzip, deflate, br","Accept-Language":"zh-Hans-CN;q=1","Connection":"keep-alive","Content-Type":"application/json; charset=utf-8","Host":"veishop.iboxpay.com","User-Agent":"VeiShop, 1.4.4 (iOS, 13.3.1, zh_CN, Apple, iPhone, 4D3E22BA-BD88-46CC-985C-C5CDD55510E5)","X-User-Agent":"VeiShop, 1.4.4 (iOS, 13.3.1, zh_CN, Apple, iPhone, 4D3E22BA-BD88-46CC-985C-C5CDD55510E5)","mchtNo":"100529600058887","shopkeeperId":"1148855820752977920","source":"VEISHOP_APP_IOS","token":"8168b477a895436091e97f834963a388","traceid":"313506639147055759361610858319253a29d88dea4b8","version":"1.4.4"}
{"Accept": "*/*","Accept-Encoding": "gzip, deflate, br","Accept-Language": "zh-Hans-CN;q=1, en-CN;q=0.9","Connection": "keep-alive","Content-Type": "application/json; charset=utf-8","Host": "veishop.iboxpay.com","User-Agent": "VeiShop, 1.4.4 (iOS, 14.3, zh_CN, Apple, iPhone, F30626AF-2CC3-4C2F-872D-164B6F3CE8CF)","X-User-Agent": "VeiShop, 1.4.4 (iOS, 14.3, zh_CN, Apple, iPhone, F30626AF-2CC3-4C2F-872D-164B6F3CE8CF)","mchtNo": "100529600058887","shopkeeperId": "1148855820752977920","source": "VEISHOP_APP_IOS","token": "18f1301311734410af24cc3630a8b658","traceid": "313504844036701470721610940881610a4b888dea4b8","version": "1.4.4"}
{"Accept": "*/*","Accept-Encoding": "gzip, deflate, br","Accept-Language": "zh-Hans-CN;q=1, en-CN;q=0.9","Connection": "keep-alive","Content-Type": "application/json; charset=utf-8","Host": "veishop.iboxpay.com","User-Agent": "VeiShop, 1.4.4 (iOS, 14.3, zh_CN, Apple, iPhone, F30626AF-2CC3-4C2F-872D-164B6F3CE8CF)","X-User-Agent": "VeiShop, 1.4.4 (iOS, 14.3, zh_CN, Apple, iPhone, F30626AF-2CC3-4C2F-872D-164B6F3CE8CF)","mchtNo": "100529600058887","shopkeeperId": "1148855820752977920","source": "VEISHOP_APP_IOS","token": "368cb6a56fed47d18dd0abe4e36b4792","traceid": "313504688762183270401610934218977a4b847c0a4b8","version": "1.4.4"}`;

let iboxpaycookie = {
  iboxpayheaderVal: iboxpayheaderVal,
};

module.exports = iboxpaycookie;
