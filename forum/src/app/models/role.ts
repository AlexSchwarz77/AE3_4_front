export class Role {
  roleId: number;
  role: string;

  constructor(data:{
    roleId?: number,
    role?: string
  }){
    this.roleId = data.roleId || 0;
    this.role = data.role || "";
  }
}
