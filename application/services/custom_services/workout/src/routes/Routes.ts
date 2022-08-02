import { Request, Response, NextFunction } from "express";
import { workoutentityController } from '../controller/workoutentityController';


export class Routes {
    private workoutentity: workoutentityController = new workoutentityController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/workoutentity/:id').delete(this.workoutentity.GpDelete);
app.route('/workoutentity/get/search').get(this.workoutentity.GpSearch);
app.route('/workoutentity/get/update').put(this.workoutentity.GpSearchForUpdate);
app.route('/workoutentity').put(this.workoutentity.GpUpdate);
app.route('/workoutentity/:id').get(this.workoutentity.GpGetNounById);
app.route('/workoutentity').get(this.workoutentity.GpGetAllValues);
app.route('/workoutentity').post(this.workoutentity.GpCreate);
     }

}