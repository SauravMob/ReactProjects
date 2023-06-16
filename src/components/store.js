import { configureStore } from "@reduxjs/toolkit";
import { commonReducer } from "./commons/store/reducer";
import { userReducer } from "./user/store/reducer";

export default configureStore({
    reducer: {
        commonReducer,
        userReducer
    }
})