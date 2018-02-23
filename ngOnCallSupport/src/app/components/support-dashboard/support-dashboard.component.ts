import { Component, OnInit } from '@angular/core';
import { Team } from '../../dataObjects/team';
import { map} from 'rxjs/operators';

import {CrudServiceService} from '../../crud-service.service';

@Component({
  selector: 'app-support-dashboard',
  templateUrl: './support-dashboard.component.html',
  styleUrls: ['./support-dashboard.component.css']
})
export class SupportDashboardComponent implements OnInit {
  teams: Team[] = [];
  constructor(private crudServiceService: CrudServiceService) { }

  ngOnInit() {
    try {
      this.getTeams();
    }catch(e){
      alert("Sorry could not find any teams");
    }
  }

  getTeams() {
    return this.crudServiceService.getOnCallInfo().subscribe( teamsResponse => {
        console.log(teamsResponse.json());
        this.teams = teamsResponse.json();
      }
    );
 
  }
}

