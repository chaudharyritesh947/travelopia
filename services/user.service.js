const User = require('../models/userModel');

// Example: Creating a new user
async function saveUser(user){
    try{
        const newUser = new User(user);
        return await newUser.save();
    }
    catch(error){
        throw new Error(error?.message);
    }
}


async function findByMail(user){
    try{
        if(!user?.email){
            throw new Error('Email Not found');
        }
        
        return await User.findOne({'email': user.email})
    }
    catch(error){
        throw new Error(error?.message);
    }
}


exports.saveUser = saveUser;
exports.findByMail = findByMail;