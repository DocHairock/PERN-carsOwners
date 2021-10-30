const ApiError = require('../error/ApiError')
const {Car} = require('../models/models')
class CarController {
    async create(req, res, next) {
        try {
            let { brand, owner, number, year } = req.body
            const car = await Car.create({ brand, owner, number, year })
            return res.json(car)
        }
        catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }


    async getAll(req, res) {
        const cars = await Car.findAll()
        res.json(cars)
        
    }
    async getOne (req, res) {
        const car = await Car.findOne()
        res.json(car)
    }
    
}

module.exports = new CarController()