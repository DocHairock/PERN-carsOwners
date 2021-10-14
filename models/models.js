const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, unique: true },
    password:{type:DataTypes.STRING},
    
    })
    
    const CarOwner = sequelize.define('сarOwner', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name:{ type:DataTypes.STRING },
    age:{ type:DataTypes.INTEGER },
    email: { type: DataTypes.STRING, unique: true },
    
    })
        
    const Car = sequelize.define('сar', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    brand: { type: DataTypes.STRING },
    owner: { type: DataTypes.STRING },
    number: { type: DataTypes.STRING },
    year: { type: DataTypes.INTEGER },
    
    })

CarOwner.hasOne(Car)
Car.belongsTo(CarOwner)

module.exports = {
    User, CarOwner, Car
}
   

    
