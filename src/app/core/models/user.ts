import { RoleUser } from "../enums/role-user";
import { UserI } from "../interfaces/user-i";

export class User implements UserI{
  grants = RoleUser.USER;
  id!: number;
  mail!: string;
 // password!: string;
  username!: string;

  constructor(obj?: Partial<User>){
    if(obj){
      Object.assign(this, obj);
    }
  }
}
