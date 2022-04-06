import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],

      //import reactive forms module
      imports:[ReactiveFormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create login component', () => {
    expect(component).toBeTruthy();
  });

  it('[email check]- should check if email is invalid',()=>{
    let email=component.loginForm.controls['email'];
    expect(email.valid).toBeFalsy();
    expect(email.pristine).toBeTruthy();
    email.setValue('abc');
    expect(email.errors).toBeTruthy();
  });

  it('[email-check]- should check correct email address is required',()=>{
    let email = component.loginForm.controls['email'];
    email.setValue('abc@gmail.com')
    expect(email.errors).toBeNull();
  });

  it('[Password checking]- should check password errors',()=>{
     let pswd=component.loginForm.controls['password'];
     expect(pswd.invalid).toBeTruthy();
     pswd.setValue('123');
     expect(pswd.errors).toBeTruthy();
  });

  it('[Password checking]- should check password no errors',()=>{
    let pswd=component.loginForm.controls['password'];
    pswd.setValue('1234567');
    expect(pswd.valid).toBeTruthy();
    expect(pswd.errors).toBeNull();
  });

  it('[form-check]- should check if the form is valid or not if no values are entered',()=>{
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('[form-check]- should check if the form is valid or not when values are entered', () => {
    component.loginForm.controls['email'].setValue('abc@gmail.com');
    component.loginForm.controls['password'].setValue('123456');
    expect(component.loginForm.valid).toBeTruthy();
  });
});
