/*************************************

项目名称：gb
脚本作者：uknow
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https:\/\/[^\/]*\.chnmuseum\.cn\/prod-api\/pool\/ingore\/getPriceByScheduleId\?.*$ url script-response-body https://raw.githubusercontent.com/UknowHui/Rewrite/main/gb2.js
[mitm]
hostname = wxmini.chnmuseum.cn

*************************************/

var obj = JSON.parse($response.body);
var data = obj.data;
  
// body["aaastatus"] = data[0].status
// body["aaaticketPool"] = data[0].ticketPool

// 定义一个函数，用于发送通知
function sendNotification(title, subtitle, message) {
    $notify(title, subtitle, message);
}
  
var newItem = {
    "saleMode": null,
    "openPerson": null,
    "status": 4,
    "ticketPool": 200,
    "currentDate": null,
    "seasonType": null,
    "hallType": 4,
    "hallTicketPoolVOS": null,
    "today": 0,
    "hallId": 1,
    "name": null,
    "images": "",
    "imagesPc": null,
    "content": null,
    "ruleContent": null,
    "closeContent": null,
    "scheduleTicketPoolVOS": null,
    "hallScheduleId": 3,
    "priceId": 8,
    "priceName": "免费参观凭证",
    "price": "0.00",
    "ageRange": "0-110",
    "ageMin": "0",
    "ageMax": "110",
    "notRecommendPrice": false,
    "child": false,
    "tourEscort": false,
    "adult": true,
    "recommendAgeMin": "0",
    "recommendAgeMax": "110",
    "certificateVOS": [{
        "id": 1,
        "name": "身份证"
    }, {
        "id": 2,
        "name": "护照"
    }, {
        "id": 3,
        "name": "港澳居民来往内地通行证"
    }, {
        "id": 4,
        "name": "台湾居民来往大陆通行证"
    }, {
        "id": 6,
        "name": "外国人永久居留身份证"
    }, {
        "id": 7,
        "name": "港澳台居民居住证"
    }],
    "ticketSetAmountFlag": false,
    "document": null,
    "showDocument": 0,
    "showOrder": 2,
    "priceNameForCalendar": "免费参观凭证0.00元/张",
    "introduction": "基本陈列展免费参观凭证",
    "student": false
};
data[0] = newItem;
obj.data = data
// 发送一个示例通知
sendNotification("第二步", "获取预约信息", JSON.stringify(obj));

$done({body : JSON.stringify(obj)});
