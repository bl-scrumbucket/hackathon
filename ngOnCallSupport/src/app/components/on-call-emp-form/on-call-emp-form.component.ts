import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';


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
  teams: Team[];
  emps:Employee[];
  selectedEmpId : string;
  selectTeamId :string;

  private searchTerms = new Subject<string>();
  constructor(private route: ActivatedRoute, private crudServiceService: CrudServiceService, private location: Location) { }

  search(term: string) {
    console.log("term : "+term);
   // this.searchTerms.next(term);
    this.crudServiceService.searchEmployee(term).subscribe( teamsResponse => {
   // console.log(teamsResponse.json());
    this.emps = teamsResponse.json();
    });
  }

  ngOnInit() {
   this.getTeams();
  }
  getTeams() {
    console.log(this.crudServiceService.getOnCallInfo());
    return this.crudServiceService.getOnCallInfo().subscribe( teamsResponse => {
      console.log(teamsResponse.json());
      this.teams = teamsResponse.json();
      }
    ); 
  }
  goBack(): void {
    this.location.back();
  }

 save(): void {
  // this.crudServiceService.updateHero(this.emp)
  //    .subscribe(() => this.goBack());
  }

  setSelectedEmployee(employeedId:string){
    console.log("Employee ID : "+employeedId);
    this.selectedEmpId = employeedId;
  }
}
