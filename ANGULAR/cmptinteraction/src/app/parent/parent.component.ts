import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  sampleText="sample text";
  parentData="";
  value="";

  constructor() { }

  ngOnInit(): void {
  }
 
  parentToChild(){ 
    this.parentData=this.sampleText;
  }

  child(value: string){
    this.value=value;
  }

}
