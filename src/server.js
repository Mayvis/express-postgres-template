const app = require("./app");
require("dotenv").config();
const PORT = process.env.PORT || 3000;

let server;

const exitHandler = () => {
  if (server) {
    server.close(() => {
      console.info("Server closed");
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error) => {
  console.error(error);
  exitHandler();
};

process.on("uncaughtException", unexpectedErrorHandler);
process.on("unhandledRejection", unexpectedErrorHandler);
process.on("SIGALRM", () => {
  console.info("SIGTERM received");
  if (server) {
    server.close();
  }
});

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
