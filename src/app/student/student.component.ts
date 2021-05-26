import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'
import { day } from './day';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  Sid: any;
  successMsg : string='added';
  options = [
    {name:'Monday', checked:false},
    {name:'Tuesday',  checked:false},
    {name:'Wednesday', checked:false},
    {name:'Thursday', checked:false},
    {name:'Friday', checked:false},
    {name:'Saturday', checked:false},
    {name:'Sunday', checked:false},   
    
  ] 

  get selectedOptions(){
    return this.options
            .filter(d => d.checked)
             .map(d =>d.name)
  }

  organizationsOptions = [
    {name:'FSG', checked:false},
    {name:'Intellect Academy',  checked:false},
    {name:'school 1', checked:false},
    {name:'school 2', checked:false}
  ] 

  get selectedOrganizations(){
    return this.organizationsOptions
            .filter(o => o.checked)
             .map(o => o.name)
  }
  constructor() { }

  ngOnInit(): void {
  }
 
  register(f: { value: any; }){
    let tab = Object.assign(f.value , {days: this.selectedOptions });
    let final = Object.assign(f.value , {organisationsList: this.selectedOrganizations });
     console.log(this.selectedOptions);
     console.log(this.selectedOrganizations)
     console.log(final);
     ////////////////////
     let data = final;
     this.fs.collection("backend-347db-default-rtdb").doc(this.Sid).set({
       name : final.name,


     })
  }
  

}
