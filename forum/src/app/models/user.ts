import { Role } from "./role";

export class User {
  userId: number;
  userName: string;
  password: string;
  role: Array<Role>;
  email: string;

  constructor(data:{
    userId?: number,
    userName?: string,
    password?: string,
    role?: Array<Role>;
    email?: string
  } = {}
  ){
    this.userId = data.userId || 0;
    this.userName = data.userName || "";
    this.password = data.password || "";
    this.role = data.role || [];
    this.email = data.email || "";
  }
}
