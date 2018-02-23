//import { Team } from "./team";

export class Employee {
    constructor(
        public teamId:string ="",
        public teamName:string="",
        public employeeId:string="",
        public employeeName:string="",
        public employeePhone:string="",
        public escalation1Name:string="",
        public escalation1Phone:string="",
        public escalation2Name:string="",
        public escalation2Phone:string=""
        
    ){}
}