import { Component, OnInit } from '@angular/core';
import { AfterdetailsswimmingsectionService } from './afterdetailsswimmingsection.service';

@Component({
  selector: 'app-afterdetailsswimmingsection',
  templateUrl: './afterdetailsswimmingsection.component.html',
  styleUrls: ['./afterdetailsswimmingsection.component.scss'],
})

export class AfterdetailsswimmingsectionComponent implements OnInit {
    public workoutentity = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        workoutentity: '',
    }

    constructor (
        private afterdetailsswimmingsectionService: AfterdetailsswimmingsectionService,
    ) { }

    ngOnInit() {
        this.workoutentity.created_by = sessionStorage.getItem('email') || ''; 
    }
}