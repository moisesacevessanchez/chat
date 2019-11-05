const express = require("express")
const message = require("../collections/messages/network")
const user = require("../collections/user/network")

const routes = function (server) {
    server.use("/message",message)
    server.use("/user",user)
}
module.exports = routes