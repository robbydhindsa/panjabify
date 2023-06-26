const express = require('express');
const app = express();
const dotenv = require('dotenv');
const router = express.Router();

dotenv.config( { path: 'server/.env' });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes

router.post('/audio/upload', (req, res) => {
  console.log(req.body); // the uploaded file object
  res.send('Audio uploaded successfully');
});

router.get('/audio/:id', (req, res) => {
  console.log(req.params.id); // the uploaded file object
});

// app.use("/api", audioRoutes);

// Server setup
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

module.exports = router;