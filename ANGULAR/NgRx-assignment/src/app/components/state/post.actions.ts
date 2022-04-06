import { createAction, props } from "@ngrx/store";
import { Post } from "src/app/models/postmodel";

//todo action types
export const ADD_POST_ACTION = 'add post';
export const DELETE_POST_ACTION = 'DELETE POST';

export const addPost = createAction(ADD_POST_ACTION,props<{post:Post}>());

export const deletePost = createAction(DELETE_POST_ACTION,props<{username:string}>());

