module.exports = {
  version: '8.20.0',
  note: '支持下单强制需要用户进行实名认证', // 这个为版本描述，无需修改
  subDomain: 'tz', // 此处改成你自己的专属域名。什么是专属域名？请看教程 https://www.it120.cc/help/qr6l4m.html
  goodsDetailSkuShowType: 0, // 0 为点击立即购买按钮后出现规格尺寸、数量的选择； 1为直接在商品详情页面显示规格尺寸、数量的选择，而不弹框
  shopMod: 0, // 0为单店铺版本 ； 1为多店铺版本
  needIdCheck: false, // true / false ，是否需要进行用户实名认证
}