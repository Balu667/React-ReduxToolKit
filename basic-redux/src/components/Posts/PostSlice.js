import { createSlice, nanoid,current } from "@reduxjs/toolkit";

const initialState = [{
    id:"1",
    title:"ReduxToolkit",
    author:"balu",
    content:"Learning ReduxToolkit",
    reactions:{
        thumbsups:0,
        heart:0,
        coffee:0,
        fire:0
    }
},
{
    id:"2",
    title:"Typescript",
    author:"mahendra",
    content:"Learning Type script",
    reactions:{
        thumbsups:0,
        heart:0,
        coffee:0,
        fire:0
    }
}
]

const postSlice = createSlice({
    name:"posts",
    initialState,
    reducers:{
        PostAdded:(state,action) => {
            // current is used for to see the current state
            console.log(current(state),"state")
            const {payload} = action;
            const data = {...payload,id:nanoid(),reactions:{
                thumbsups:0,
                heart:0,
                coffee:0,
                fire:0
            }}
            state.push(data);
        },
        reactionsAdded: (state,action) => {
            const { postId, reaction } = action.payload;
            const existingPost = state.find(post => post.id === postId);
            if(existingPost){
                existingPost.reactions[reaction] = existingPost.reactions[reaction] + 1;
            }

        }
    }
});



export const {PostAdded, reactionsAdded} = postSlice.actions;

export default postSlice.reducer;