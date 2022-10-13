import { configureStore } from "@reduxjs/toolkit";
import PostReducer from "../components/Posts/PostSlice";

export const store = configureStore({
    reducer: {
        posts: PostReducer
    }
})