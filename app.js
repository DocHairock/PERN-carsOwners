require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./routes/index')

const postgre = require('pg')
const sequelize = require('./db')
const models = require('./models/models')
const errorhandler = require('./middleware/ErrorHandlingMiddleware')


const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)

app.use(errorhandler)

const PORT = process.env.PORT || 5000

async function start() {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`app has been started on port...${PORT}`))
    }
       
     
    catch (e) {
        console.log('server error', e.message)
        process.exit(1)
    }
}

start()
