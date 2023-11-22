import { User } from "./user";

export class Post {
  postId: number;
  content: string;
  user: User;

  constructor(
    data: {
      postId?: number;
      content?: string;
      user?: User;
    } = {}
  ) {
    this.postId = data.postId || 0;
    this.content = data.content || '';
    this.user = data.user || new User();
  }
}
