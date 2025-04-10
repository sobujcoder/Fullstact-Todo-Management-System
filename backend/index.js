const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const useRouter = require('./Router/Mvc.router');

const app = express();
const port = 3007;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(useRouter);

app.listen(port, () => {
  console.log(`The server is http://localhost:${port}`);
});


