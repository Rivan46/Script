
12306 去除倒计时 2022-11-30

请检查你的分流是否有ad.12306.cn，如果有，需要去除（可使用解析器排出#out=12306），不然重写是无法生效的，同时检查是否有与其冲突的重写

[rewrite_local]
^https?:\/\/ad\.12306\.cn\/ad\/ser\/getAdList url script-response-body 12306.js

[mitm]
hostname = ad.12306.cn

*/



var Rivan=JSON.parse($response.body);Rivan.materialsList&&(1==Rivan.materialsList.length?(Rivan.materialsList[0].filePath="",Rivan.advertParam.skipTime=1,Rivan.advertParam.skipTimeAgain=5,Rivan.advertParam.showSkipBtn=-1):1<Rivan.materialsList.length&&(Rivan.materialsList=[{}])),$done({body:JSON.stringify(Rivan)});
