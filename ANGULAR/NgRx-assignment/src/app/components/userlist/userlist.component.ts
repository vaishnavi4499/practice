import { Component, OnInit } from '@angular/core';
import { FormArray } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/postmodel';
import { AppState } from 'src/app/store/app.state';
import { deletePost } from '../state/post.actions';

import { getPosts } from '../state/post.selector';


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserListComponent implements OnInit {

 datasource$!: Observable<Post[]>;
  //dataSource$!: any;


  displayedColumns: string[] = ['username', 'email', 'phone','actions'];
  //dataSource : Post[]=[];

  constructor(private store: Store<AppState>) {
    
   }

  ngOnInit(): void {
    this.datasource$ = this.store.select(getPosts)
    //console.log(this.datasource$);
    // this.store.select(getPosts).subscribe((data)=>{
    //    console.log(data);
    // })
  }

  onDeletePost(username: string){
    if(confirm("are you sure you want to delete "))
    this.store.dispatch(deletePost({username}));
  }
}
