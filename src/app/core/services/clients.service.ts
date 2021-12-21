import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
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
    * get client id by clientname
    */
    public getgetClientByName(name: string): any{
    let id = 0;
    this.collection.value.forEach(client => {
      if(client.company === name){
        id = client.id;
      }
    })
    return id;
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


  public getItemsBySearch(expression: string): void{
    const lowerExpression = expression.toLowerCase();
    console.log(lowerExpression);

    this.http.get<Client[]>(`${this.urlApi}v1/customers`)
      .pipe(
        tap((data)=>{
          console.log(data.filter(result => result.company.toLowerCase().includes(lowerExpression)));
        }),
        map((data)=>{
          return data.filter(item => item.company.toLowerCase().includes(lowerExpression));
        })
      )
      .subscribe((data)=>{
        this.collection$.next(data);
      })
  }

  public getItemsByFilter(expression: string): void{
    const upperExpression = expression.toUpperCase();
    this.http.get<Client[]>(`${this.urlApi}v1/customers`).pipe(
      tap((data) => {
        console.log(data.filter((item)=> item.active ));
      }),
      map((data) => {
        if(upperExpression == "ALL"){
          return data;
        }else if(upperExpression == "ACTIVE"){
          return data.filter((item)=> item.active);
        } else {
          return data.filter((item)=> !item.active);
        }
      })
    ).subscribe((data)=>{
      this.collection$.next(data);
    })
  }
}
