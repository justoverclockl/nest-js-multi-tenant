export default () => ({
  server: {
    port: process.env.PORT || 9000,
  },
  database: {
    connectionString: process.env.DB_CONNECTION_STRING,
  },
});
