/* globals module require */

const express = require("express");

module.exports = function(app, data) {
    let controller = require("./controllers/user-controller")(data);


};