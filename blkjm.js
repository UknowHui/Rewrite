/*************************************

项目名称：blkjm
脚本作者：uknow
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************
https://block-app-small-api.bloks.com/block/111
[rewrite_local]
^https?:\/\/block-app-small-api\.bloks\.com\/block\/[0-9]+$ url script-response-body https://raw.githubusercontent.com/UknowHui/Rewrite/main/blkjm.js

[mitm]
hostname = block-app-small-api.bloks.com

*************************************/

var obj = JSON.parse(response.body);
    obj.data.userhas = 1;

$done({body : JSON.stringify(obj)});