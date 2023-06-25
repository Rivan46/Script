#2023-6-25
/*


[rewrite_remote]
 
 ^https?:\/\/nymfapp\.com\/api\/(photos|posts|compose|stories) script-response-body https://raw.githubusercontent.com/Rivan46/Script/main/nyfm.js

[mitm]
 
hostname = nymfapp.com




*/
 let string = $response.body;
string = string.replace(/"pro":true/g,'"pro":false');
   $done ({body: string});
