const config = {
  user: "sa",
  password: "Support1105",
  server: "tcp:TOTAL-POS-TEST\\RMH",
  database:"RMH",
  options: {
    trustedConnection: true,
    trustServerCertificate: true,
    enableArithAbort: true,
  },
};

module.exports = config;
