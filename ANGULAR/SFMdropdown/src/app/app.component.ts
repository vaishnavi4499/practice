import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { ReplaySubject, Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';

interface Website {
  id: string;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy{
  title = 'SFM-dropdown';

  protected websites: Website[] = [
    //{ value: 'ItSolutionStuff.com',label: 'ItSolutionStuff.com' },
    { id: '2', name: 'HDTuto.com' },
    { id: '3', name: 'Nicesnippets.com' },
    { id: '4', name: 'Google.com' },
    { id: '5', name: 'laravel.com' },
    { id: '6', name: 'npmjs.com' },
    { id: '7', name: 'Google2.com' },
  ]; 

  public websiteMultiCtrl: FormControl = new FormControl();
  public websiteMultiFilterCtrl: FormControl = new FormControl();

  // gives us the previous value
  public filteredWebsitesMulti: ReplaySubject<any> = new ReplaySubject(1);

  //in order to access this we need to use ngAfterViewInit() lifecycle hook
  @ViewChild('multiSelect', { static: true })
  multiSelect!: MatSelect;

  protected _onDestroy = new Subject();

  constructor() { }

  /**
   * Write code on Method
   *
   * method logical code
   */
  ngOnInit() {
    this.websiteMultiCtrl.setValue(this.websites[1]);
    this.filteredWebsitesMulti.next(this.websites.slice());

    this.websiteMultiFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterWebsiteMulti();
      });
  }

  /**
   * Write code on Method
   *
   * this is called automatically as soon as the view is initialised
   */
  ngAfterViewInit() {
    this.setInitialValue();
  }

  /**
   * Write code on Method
   *
   * method logical code
   */
  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  /**
   * Write code on Method
   *
   * method logical code
   */
  protected setInitialValue() {
    this.filteredWebsitesMulti
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.multiSelect.compareWith = (a: Website, b: Website) => a && b && a.id === b.id;
      });
  }

  /**
   * Write code on Method take(1),
   *
   * method for search funtionality
   */
  protected filterWebsiteMulti() {
    if (!this.websites) {
      return;
    }

    let search = this.websiteMultiFilterCtrl.value;
    if (!search) {
      this.filteredWebsitesMulti.next(this.websites.slice());   
      return;
    } else {
      search = search.toLowerCase();
    }

    this.filteredWebsitesMulti.next(
      this.websites.filter(b => b.name.toLowerCase().indexOf(search) > -1)
    );
  }
}

//

/**
 * instead of id and name --> value and label
 * make it global 
 * sep component  -  user , company components
 * select all feature
 */