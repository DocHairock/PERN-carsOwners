const { CarOwner } = require('../models/models')
const ApiError = require('../error/ApiError')
class CarOwnerController {
    
    async create(req, res, next) {
        try {
            let { name, age, email } = req.body
            const carOwner = await CarOwner.create({ name, age, email });
            return res.json(carOwner)
        }
        catch (e) {
            next(ApiError.badRequest(e.message))
        }
        
    }
    async getAll (req, res) {
        
      const carOwners = await CarOwner.findAll()
        res.json(carOwners)   
    }
    async getOne (req, res) {
        const carOwner = await CarOwner.findOne()
        res.json(carOwner) 
    }
    
}

module.exports = new CarOwnerController()