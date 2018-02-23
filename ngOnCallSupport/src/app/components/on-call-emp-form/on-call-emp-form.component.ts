import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Employee } from '../../dataObjects/employee';
import { Team } from '../../dataObjects/team';

import {CrudServiceService} from '../../crud-service.service';

@Component({
  selector: 'app-on-call-emp-form',
  templateUrl: './on-call-emp-form.component.html',
  styleUrls: ['./on-call-emp-form.component.css']
})
export class OnCallEmpFormComponent implements OnInit {
  @Input() emp: Employee;
  teams: Team[] = [];
  constructor(private route: ActivatedRoute, private crudServiceService: CrudServiceService, private location: Location) { }

  ngOnInit() {
    this.teams = this.getTeams();
  }
  getTeams(): Team[] {
    console.log(this.crudServiceService.getOnCallInfo());
    return this.crudServiceService.getOnCallInfo();
 
  }
  goBack(): void {
    this.location.back();
  }

 save(): void {
  // this.crudServiceService.updateHero(this.emp)
  //    .subscribe(() => this.goBack());
  }
}
