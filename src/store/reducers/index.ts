import { combineReducers } from "redux";
import { postReducer } from "./post.reducer";
function createRootReducer() {
  return combineReducers({
    posts: postReducer,
  });
}

export const rootReducer = createRootReducer();
export type AppState = ReturnType<typeof rootReducer>;
