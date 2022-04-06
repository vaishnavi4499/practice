import { postsReducer } from "../components/state/post.reducer";
import { PostState } from "../components/state/post.state";

export interface AppState{
    posts :PostState;
}


export const appReducer = {
    posts : postsReducer
}