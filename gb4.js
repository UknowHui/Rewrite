/*************************************

项目名称：gb
脚本作者：uknow
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https:\/\/[^\/]*\.chnmuseum\.cn\/prod-api\/config/\orderRule\/placeOrder\?.*$ url script-response-body https://raw.githubusercontent.com/UknowHui/Rewrite/main/gb4.js
[mitm]
hostname = wxmini.chnmuseum.cn

*************************************/

var obj = JSON.parse($response.body);


// 定义一个函数，用于发送通知
function sendNotification(title, subtitle, message) {
    $notify(title, subtitle, message);
}


// 发送一个示例通知
sendNotification("第四步", "提交订单结果", JSON.stringify(obj));

$done({body : JSON.stringify(obj)});
