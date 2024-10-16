import { Model } from "objection";
import db from "../server/db";

class Video extends Model {
    static override get tableName() {
      return 'videos';
    }
  
    static override get jsonSchema() {
      return {
        type: 'object',
        required: ['filename', 'path'],
        properties: {
          id: { type: 'integer' },
          filename: { type: 'string' },
          path: { type: 'string' },
          size: { type: 'integer' },
          created_at: { type: 'string', format: 'date-time' },
        },
      };
    }
  }
  
  Model.knex(db);
  
  export default Video;
