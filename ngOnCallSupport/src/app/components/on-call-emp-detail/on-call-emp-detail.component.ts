import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../../dataObjects/employee';

import {CrudServiceService} from '../../crud-service.service';

@Component({
  selector: 'app-on-call-emp-detail',
  templateUrl: './on-call-emp-detail.component.html',
  styleUrls: ['./on-call-emp-detail.component.css']
})
export class OnCallEmpDetailComponent implements OnInit {
  emp: Employee;
  constructor(private route: ActivatedRoute, private crudServiceService: CrudServiceService) { }

  ngOnInit() {
    this.emp = this.getEmployee();
  }

  getEmployee(): Employee {
    const teamId = this.route.snapshot.paramMap.get('teamId');
    return this.crudServiceService.getOnCallInfoForTeam(teamId);
  }
}
