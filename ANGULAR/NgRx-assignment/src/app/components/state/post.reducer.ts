import { initialState } from "./post.state";
import { Action, ActionReducer, createReducer, INIT, on, State, UPDATE } from "@ngrx/store";
import { addPost, deletePost } from "./post.actions";

const _postsReducer = createReducer(
    initialState,
    on(addPost, (state, action) => {

        let post = { ...action.post };
        return {
            ...state,
            posts: [...state.posts, post]
        }
    }),
    on(deletePost, (state, { username }) => {
        const updatedPosts = state.posts.filter((post) => {
            return post.username !== username
        });
        return {
            ...state,
            posts: updatedPosts
        }
    })

)

export function postsReducer(state: { posts: { username: string; email: string; phone: string; }[]; } | undefined, action: Action) {
    return _postsReducer(state, action);
}

export const metaReducer= (reducer :ActionReducer<any>): ActionReducer <any>=>{
    return (state,action) =>{


        if(action.type == INIT|| action.type == UPDATE ){
            const STORAGE_VALUE =localStorage.getItem('state')
            if(STORAGE_VALUE){
                try{
                    return JSON.parse(STORAGE_VALUE)
                }catch{
                    localStorage.removeItem("state")
                }
            }
        }

        const nextState = reducer(state,action)
        localStorage.setItem("state",JSON.stringify(nextState))
        return nextState
        // console.log('state' ,state);
        // console.log('action',action);

        // return reducer(state,action);
    }
}