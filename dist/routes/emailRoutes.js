"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _SendEmailController = require('../controllers/SendEmailController'); var _SendEmailController2 = _interopRequireDefault(_SendEmailController);

const router = new (0, _express.Router)();

router.post('/send', _SendEmailController2.default.sendEmail);

exports. default = router;
