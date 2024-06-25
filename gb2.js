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
var data = obj.data;
  
// body["aaastatus"] = data[0].status
// body["aaaticketPool"] = data[0].ticketPool


// data[0].status = 4;
// data[0].ticketPool = 200;

obj.data = data

$done({body : JSON.stringify(obj)});
