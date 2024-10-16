import Knex from 'knex';
import { Model } from 'objection';
import knexConfig from '../../knexfile';

const db = Knex(knexConfig);
Model.knex(db);

export default db;