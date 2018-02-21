import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class CrudServiceService {

  constructor(private http:Http) { }

  public getOnCallSnapshot(){
    var sampleJson =
      [{
      "teamId" : "scrumBucket",
      "teamName" : "Scrum Bucket",
      "employeeId" : "smukunda",
      "employeeName" : "Satish Mukundachar",
      "logoUrl":""
    },{
      "teamId" : "storesTeam",
      "teamName" : "Stores Team",
      "employeeId" : "nrevanap",
      "employeeName" : "Nagaraja Revanappa",
      "logoUrl":""
    }]
    return sampleJson;
  }


  public getOnCallInfoForTeam(id:string){
    var sampleJson = {
      "teamId" : "scrumBucket",
      "teamName" : "Scrum Bucket",
      "employeeId" : "smukunda",
      "employeeName" : "Satish Mukundachar",
      "employeePhone" : "6142787271",
      "escalation1Name" : "Doug Coning",
      "escalation1Phone" : "612786757",
      "escalation2Name" : "Ananda Jami",
      "escalation2Phone" : "6142781234"
    }
    return sampleJson;
  }
}
