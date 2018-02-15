const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const massive = require('massive')
require('dotenv').config()
const ctrl = require('./products_controller')


const app = express()
app.use(bodyParser.json())
app.use(cors())


app.get(`/api/products`, ctrl.getAll)
app.get(`/api/product/:id`, ctrl.getOne)
app.put(`/api/product/:id`, ctrl.update)
app.post(`/api/product`, ctrl.create)
app.delete(`/api/product/:id`, ctrl.delete)


const port = process.env.PORT || 3500

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db)
    app.listen(port, () => {console.log(`Server listening on port ${port}`)})
})