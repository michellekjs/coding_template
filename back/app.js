const express = require('express')
const app = express()
const port = 9000
const mongoose = require("mongoose");
const MONGODB_URI = "mongodb://localhost:27017/local?readPreference=primary&ssl=false"

const cors = require('cors')
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const testRouter = require("./routes/example")

app.use("/test" , testRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})