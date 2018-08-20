var express = require("express");
var http = require("http");
var server = require("./server.js");
var router = require("./router");
server.start(router.route);
