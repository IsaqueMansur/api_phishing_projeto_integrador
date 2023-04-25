import { Sequelize } from 'sequelize';
import databaseConfig from '../config/database'; import CapturedEmail from '../models/CapturedEmail';

const models = [CapturedEmail];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
