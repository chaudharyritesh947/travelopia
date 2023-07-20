const express = require('express');
const router = express.Router();
const {POST_CREATE_ENQUIRY, GET_ENQUIRY} = require('../helper/routes');

const EnquiryController = require('../controllers/enquiry.controller')
// Route: GET /users
router.post(POST_CREATE_ENQUIRY, EnquiryController.saveEnquiry);
router.get(GET_ENQUIRY, EnquiryController.findAll);

module.exports = router;