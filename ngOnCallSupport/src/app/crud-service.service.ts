import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Employee } from './dataObjects/employee';


@Injectable()
export class CrudServiceService {

  constructor(private http:Http) { }

  public getOnCallInfo(){
    return this.http.get('http://hnwvd-omemail01:5000/teams');
    //return this.http.get('./assets/data/onCall.json');
   }

  public getOnCallDetails(id:string){
    console.log("Making call with ID :"+ id);
    return this.http.get('http://hnwvd-omemail01:5000/get/'+id);
    //return this.http.get('./assets/data/onCallDetails.json');
  }

  public addOnCall(employee:Employee){
    var requestJson = {
      teamId : employee.teamId,
      employeeId : employee.employeeId,
    }
    return this.http.put('https://uhfxxujepg.execute-api.us-east-1.amazonaws.com/dev/heroes/'+employee.teamId,requestJson);
  }

  public searchEmployee(lastNameOfEmployee:string){
    return this.http.get('http://hnwvd-omemail01:5000/search/'+lastNameOfEmployee);


    //return this.http.get('https://uhfxxujepg.execute-api.us-east-1.amazonaws.com/dev/heroes/'+lastNameOfEmployee);
  }
}