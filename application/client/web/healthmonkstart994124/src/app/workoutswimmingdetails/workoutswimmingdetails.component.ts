import { Component, OnInit } from '@angular/core';
import { WorkoutswimmingdetailsService } from './workoutswimmingdetails.service';

@Component({
  selector: 'app-workoutswimmingdetails',
  templateUrl: './workoutswimmingdetails.component.html',
  styleUrls: ['./workoutswimmingdetails.component.scss'],
})

export class WorkoutswimmingdetailsComponent implements OnInit {
    public workoutentity = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        workoutentity: '',
    }

    constructor (
        private workoutswimmingdetailsService: WorkoutswimmingdetailsService,
    ) { }

    ngOnInit() {
        this.workoutentity.created_by = sessionStorage.getItem('email') || ''; 
    }
}