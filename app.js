const express = require("express");
const port = process.env.PORT || 3000;
const app = express();
const routes = require("./Routes/index");
//routes imported from Routes folder




app.use("/", routes);
app.listen(port, ()=> {
    console.log(`Server is up to port ${port}`);
});


