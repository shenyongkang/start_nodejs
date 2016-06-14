/**
 * Created by ios2 on 16/6/6.
 */
var http = require("http");
var url = require("url");
function start(route,handle) {
    function onRequest(request, response) {
        
        var postData = "";
        
        var pathname = url.parse(request.url).pathname;
        console.log("Request for" + pathname +"received");
        request.setEncoding("utf-8");

        request.addListener("data",function (postDataChunk) {
            //called when a new chunk of data was received



            postData += postDataChunk.toString();
            console.log("Received POST data chunk'" + postDataChunk + "'.");

        });
        request.addListener("end",function () {
            //called when all chunks of data have been received
            route(handle,pathname,response,postData);
        })
        
        
        
        
        
        

    }
    http.createServer(onRequest).listen(8080);
    console.log("server start");
}
exports.start = start;