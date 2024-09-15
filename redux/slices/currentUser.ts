import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { UserEntity } from "../api/openapi.generated";
import { ReduxState } from "../store";

export interface CurrentUserState {
  user: UserEntity | null;
}

const initialState: CurrentUserState = {
  user: null,
};

export const currentUserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateCurrentUser: (state, action: PayloadAction<UserEntity>) => {
      const update = action.payload;
      state.user = {
        ...state,
        ...update,
      };
    },
    logOutCurrentUser: (state) => {
      state.user = null;
    },
  },
});

function createSelector<T>(
  fn: (d: ReduxState["persistedReducer"]["user"]) => T
) {
  return ({ persistedReducer: { user } }: ReduxState) => fn(user);
}
export const selectCurrentUser = createSelector(
  (user: CurrentUserState) => user
);

export const { logOutCurrentUser, updateCurrentUser } =
  currentUserSlice.actions;

const currentUserReducer = currentUserSlice.reducer;

export default currentUserReducer;
