import Sequelize, { Model } from 'sequelize';

export default class CapturedEmail extends Model {
  static init(sequelize) {
    super.init({

      email: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: '',
      },
    }, {
      sequelize,
    });
    return this;
  }
}
