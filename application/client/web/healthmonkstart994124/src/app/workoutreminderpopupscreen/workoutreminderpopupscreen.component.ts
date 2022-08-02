import { Component, OnInit } from '@angular/core';
import { WorkoutreminderpopupscreenService } from './workoutreminderpopupscreen.service';

@Component({
  selector: 'app-workoutreminderpopupscreen',
  templateUrl: './workoutreminderpopupscreen.component.html',
  styleUrls: ['./workoutreminderpopupscreen.component.scss'],
})

export class WorkoutreminderpopupscreenComponent implements OnInit {
    public workoutentity = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        workoutentity: '',
    }

    constructor (
        private workoutreminderpopupscreenService: WorkoutreminderpopupscreenService,
    ) { }

    ngOnInit() {
        this.workoutentity.created_by = sessionStorage.getItem('email') || ''; 
    }
}