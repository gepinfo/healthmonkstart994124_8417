import { Request, Response } from 'express';
import {workoutentityDao} from '../dao/workoutentityDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let workoutentity = new workoutentityDao();

export class workoutentityService {
    
    constructor() { }
    
    public  GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into workoutentityService.ts: GpDelete')
     let  workoutentityId = req.params.id;
     workoutentity.GpDelete(workoutentityId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from workoutentityService.ts: GpDelete')
         callback(response);
         });
    }
    
public  GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into workoutentityService.ts: GpSearch')
     let  workoutentityData = req.query;
     workoutentity.GpSearch(workoutentityData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from workoutentityService.ts: GpSearch')
         callback(response);
         });
    }
    
public  GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into workoutentityService.ts: GpSearchForUpdate')
     let  workoutentityData = req.body;
     workoutentity.GpSearchForUpdate(workoutentityData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from workoutentityService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
    
public  GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into workoutentityService.ts: GpUpdate')
     let  workoutentityData = req.body;
     workoutentity.GpUpdate(workoutentityData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from workoutentityService.ts: GpUpdate')
         callback(response);
         });
    }
    
public  GpGetNounById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into workoutentityService.ts: GpGetNounById')
     let  workoutentityId = req.params.id;
     workoutentity.GpGetNounById(workoutentityId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from workoutentityService.ts: GpGetNounById')
         callback(response);
         });
    }
    
public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into workoutentityService.ts: GpGetAllValues')
     
     workoutentity.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from workoutentityService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into workoutentityService.ts: GpCreate')
     let  workoutentityData = req.body;
     workoutentity.GpCreate(workoutentityData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from workoutentityService.ts: GpCreate')
         callback(response);
         });
    }
    
    
    
    
}