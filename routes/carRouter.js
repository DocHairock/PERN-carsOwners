
const Router = require('express')
const router = new Router()
const CarController = require('../controllers/carController')

router.post('/', CarController.create)
router.get('/',CarController.getAll)
router.get('/:id',CarController.getOne)



module.exports = router