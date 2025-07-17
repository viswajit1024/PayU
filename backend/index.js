const express = require('express');
const cors = require("cors");
const rootRouter = require("./routes/index");
const { PORT } = require("./config");

const app = express();

const allowedOrigins = ['https://pay-u-eta.vercel.app'];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};

// ✅ Apply CORS middleware to all routes (including preflight)
app.use(cors(corsOptions));


app.use(express.json());

// ✅ Routes
app.use("/api/v1", rootRouter);

// ✅ Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
