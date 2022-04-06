import { Post } from "src/app/models/postmodel";

export interface PostState{
    posts : Post[];

}

export const initialState:PostState ={
    posts:[ 
        {username: 'xyz' , email: 'xyz@gmail.com' , phone: '95000000051'}
    ]
}