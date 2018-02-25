import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Employee } from './dataObjects/employee';
import { RequestOptions } from '@angular/http/src/base_request_options';


@Injectable()
export class CrudServiceService {

  constructor(private http:Http, private httpclient:HttpClient) { }

  public getOnCallInfo(){
    return this.http.get('http://hnwvd-omemail01:5000/teams');
    //return this.http.get('./assets/data/onCall.json');
   }

  public getOnCallDetails(id:string){
    console.log("Making call with ID :"+ id);
    return this.http.get('http://hnwvd-omemail01:5000/get/'+id);
    //return this.http.get('./assets/data/onCallDetails.json');
  }

  public addOnCall(employeeId:string,teamId:string){
    var requestJson = {
      "teamId" : teamId,
      "employeeId" : employeeId
    }
    console.log("Making addOnCall with json : "+ JSON.stringify(requestJson)) ;
    return this.http.post('http://hnwvd-omemail01:5000/updateOncall/'+employeeId+'/'+teamId,JSON.stringify(requestJson));
  }

  public searchEmployee(lastNameOfEmployee:string){
    return this.http.get('http://hnwvd-omemail01:5000/search/'+lastNameOfEmployee);


    //return this.http.get('https://uhfxxujepg.execute-api.us-east-1.amazonaws.com/dev/heroes/'+lastNameOfEmployee);
  }
}