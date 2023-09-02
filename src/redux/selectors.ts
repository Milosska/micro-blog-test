import { RootState } from "./store";

export const selectUser = (state: RootState) => state.auth.user;
export const selectRegisterMessage = (state: RootState) =>
  state.auth.registerMessage;
export const selectIsLoading = (state: RootState) => state.auth.isLoading;
