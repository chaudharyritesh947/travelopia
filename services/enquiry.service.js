const Enquiry = require('../models/enquiryModel');

// Example: Creating a new Enquiry
async function saveTravel(enquiry){
    try{
        const newEnquiry = new Enquiry(enquiry);
        return await newEnquiry.save();
    }
    catch(error){
        throw new Error(error?.message);
    }
}


async function findAll(){
    try{
        return await Enquiry.find({});
    }
    catch(error){
        throw new Error(error?.message);
    }
}


exports.saveTravel = saveTravel;
exports.findAll = findAll;