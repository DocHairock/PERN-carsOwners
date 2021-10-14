const {User} = require('../models/models')
const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const e = require('express')
const jwt = require('jsonwebtoken')


const generateJwt = (id, email) => {
  return  jwt.sign(
            { id, email },
            process.env.SECRET_KEY,
      { expiresIn: '24h' }
  )
}

class UserController {
    async registration(req, res, next) {
        
          const { email, password } = req.body
       if (!email || !password) {
            return next(ApiError.badRequest('некоректні дані'))
        }
       const candidate = await User.findOne({ where: {email} })
        if (candidate) {
            return next(ApiError.badRequest('такий користувач вже існує'))
        }
        const hashPassword = await bcrypt.hash(password, 3)
        const user = await User.create({ email, password: hashPassword })
        const token = generateJwt(user.id, user.email)
        
       return res.json({ user})   
        
        
    }
    async login (req, res) {
        
    }
    async check(req, res, next) {
        const { id } = req.query
        if (!id) {
          return   next(ApiError.badRequest('не заданий id'))
        }
        res.json(id)
    }
}

module.exports = new UserController()