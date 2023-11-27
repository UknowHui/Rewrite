/*************************************

项目名称：blkjm
脚本作者：uknow
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************
https://block-app-small-api.bloks.com/block/111
[rewrite_local]
^https?:\/\/block-app-small-api\.block\.com\/block\/[0-9]+$ url script-response-body https://raw.githubusercontent.com/UknowHui/Rewrite/main/blkjm.js

[mitm]
hostname = block-app-small-api.bloks.com

*************************************/


var uknow = JSON.parse($response.body);

uknow = {
    "code" : 0,
    "message" : "success",
    "data" : {
      "id" : 622,
      "advert_type" : "",
      "media_intro_resource" : null,
      "picurl" : "https://static-sku.putaocdn.com/blocks/resources/sku/10967/20221129160215e8qzkb0we27s9e9l.png",
      "themes" : null,
      "block_sku_id" : "85008",
      "category_id" : 48,
      "is_theme_block" : 0,
      "media_intro_type" : "",
      "title" : "英雄无限-孙悟空-齐天飞车",
      "ownersnum" : 0,
      "bgpicurl" : "",
      "userhas":1,
      "is_association" : 0,
      "bgcolor" : "",
      "advertUrl" : null
    },
    "time" : 1701017991674
  };

$done({body : JSON.stringify(uknow)});