const { name } = require('ejs');
const mongoose = require('mongoose');

//Creating user model
const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    pasword: { type: String, required: true},
    age: { type: Number, required: true}
});

const User = new mongoose.model('User', SchemaUser);

//Controller function 
const createUser = async (firstname, email, password,age ) =>{
    try {
        const user = new User({firstname, email, password, age});
        user.save();
    } catch (error) {
        throw new Error('Something went wrong creating a new user!');
        
    }
};

module.exports = {User, createUser};