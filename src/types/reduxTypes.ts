import { User } from "@supabase/auth-helpers-nextjs";

export interface IAuthState {
  user: User | null;
  registerMessage: string;
  isLoading: boolean;
}

export interface IRegisterPayload {
  user: User | null;
  message: string;
}
