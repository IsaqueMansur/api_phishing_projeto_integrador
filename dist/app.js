"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);

_dotenv2.default.config();
require('./database');
var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _fishingRoutes = require('./routes/fishingRoutes'); var _fishingRoutes2 = _interopRequireDefault(_fishingRoutes);
var _emailRoutes = require('./routes/emailRoutes'); var _emailRoutes2 = _interopRequireDefault(_emailRoutes);

class App {
  constructor() {
    this.app = _express2.default.call(void 0, );
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(_express2.default.urlencoded({ extended: true }));
    this.app.use(_express2.default.json());
  }

  routes() {
    this.app.use('/fishing', _fishingRoutes2.default);
    this.app.use('/email', _emailRoutes2.default);
  }
}

exports. default = new App().app;
