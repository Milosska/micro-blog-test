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

export interface IPostPublicationExtended extends IPostPublication {
  users_data: {
    nickname: string;
  };
}

export interface ICommentForm {
  comment: string;
  author_id?: string;
  post_id?: number;
}

export interface IComment {
  id: number;
  created_at: string;
  comment: string;
  author_id: string;
  post_id: number;
  users_data: {
    nickname: string;
  };
}
