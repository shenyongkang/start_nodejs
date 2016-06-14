/**
 * Created by ios2 on 16/6/6.
 */
var server = require("./server");
var router = require("./route");
var requestHandler = require("./requestHandlers")

var handle = {};
handle["/"] = requestHandler.start;
handle["/start"] = requestHandler.start;
handle["/upload"] = requestHandler.upload;
handle["/show"] = requestHandler.show;
server.start(router.route,handle);