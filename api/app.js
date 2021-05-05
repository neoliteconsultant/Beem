
const express = require("express");
const app = express();
const port = process.env.PORT || 3080;

var routes = require("./src/routes/endpoints");
routes(app); 


app.listen(port, () => {
  console.log(`Listening to connections on HTTP port ${port}`);
});


