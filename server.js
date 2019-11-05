const express = require('express')
const bodyParser = require('body-parser') 
const router = require("./network/routes")
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false })) 
router(app)




app.listen(port, () => console.log(`Example app listening on port ${port}!`))