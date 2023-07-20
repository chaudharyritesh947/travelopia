function sendResponse(status, data, message='success'){
    return {
        status,
        message,
        data
    }
}

exports.sendResponse = sendResponse;