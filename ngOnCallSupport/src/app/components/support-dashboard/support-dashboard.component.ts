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
    this.teams = this.getTeams();
  }
  getTeams(): Team[] {
    console.log(this.crudServiceService.getOnCallSnapshot());
    return this.crudServiceService.getOnCallSnapshot();
 
  }
}

