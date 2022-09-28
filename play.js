const net = require("net");
const { connect } = require("./client");
const { setupInput } = require("./input");
let connectObj;

console.log("Connecting ...");
connectObj = connect();
setupInput(connectObj);



