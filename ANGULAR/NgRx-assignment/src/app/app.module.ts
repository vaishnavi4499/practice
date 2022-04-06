import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './materials/material.module';
import { appReducer } from './store/app.state';
import { UserListComponent } from './components/userlist/userlist.component';
import { UserFormComponent } from './components/userform/userform.component';
import { metaReducer } from './components/state/post.reducer';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserFormComponent,
    NavbarComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MaterialModule,
    StoreModule.forRoot(appReducer,{metaReducers:[metaReducer]}),
    BrowserAnimationsModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

