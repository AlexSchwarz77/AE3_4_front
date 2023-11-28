import { ThreadModel } from "./thread-model";
import { User } from "./user";

export class Post {
  postId: number;
  content: string;
  user: User;
  date: Date;
  threadModel: ThreadModel;

  constructor(
    data: {
      postId?: number;
      content?: string;
      user?: User;
      date?: Date;
      threadModel?: ThreadModel;
    } = {}
  ) {
    this.postId = data.postId || 0;
    this.content = data.content || '';
    this.user = data.user || new User();
    this.date = data.date || new Date();
    this.threadModel = data.threadModel || new ThreadModel();
  }
}
