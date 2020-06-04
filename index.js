require("dotenv").config();

const server = require("./api/server.js");

//heroku will add the PORT variable to the evironment

const port = process.env.PORT || 8000;
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
