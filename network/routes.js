const express = require("express")
const message = require("../collections/messages/network")

const routes = function (server) {
    server.use("/message",message)
}
module.exports = routes