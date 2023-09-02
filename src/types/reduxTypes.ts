import { User } from "@supabase/auth-helpers-nextjs";

export interface IUser extends User {
  nickname: string;
  type: string;
}

export interface IAuthState {
  user: IUser | null;
  registerMessage: string;
  isLoading: boolean;
}

export interface IRegisterPayload {
  user: IUser | null;
  message: string;
}
