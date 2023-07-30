const config = {
  user: "sa",
  password: "123",
  server: "EMRE\\SQLEXPRESS",
  database: "Wellys",
  options: {
    trustedConnection: true,
    trustServerCertificate: true,
    enableArithAbort: true,
  },
  port: 49172
};

module.exports = config;
