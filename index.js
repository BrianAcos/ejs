const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.json());
app.use('/public', express.static(path.join(__dirname, './public')));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("template", {
    name: " Brian",
    link: "https://qik.com.do/r/chris-vargas",
    tickets: 2,
    users: ["Diego Bonilla Victoriano", "Ambar Gonzalez Lora", "Maritza Díaz "],
  });
});

app.listen(port, () => {
  console.log(`App listening at port ${port}`);
});
