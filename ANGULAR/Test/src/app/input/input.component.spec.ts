import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DummyData } from '../mockinterface/projectinterface';

import { InputComponent } from './input.component';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputComponent],
      imports: [ReactiveFormsModule,
        MatButtonModule,
        MatInputModule,
        BrowserAnimationsModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create input component', () => {
    expect(component).toBeTruthy();
  });

  it('should check if form is invalid', () => {
    let name = component.userForm.controls['Name'];
    let projectId = component.userForm.controls['ProjectId'];
    let projectName = component.userForm.controls['ProjectName'];
    let duration = component.userForm.controls['duration'];

    expect(name.pristine).toBeTruthy();
    expect(projectId.pristine).toBeTruthy();
    expect(projectName.pristine).toBeTruthy();
    expect(duration.pristine).toBeTruthy();

    expect(name.errors).toBeTruthy();
    expect(projectId.errors).toBeTruthy();
    expect(projectName.errors).toBeTruthy();
    expect(duration.errors).toBeTruthy();

    expect(name.valid).toBeFalsy();
    expect(projectId.valid).toBeFalsy();
    expect(projectName.valid).toBeFalsy();
    expect(duration.valid).toBeFalsy();

  });

  it('should check if the duration is not correct', () => {
    let duration = component.userForm.controls['duration'];
    duration.setValue(4);
    expect(duration.errors).toBeTruthy();
  });

  it('should check if the duration is valid', () => {
    let duration = component.userForm.controls['duration'];
    duration.setValue(2);
    expect(duration.errors).toBeNull();
  });

  it('should check if the form is valid when NO values are enterted ', () => {
    expect(component.userForm.valid).toBeFalsy();
  });

  it('should check if the form is valid when values are enterted', () => {
    component.userForm.controls['Name'].setValue("david");
    component.userForm.controls['ProjectId'].setValue("1");
    component.userForm.controls['ProjectName'].setValue("Automation");
    component.userForm.controls['duration'].setValue("2");

    expect(component.userForm.valid).toBeTruthy();
  });

  it('should check if the button is disabled when form is invalid', () => {
    fixture.detectChanges()
    expect(component.userForm.valid).toBeFalsy()
    let btn = fixture.debugElement.query(By.css('#button'));
    expect(btn.nativeElement.disabled).toBeTruthy();
  });

  it('should check the form and buttton when values are entered', () => {
    let name = component.userForm.controls['Name'];
    let projectId = component.userForm.controls['ProjectId'];
    let projectName = component.userForm.controls['ProjectName'];
    let duration = component.userForm.controls['duration'];
    fixture.detectChanges()
    let btn = fixture.debugElement.query(By.css('#button'))

    expect(component.userForm.invalid).toBeTruthy();
    expect(btn.nativeElement.disabled).toBeTruthy();


    name.setValue("david")
    projectId.setValue("1")
    projectName.setValue("Automation")
    duration.setValue("2")

    fixture.detectChanges()

    expect(component.userForm.valid).toBeTruthy();
    expect(btn.nativeElement.disabled).toBeFalsy();
  });

  

  it("should call addData method ", ()=>{
     spyOn(component,'addData').and.callThrough();
    let btn = fixture.debugElement.query(By.css('#button'))

    btn.triggerEventHandler('click',{});
    expect(component.addData).toHaveBeenCalled();
 //spyOn(window,'alert')
  });

 it("should have table to display the data", () =>{
  let de= fixture.debugElement.query(By.css('.content-table'))
  let element=de.nativeElement;

  expect(element.innerHTML).toContain("thead");
  expect(element.innerHTML).toContain("tbody");
 });

});
