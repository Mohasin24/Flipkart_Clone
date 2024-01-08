const express = require('express');
const cors = require('cors')
const DbConnection = require('./db/DbConnecrtion');
// const DefaultData = require('./DefaultData')
const Router = require('./route/route')
require('dotenv').config()
const app = express();

const PORT = process.env.PORT || 3000   
const URI = process.env.URI

app.use(cors())
app.use(express.json())
app.use("/api/v1", Router)



const start = async()=>{
     try {
          await DbConnection(URI)
          app.listen(PORT,()=>{
               console.log(`Listening on port ${PORT}`)
          })
          // DefaultData()
     } catch (error) {
          console.log(error)
     }
}

start();