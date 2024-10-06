require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const routes = require("./routes");
const { sequelize } = require("./models");

// Use cors middleware
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use routes
app.use("/api", routes);

// Database connection
sequelize.sync().then(() => {
  console.log("Database connected");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
