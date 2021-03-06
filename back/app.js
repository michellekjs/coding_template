const express = require('express')
const app = express()
const port = 9000
const cors = require('cors')
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const testRouter = require("./routes/nodedb")

app.use("/test" , testRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})