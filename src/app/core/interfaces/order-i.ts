import { StateOrder } from "../enums/state-order";

export interface OrderI {
  adrEt:	number;
  customerId:	number;
  id: number;
  label:	string;
  notes:	string;
  numberOfDays:	number;
  status:	StateOrder;
  tva:	number;
  type:	string;
  customerCompany: string;
}
