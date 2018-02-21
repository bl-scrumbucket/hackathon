//import { Team } from "./team";

export class Employee {
    constructor(
        public id:string ="",
        public firstName:string="",
        public lastName:string="",
        public phone:number=0,
        public photoUrl:string="",
        public teamId:string=""
        //TODO : Talk to team if this will help
        //public team:Team=new Team(),
    ){}
}