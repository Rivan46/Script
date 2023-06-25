[rewrite_local]
^https?:\/\/nymfapp\.com\/api\/(photos|posts|compose|stories) script-response-body

[mitm]
hostname = nymfapp.com




*/
 let string = $response.body;
string = string.replace(/"pro":true/g,'"pro":false');
   $done ({body: string});
