const Router = require('express')
const router = new Router()
const CarOwnerController= require('../controllers/carOwnerController')

router.post('/',CarOwnerController.create)
router.get('/',CarOwnerController.getAll)
router.get('/:id',CarOwnerController.getOne)



module.exports = router