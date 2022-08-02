import * as express from 'express';
import { Request, Response } from 'express';
import * as Constant from '../config/Constant';
import { ApiAdapter }  from '../config/apiAdapter';
import Controller from '../interface/controller.interface';
import { CustomLogger } from '../config/Logger'

export class workoutentityController implements Controller {
      public router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.delete('/workoutentity/:id', this.GpDelete);
this.router.get('/workoutentity/get/search', this.GpSearch);
this.router.put('/workoutentity/get/update', this.GpSearchForUpdate);
this.router.put('/workoutentity', this.GpUpdate);
this.router.get('/workoutentity/:id', this.GpGetNounById);
this.router.get('/workoutentity', this.GpGetAllValues);
this.router.post('/workoutentity', this.GpCreate);
    }

public GpDelete(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into workoutentityController.ts: GpDelete');
        new ApiAdapter().delete(Constant.WORKOUTURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/web' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from workoutentityController.ts: GpDelete');
        }).catch(err => {
            res.send(err);
        });
    }
public GpSearch(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into workoutentityController.ts: GpSearch');
        new ApiAdapter().get(Constant.WORKOUTURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/web' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from workoutentityController.ts: GpSearch');
        }).catch(err => {
            res.send(err);
        });
    }
public GpSearchForUpdate(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into workoutentityController.ts: GpSearchForUpdate');
        new ApiAdapter().put(Constant.WORKOUTURL + `${req.url}` , req.body)
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/web' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from workoutentityController.ts: GpSearchForUpdate');
        }).catch(err => {
            res.send(err);
        });
    }
public GpUpdate(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into workoutentityController.ts: GpUpdate');
        new ApiAdapter().put(Constant.WORKOUTURL + `${req.url}` , req.body)
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/web' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from workoutentityController.ts: GpUpdate');
        }).catch(err => {
            res.send(err);
        });
    }
public GpGetNounById(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into workoutentityController.ts: GpGetNounById');
        new ApiAdapter().get(Constant.WORKOUTURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/web' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from workoutentityController.ts: GpGetNounById');
        }).catch(err => {
            res.send(err);
        });
    }
public GpGetAllValues(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into workoutentityController.ts: GpGetAllValues');
        new ApiAdapter().get(Constant.WORKOUTURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/web' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from workoutentityController.ts: GpGetAllValues');
        }).catch(err => {
            res.send(err);
        });
    }
public GpCreate(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into workoutentityController.ts: GpCreate');
        new ApiAdapter().post(Constant.WORKOUTURL + `${req.url}` , req.body)
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/web' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from workoutentityController.ts: GpCreate');
        }).catch(err => {
            res.send(err);
        });
    }








}

