const express = require('express');
const app = express();
const dotenv = require('dotenv');

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
// app.use("/", require("./routes"));

// Server setup
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
