import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() public parentData: any;

  @Output() public sendDataFromChild =new EventEmitter();

  data :any ="sample data";

  constructor() { }

  ngOnInit(): void {
  }

  fireEvent(){
    this.sendDataFromChild.emit(this.data);
  }
}
