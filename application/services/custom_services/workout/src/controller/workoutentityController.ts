import { Request, Response } from 'express';
import { workoutentityService } from '../service/workoutentityService';
import { CustomLogger } from '../config/Logger'
let workoutentity = new workoutentityService();

export class workoutentityController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
workoutentity.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into workoutentityController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from workoutentityController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
workoutentity.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into workoutentityController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from workoutentityController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
workoutentity.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into workoutentityController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from workoutentityController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
workoutentity.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into workoutentityController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from workoutentityController.ts: GpUpdate');
    })}
public GpGetNounById(req: Request, res: Response) {
workoutentity.GpGetNounById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into workoutentityController.ts: GpGetNounById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from workoutentityController.ts: GpGetNounById');
    })}
public GpGetAllValues(req: Request, res: Response) {
workoutentity.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into workoutentityController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from workoutentityController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
workoutentity.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into workoutentityController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from workoutentityController.ts: GpCreate');
    })}


}