/*************************************

项目名称：gb
脚本作者：uknow
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
https:\/\/wxmini\.chnmuseum\.cn\/prod-api\/pool\/getBlock\?nonce=buhpkXh5%2BCjWPTY4u9CclKXibAgUarxj5xmne%2FbHjPKPOCm9VApw2eZp2wSomxh%2B&platform=2&docType=1&p=wxmini url script-response-body https://raw.githubusercontent.com/UknowHui/Rewrite/main/gb3.js
[mitm]
hostname = wxmini.chnmuseum.cn

*************************************/

var obj = JSON.parse($response.body);

// 定义一个函数，用于发送通知
function sendNotification(title, subtitle, message) {
    $notify(title, subtitle, message);
}


// 发送一个示例通知
sendNotification("第三步", "获取验证码", JSON.stringify(obj));

$done({body : JSON.stringify(obj)});
