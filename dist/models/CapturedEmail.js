"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class CapturedEmail extends _sequelize.Model {
  static init(sequelize) {
    super.init({

      email: {
        type: _sequelize2.default.STRING,
        allowNull: false,
        defaultValue: '',
      },
    }, {
      sequelize,
    });
    return this;
  }
} exports.default = CapturedEmail;
