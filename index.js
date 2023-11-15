require("dotenv").config();
const server = require("./server.js"); // 2

const { PORT = 3000, NODE_ENV = "development" } = process.env; // 4

server.listen(PORT, () => {
  console.log(`Server running on: http://localhost:${PORT}`);
}); // 12