import { ClientI } from "../interfaces/client-i";

export class Client implements ClientI{
  active = true;
  company!: string;
  firstname!: string;
  id!: number;
  lastname!: string;
  mail!: string;
  mobile!: string;
  notes!: string;
  phone!: string;

  constructor(obj?: Partial<Client>){
    if(obj){
      Object.assign(this, obj);
    }
  }
}
