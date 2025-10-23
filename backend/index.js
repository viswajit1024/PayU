const express = require('express');
const cors = require("cors");
const rootRouter = require("./routes/index");
const { PORT } = require("./config");

const app = express();

app.use(cors({
  origin: ['http://localhost:3000', 'https://pay-u-eta.vercel.app'], // add your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));



app.use(express.json());
app.use("/api/v1", rootRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
