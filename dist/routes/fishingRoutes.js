"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _FishingController = require('../controllers/FishingController'); var _FishingController2 = _interopRequireDefault(_FishingController);

const router = new (0, _express.Router)();

router.get('/:email', _FishingController2.default.handleFishing);

exports. default = router;
