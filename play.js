const net = require("net");

// setup interface to handle user input from stdin

const handleUserInput = function (key) {
  // your code here
  if (key === '\u0003') {
    process.exit();
  }
};

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};


// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243", // IP address here,
    port: "50541"// PORT number here,
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: HL");
    // setInterval(() => {
    //   conn.write("Move: up");
    // }, 1000);
  })

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};

console.log("Connecting ...");
connect();
setupInput();

module.exports = {
  connect,
};