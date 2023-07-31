const express = require("express");
const cors = require("cors")
const bodyParser = require("body-parser");
const dboperations = require("./dboperations");

const app = express();
app.use(cors());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

console.log("bunu gorebiliyor musun?")

dboperations.getOrders().then(result => {
    console.log(result);
})

app.get("/", (req,res) => {

    console.log("Bunu gor be lutfen be...")
    res.send("ananin ami be.")

})

app.get("/daily", async (req, res) => {
  try {
    const orders = await dboperations.getOrders();
    res.send(orders);
    console.log(orders)
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).send("Internal Server Error");
  }
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});



module.exports = app
