
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const workoutentitySchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   workoutentity: String
})

const workoutentityModel = mongoose.model('workoutentity', workoutentitySchema, 'workoutentity');
export default workoutentityModel;
