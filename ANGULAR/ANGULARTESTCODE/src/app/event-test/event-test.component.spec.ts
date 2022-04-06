import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { EventTestComponent } from './event-test.component';

describe('EventTestComponent', () => {
  let component: EventTestComponent;
  let fixture: ComponentFixture<EventTestComponent>;

  //creating an object of debug element so that we can use the methods of debugelement
  let de:DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should "add clicks" when the add button is clicked',()=>{
    const h1=de.query(By.css('h1'));

    // btnaddclick is the id of button in html
    const btn = de.query(By.css('#btnAddClick'));

    //it will trigger the event as if we clicked the button
    btn.triggerEventHandler('click',{});

    //it detects the changes in the h1 element
    fixture.detectChanges();

    //component.countclicks is an integer, but h1.nativeElement.innerText is text so we do parseint
    expect(component.countClicks).toEqual(parseInt(h1.nativeElement.innerText))
  })
});
