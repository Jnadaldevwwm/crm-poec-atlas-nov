import { RoleUser } from "../enums/role-user";

export interface UserI {
  grants:	RoleUser;
  id:	number;
  mail:	string;
 // password:	string;
  username:	string;
}
