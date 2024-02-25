/*************************************

项目名称：blkjm
脚本作者：uknow
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************
https://increase-openapi.soulapp.cn/increase/sign/task/list?bi=["18ddf689864","--","Apple","iOS","17.3.1","17.3.1","iPhone 14","3","390*844","AppStore","WiFi","zh"]&bik=32243&pageId=SignPage
[rewrite_local]
^https:\/\/increase-openapi\.soulapp\.cn\/increase\/sign\/task\/list url script-response-body https://raw.githubusercontent.com/UknowHui/Rewrite/main/aaa.js

[mitm]
hostname = increase-openapi.soulapp.cn

*************************************/

var obj = JSON.parse($response.body);
    console.log(obj.data);
    obj.data[0].status = false;

    // obj = {
    //     "code" : 0,
    //     "message" : "success",
    //     "data" : {
    //       "advert_type" : "",
    //       "media_intro_resource" : null,
    //       "picurl" : "https://static-sku.putaocdn.com/blocks/resources/sku/10967/20221129160215e8qzkb0we27s9e9l.png",
    //       "themes" : null,
    //       "block_sku_id" : "85008",
    //       "category_id" : 48,
    //       "is_theme_block" : 0,
    //       "media_intro_type" : "",
    //       "title" : "英雄无限-孙悟空-齐天飞车",
    //       "ownersnum" : 0,
    //       "bgpicurl" : "",
    //       "userhas":1,
    //       "is_association" : 0,
    //       "bgcolor" : "",
    //       "advertUrl" : null
    //     },
    //     "time" : 1701017991674
    //   };
      

$done({ body: JSON.stringify(obj) });
