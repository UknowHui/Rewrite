/*************************************

项目名称：gb
脚本作者：uknow
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/wxmini\.chnmuseum\.cn\/prod-api\/pool\/ingore\/getPriceByScheduleId\?.* url script-response-body https://raw.githubusercontent.com/UknowHui/Rewrite/main/gb2.js
[mitm]
hostname = wxmini.chnmuseum.cn

*************************************/

var obj = JSON.parse($response.body);
console.log(obj)
var data = obj.data;
  
body["aaastatus"] = data[0].status
// body["aaaticketPool"] = data[0].ticketPool

// 定义一个函数，用于发送通知
function sendNotification(title, subtitle, message) {
    $notify(title, subtitle, message);
  }
  
  // 发送一个示例通知
  sendNotification("标题", "副标题", "这是一条通知信息");
data[0].status = 4;
data[0].ticketPool = 200;

obj.data = data
$notification.post(obj)
$done({body : JSON.stringify(obj)});
