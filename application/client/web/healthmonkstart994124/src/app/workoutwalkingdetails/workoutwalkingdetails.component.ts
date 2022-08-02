import { Component, OnInit } from '@angular/core';
import { WorkoutwalkingdetailsService } from './workoutwalkingdetails.service';

@Component({
  selector: 'app-workoutwalkingdetails',
  templateUrl: './workoutwalkingdetails.component.html',
  styleUrls: ['./workoutwalkingdetails.component.scss'],
})

export class WorkoutwalkingdetailsComponent implements OnInit {
    public workoutentity = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        workoutentity: '',
    }

    constructor (
        private workoutwalkingdetailsService: WorkoutwalkingdetailsService,
    ) { }

    ngOnInit() {
        this.workoutentity.created_by = sessionStorage.getItem('email') || ''; 
    }
}