import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CONST } from 'src/app/constants';
import { Post } from 'src/app/models/postmodel';
import { AppState } from 'src/app/store/app.state';
import { addPost } from '../state/post.actions';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserFormComponent implements OnInit {
  postForm!: FormGroup;
  readonly FORMCONST = CONST;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.postForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.minLength(10)]),
    })
  };

  onAddPost() {
    //console.log(this.postForm);

    const post: Post = {
      username: this.postForm.value.username,
      email: this.postForm.value.email,
      phone: this.postForm.value.phone
    };
    this.store.dispatch(addPost({ post }));
    this.postForm.reset();
  }



}
