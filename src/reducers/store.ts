import { configureStore } from '@reduxjs/toolkit';

import musicReducer from './music';
import themeReducer from './theme';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    music: musicReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export default store;
