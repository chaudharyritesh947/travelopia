const UserService = require('../services/user.service');
const { 
    EMAIL_NOT_GIVEN,USER_CREATED, 
    FIELDS_MISSING, 
    USER_NOT_FOUND,
    USER_LOGGED_IN_SUCCESSFULLY,
    WRONG_CREDS,
    FAILURE,
    SUCCESS
   } = require('../helper/constants');
const {sendResponse} = require('../helper/response')
async function saveUser(request, response, next){
try{
    const data = request.body;

    //We can apply some validation here
    if(!data.email){
        throw new Error(EMAIL_NOT_GIVEN);
    }

    const user = await UserService.saveUser(data);
    return response.status(200).send(sendResponse(SUCCESS, user,USER_CREATED))
}
catch(error){
    return response.status(500).send(sendResponse(FAILURE, error, error?.message))
}
}

async function login(request, response, next){
    try{
        const data = request.body;

        //We can apply some validation here
        if(!data?.email || !data?.password){
            throw new Error(FIELDS_MISSING);
        }

        const user = await UserService.findByMail(data);

        if(!user){
            throw new Error(USER_NOT_FOUND);
        }

        if(user.password === data.password){
           return response.status(200).send(sendResponse(SUCCESS, user, USER_LOGGED_IN_SUCCESSFULLY))
        }
        return response.status(400).send(sendResponse(FAILURE, null, WRONG_CREDS));
    }
    catch(error){
        return response.status(500).send(sendResponse(FAILURE, null, error?.message));
    }
}

exports.login = login;
exports.saveUser = saveUser;