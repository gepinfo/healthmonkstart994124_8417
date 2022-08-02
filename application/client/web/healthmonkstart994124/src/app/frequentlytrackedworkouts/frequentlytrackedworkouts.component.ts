import { Component, OnInit } from '@angular/core';
import { FrequentlytrackedworkoutsService } from './frequentlytrackedworkouts.service';

@Component({
  selector: 'app-frequentlytrackedworkouts',
  templateUrl: './frequentlytrackedworkouts.component.html',
  styleUrls: ['./frequentlytrackedworkouts.component.scss'],
})

export class FrequentlytrackedworkoutsComponent implements OnInit {
    public workoutentity = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        workoutentity: '',
    }

    constructor (
        private frequentlytrackedworkoutsService: FrequentlytrackedworkoutsService,
    ) { }

    ngOnInit() {
        this.workoutentity.created_by = sessionStorage.getItem('email') || ''; 
    }
}