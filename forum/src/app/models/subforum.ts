export class Subforum {
  subForumId: number;
  subName: string;

  constructor(
    data: {
      subForumId?: number;
      subName?: string;
    } = {}
  ) {
    this.subForumId = data.subForumId || 0;
    this.subName = data.subName || '';
  }
}
