"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _CapturedEmail = require('../models/CapturedEmail'); var _CapturedEmail2 = _interopRequireDefault(_CapturedEmail);

class UserController {
  async handleFishing(req, res) {
    try {
      const { email } = req.params;
      console.log(email);
      await _CapturedEmail2.default.create({ email });
      return res.json({ response: email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

exports. default = new UserController();
