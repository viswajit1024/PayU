// backend/index.js
const express = require('express');
const cors = require("cors");
const rootRouter = require("./routes/index");
const {PORT} = require("./config");

const app = express();

const allowedOrigins = ['https://pay-u-eta.vercel.app'];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));
app.options('/:any(*)', cors()); // ✅ Best if using CORS widely
app.use(express.json());

app.use("/api/v1", rootRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
