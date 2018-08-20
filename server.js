var http = require("http");
function start(){
  http.createServer(function(request, response){
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write("nihao");
    response.end();
  }).listen(8888);
}
//导出函数
exports.start = start;
