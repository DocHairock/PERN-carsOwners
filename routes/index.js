const Router = require('express')
const router = new Router()
const carRouter = require('./carRouter')
const carOwnerRouter = require('./carOwnerRouter')
const userRouter = require('./userRouter')

router.use('/user', userRouter)
router.use('/car', carRouter)
router.use('/carOwner',carOwnerRouter)



module.exports = router