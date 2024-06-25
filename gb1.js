/*************************************

项目名称：gb
脚本作者：uknow
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/wxmini\.chnmuseum\.cn\/prod-api\/basesetting\/HallSetting\/gainAllSystemConfigLogin\?.* url script-response-body https://raw.githubusercontent.com/UknowHui/Rewrite/main/gb1.js
[mitm]
hostname = wxmini.chnmuseum.cn

*************************************/

var obj = JSON.parse($response.body);
    // obj.data.userhas = 1;
// 定义一个函数，用于发送通知
function sendNotification(title, subtitle, message) {
    $notify(title, subtitle, message);
  }
  
  // 发送一个示例通知
  
    var data = obj.data
    var arr = data.calendarTicketPoolsByDate
    const certificateVOS = [
        {
            "id": 1,
            "name": "身份证"
        },
        {
            "id": 2,
            "name": "护照"
        },
        {
            "id": 3,
            "name": "港澳居民来往内地通行证"
        },
        {
            "id": 4,
            "name": "台湾居民来往大陆通行证"
        },
        {
            "id": 6,
            "name": "外国人永久居留身份证"
        },
        {
            "id": 7,
            "name": "港澳台居民居住证"
        }
    ];
      
      const scheduleTicketPoolVOSObj = {
            "saleMode": 1,
            "openPerson": 1,
            "status": 4,
            "ticketPool": 5,
            "currentDate": "2024-07-02",
            "seasonType": null,
            "hallType": 4,
            "hallTicketPoolVOS": null,
            "today": 0,
            "hallId": 1,
            "name": "基本陈列展",
            "images": null,
            "imagesPc": null,
            "content": null,
            "ruleContent": null,
            "closeContent": null,
            "scheduleTicketPoolVOS": null,
            "hallScheduleId": "aaa",
            "scheduleName": "aaa",
            "cinemaTime": null,
            "filmLength": null,
            "filmPrice": null,
            "beginTime": "aaa",
            "filmPic": null,
            "endTime": "aaa",
            "address": null,
            "chooseMode": null,
            "description": null,
            "certificateVOS": certificateVOS,
            "video": null
        };
      
      // 创建一个包含三个 scheduleTicketPoolVOSObj 对象的数组
    const scheduleTicketPoolVOSArray = [
        { ...scheduleTicketPoolVOSObj, hallScheduleId:1, scheduleName:"09:00-11:00", beginTime:"09:00", endTime:"11:00" },
        { ...scheduleTicketPoolVOSObj, hallScheduleId:2, scheduleName:"11:00-13:30", beginTime:"11:00", endTime:"13:30" },
        { ...scheduleTicketPoolVOSObj, hallScheduleId:3, scheduleName:"13:30-16:00", beginTime:"13:30", endTime:"16:00" }
    ];
      
      const hallTicketPoolVOSObj = {
                saleMode: 1,
                openPerson: 1,
                status: 4,
                ticketPool: 5,
                currentDate: null,
                seasonType: null,
                hallType: 4,
                hallTicketPoolVOS: null,
                today: 0,
                hallId: 1,
                name: "基本陈列展",
                images: "",
                imagesPc: "",
                content: "",
                ruleContent: "<p>暂无余票，无法预约</p>",
                closeContent: "<p>展览闭馆，无法预约</p>",
                scheduleTicketPoolVOS: scheduleTicketPoolVOSArray
            };
    
      arr.forEach(item => {
        item.status = 4;
        item.ticketPool = 5;
       
            // 创建一个新的对象副本
        const hallTicketPoolVOSObjCopy = { ...hallTicketPoolVOSObj, currentDate: item.currentDate };
        item.hallTicketPoolVOS = [hallTicketPoolVOSObjCopy];
        
      })
      
      data.calendarTicketPoolsByDate = arr
    //   console.log(arr)
      obj.data = data
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
      
sendNotification("第一步", "获取时间", JSON.stringify(obj));
$done({body : JSON.stringify(obj)});
