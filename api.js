const express = require("express");
const cors = require("cors")
const dboperations = require("./dboperations");

const app = express();
app.use(cors());

dboperations.getOrders().then(result => {
    console.log(result);
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
