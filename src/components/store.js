import { configureStore } from "@reduxjs/toolkit";
import { commonReducer } from "./commons/store/reducer";

export default configureStore({
    reducer: {
        commonReducer
    }
})