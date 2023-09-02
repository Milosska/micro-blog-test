export interface ILoginForm {
  email: string;
  password: string;
}

export interface IRegisterForm {
  nickname: string;
  type: string;
  email: string;
  password: string;
}

export interface IPostForm {
  title: string;
  summary: string;
  text: string;
  topic: string;
}

export interface IPostPublication extends IPostForm {
  author_id: string;
}
