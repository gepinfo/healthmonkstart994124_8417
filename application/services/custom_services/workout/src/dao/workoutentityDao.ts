import * as mongoose from 'mongoose';
import workoutentityModel from '../models/workoutentity';
import { CustomLogger } from '../config/Logger'


export class workoutentityDao {
    private workoutentity = workoutentityModel;
    constructor() { }
    
    public async GpDelete(workoutentityId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into workoutentityDao.ts: GpDelete');

    

    
    
    
    this.workoutentity.findByIdAndRemove(workoutentityId).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from workoutentityDao.ts: GpDelete');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearch(workoutentityData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into workoutentityDao.ts: GpSearch');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(workoutentityData).forEach(
                            ([key,value]) => {
                                if(value !== ''){
                                    andkey = key;
                                    and_obj[andkey] = value;
                                }
                                else{
                                    orkey = key;
                                    or_obj[orkey] = { $ne: '' }
                                }
                            }
                        );;
    this.workoutentity.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from workoutentityDao.ts: GpSearch');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearchForUpdate(workoutentityData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into workoutentityDao.ts: GpSearchForUpdate');

    

    
    
    
    this.workoutentity.findOneAndUpdate({ _id: workoutentityData._id }, workoutentityData, { new: true }).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from workoutentityDao.ts: GpSearchForUpdate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpUpdate(workoutentityData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into workoutentityDao.ts: GpUpdate');

    

    
    
    
    this.workoutentity.findOneAndUpdate({ _id: workoutentityData._id }, workoutentityData, { new: true }).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from workoutentityDao.ts: GpUpdate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounById(workoutentityId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into workoutentityDao.ts: GpGetNounById');

    

    
    
    
    this.workoutentity.findById(workoutentityId).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from workoutentityDao.ts: GpGetNounById');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into workoutentityDao.ts: GpGetAllValues');

    

    
    
    
    this.workoutentity.find().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from workoutentityDao.ts: GpGetAllValues');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(workoutentityData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into workoutentityDao.ts: GpCreate');

    let temp = new workoutentityModel(workoutentityData);

    
    
    
    temp.save().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from workoutentityDao.ts: GpCreate');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}