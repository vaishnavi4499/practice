import { state } from "@angular/animations";
import { createFeatureSelector, createSelector, State } from "@ngrx/store";
import { AppState } from "src/app/store/app.state";
import { PostState } from "./post.state";

const getPostsState = createFeatureSelector<PostState>('posts');
export const DATA = (state:AppState) =>state.posts

export const getPosts = createSelector(getPostsState, (state) =>{
    return state.posts;
})