import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import {CONST} from '../constants'

export interface user {
  Name: string;
  ProjectName: string;
  ProjectId: string;
  duration: string;
 
}

@Component({
  selector: 'app-input',
  templateUrl: './test.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  userForm: FormGroup;
  userList : any;
  data:any;
  readonly FORMCONST= CONST;
   displayedColumns: string[] = ['Name', 'ProjectName', 'ProjectId', 'duration'];
   dataSource!: any[];

  constructor(private formBuilder: FormBuilder) {
    this.userList=[];
   
    this.userForm = formBuilder.group({
      Name: new FormControl('', [Validators.required]),
      ProjectId: new FormControl('', [Validators.required]),
      ProjectName: new FormControl('', [Validators.required]),
      duration: new FormControl('', [Validators.required, Validators.min(1), Validators.max(3)])
    });
  }
  
 
  ngOnInit(): void {
    
  }

  addData(){ 
     // console.log(this.userList);
    this.userList.push(this.userForm.value);
    this.dataSource = [...this.userList];
    //alert("data added successfully");
    this.userForm.reset(); 
  }
  clearAll(){
    
    this.userList = [];
    return this.dataSource=[];
     
  }
}
