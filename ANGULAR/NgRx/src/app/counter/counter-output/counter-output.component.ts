import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { getCounter } from '../state/counter.selectors';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit {

 counter!:number;
 
  counter$!: Observable<{ counter: number; }>;
  
  constructor(private store: Store<{counter :CounterState}>) { }

  ngOnInit(): void {
    this.store.select(getCounter).subscribe((data) =>{
      this.counter=data;

    })
   
    this.counter$ =this.store.select('counter');
  }


}
