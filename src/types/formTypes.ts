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
  image: any;
  author_id?: string;
}

export interface IPostPublication {
  author_id: string;
  id: number;
  img_url: string;
  title: string;
  summary: string;
  text: string;
  topic: string;
}
