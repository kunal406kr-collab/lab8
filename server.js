const express = require("express");
const apiRouter = require("./routes/apiRouter.js")
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

const PORT=process.env.PORT;
const app=express()
app.use(cors())
app.use(express.static(path.join(__dirname)));


app.use('/api',apiRouter)
app.use((req, res) => {
  res.status(404).json({ message: "Endpoint not found. Please check the API documentation." })
})
app.listen(PORT, ()=>{console.log(`Server is listening to ${PORT}`);
})
