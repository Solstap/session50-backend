require("dotenv").config();
const server = require("./server.js"); // 2

const { PORT = 3000, NODE_ENV=development } = process.env; // 4 WITHOUT NODE_ENV 

console.log(NODE_ENV); // 12 WITH NODE ENV

server.listen(PORT, () => {
  console.log(`Server running on: http://localhost:${PORT}`);
});