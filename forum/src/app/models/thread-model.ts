import { Subforum } from "./subforum";
import { User } from "./user";

export class ThreadModel {
  threadId: number;
  threadTitle: string;
  user: User;
  subforum: Subforum;
  date: Date;
  content: string;

  constructor(
    data: {
      threadId?: number;
      threadTitle?: string;
      user?: User;
      subforum?: Subforum;
      date?: Date;
      content?: string;
    } = {}
  ) {
    this.threadId = data.threadId || 0;
    this.threadTitle = data.threadTitle || '';
    this.user = data.user || new User();
    this.subforum = data.subforum || new Subforum();
    this.date = data.date || new Date();
    this.content = data.content || '';
  }
}
