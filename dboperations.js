var config = require("./dbconfig");
const sql = require("mssql");

async function getOrders() {
  try {
    let pool = await sql.connect(config);
    let products = await pool.request().query("SELECT * from Orders");
    return products.recordsets;
  } catch (error) {
    console.error("Error fetching orders:", error);
    throw new Error("Error fetching orders from the database.");
  }
}

module.exports = {
    getOrders:getOrders
}
