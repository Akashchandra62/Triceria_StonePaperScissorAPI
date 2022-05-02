const express = require("express")
const app = express();
const route = require("./routes/index")
const PORT = 3000;

app.use(express.static("./static"))
app.set("view engine", "ejs");


app.use(route);


app.listen(3000, ()=> {
    console.log(`Server started listening on ${PORT}`);
})