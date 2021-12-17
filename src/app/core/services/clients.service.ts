import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private collection$: BehaviorSubject<Client[]> = new BehaviorSubject([new Client()]);
  private urlApi = environment.urlApi;
  constructor(private http: HttpClient) {
    this.refreshCollection();
   }
   /**
    * get collection
    */
   public get collection(): BehaviorSubject<Client[]>{
     return this.collection$;
   }
    /**
    * refresh collection
    */
   public refreshCollection(): void{
    this.http.get<Client[]>(this.urlApi+'v1/customers').subscribe((data) => {
      this.collection$.next(data);
    })
  }


   public changeActive(item: Client): Observable<Client>{
    const obj = new Client(item);
    obj.active = !item.active;
    return this.update(obj);
  }
   /**
   * update item in collection
   */
  public update(item: Client): Observable<Client>{
    return this.http.put<Client>(
      `${this.urlApi}v1/customers/${item.id}`,
       item
     );
  }
}
