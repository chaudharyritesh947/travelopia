const EnquiryService = require('../services/enquiry.service');
const {sendResponse} = require('../helper/response');
const {
    SUCCESS, 
    ENQUIRY_ADDED_SUCCESSFULLY,
    FAILURE
} = require('../helper/constants');

async function saveEnquiry(request, response, next){
try{
    const data = request.body;
    //We can apply some validation here

    const enquiry = await EnquiryService.saveTravel(data);
    return response
            .status(200)
            .send(sendResponse(SUCCESS, enquiry, ENQUIRY_ADDED_SUCCESSFULLY))
}
catch(error){
    return response
               .status(500)
               .send(sendResponse(FAILURE, null, error?.message));
    }
}

async function findAll(request, response, next){
    try{
     const enquiry = await EnquiryService.findAll();
     return response
                .status(200)
                .send(sendResponse(SUCCESS, enquiry))
    }
    catch(error){
        return response
                    .status(500)
                    .send(sendResponse(FAILURE, null, error?.message));
 }
}

exports.saveEnquiry = saveEnquiry;
exports.findAll = findAll;