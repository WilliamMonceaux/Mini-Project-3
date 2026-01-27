const { DataTypes, Model } = require('sequelize');
let dbConnect = require('../dbConnect');

const sequelizeInstance = dbConnect.Sequelize;

class User extends Model { }

User.init({
    id: {
        type: DataTypes.INTEGER, allowNULL: false, autoIncrement: true, primaryKey: true
    },
    userName: {
        type: DataTypes.STRING, allowNull: false
    },
    email: {
        type: DataTypes.STRING, allowNull: false, unique: true
    },
    address: {
        type: DataTypes.STRING, allowNull: false, 
    },
    password: {
        type: DataTypes.STRING, allowNull: false
    }},
    {
        sequelize: sequelizeInstance, modelName: 'users', 
        timestamps: true, freezeTableName: true
    }
)

module.exports = User;