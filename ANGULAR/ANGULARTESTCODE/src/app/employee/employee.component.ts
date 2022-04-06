import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  salSlip:any;
  constructor(private authService:AuthenticationService) {
    this.authService.authenticate();
   }

  ngOnInit(): void {
  }
  getSalarySlip(){
    if(this.authService.checkAuthentication()){
      this.salSlip= "salary slip";
    }
    else
    this.salSlip= "not authenticated";
  }

}
