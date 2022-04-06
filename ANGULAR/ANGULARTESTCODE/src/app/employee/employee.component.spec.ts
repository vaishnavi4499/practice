import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthenticationService } from '../authentication.service';

import { EmployeeComponent } from './employee.component';

xdescribe('EmployeeComponent', () => {
  let component: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;

  //creating object for authentication service
  let authService:AuthenticationService

  let h1:HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeComponent ],
      providers: [AuthenticationService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeComponent);
    //getting the instance of authentication service
    authService = TestBed.inject(AuthenticationService);

    //creating instance of h1 present in employee.component.html
    h1=fixture.nativeElement.querySelector('h1');
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should return the value "salary slip"',()=>{
   spyOn(authService,'checkAuthentication').and.returnValue(true);
   let salSlip = component.getSalarySlip();
   //expect(salSlip).toEqual('salary slip');
   expect(authService.checkAuthentication).toHaveBeenCalled();
  });

  it('should assert value for "h1" element to be value of component.salSlip',()=>{
    component.getSalarySlip();
    //manually checking whether the view is updated or not
    fixture.detectChanges();
    expect(h1.textContent).toBe(component.salSlip);
  })
});
