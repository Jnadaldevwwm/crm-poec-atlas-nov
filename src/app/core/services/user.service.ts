import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RoleUser } from '../enums/role-user';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private collection$: BehaviorSubject<User[]> = new BehaviorSubject([new User()]);
  private urlApi = environment.urlApi;
  constructor(private http: HttpClient) {
    this.refreshCollection();
   }
   /**
    * get user
   */

   /**
    * set user
    */

   public refreshCollection(): void{
    this.http.get<User[]>(this.urlApi+'v1/users').subscribe((data) => {
      this.collection$.next(data);
    })
   }

   /**
    * get collection
    */
   public get collection(): Observable<User[]>{
     return this.collection$;
   }
   /**
    * set collection
    */
  //  public set collection(obj: Observable<User[]>){
  //    this.collection$ = obj;
  //  }
   public changeRole(item: User, state: RoleUser): Observable<User>{
    const obj = new User(item);
    obj.grants = state;
    return this.update(obj);
  }
   /**
   * update item in collection
   */
  public update(item: User): Observable<User>{
    return this.http.put<User>(
      `${this.urlApi}v1/users/${item.id}`,
       item
     );
  }

  public getItemsBySearch(expression: string): void{
    const lowerExpression = expression.toLowerCase();
    console.log(lowerExpression);

    this.http.get<User[]>(`${this.urlApi}v1/users`)
      .pipe(
        tap((data)=>{
          console.log(data.filter(result => result.username.toLowerCase().includes(lowerExpression)));
        }),
        map((data)=>{
          return data.filter(item => item.username.toLowerCase().includes(lowerExpression));
        })
      )
      .subscribe((data)=>{
        this.collection$.next(data);
      })
  }

  public getItemsByFilter(expression: string): void{
    const upperExpression = expression.toUpperCase();
    this.http.get<User[]>(`${this.urlApi}v1/users`).pipe(
      tap((data) => {
        console.log(data.filter((item)=> item.grants.toUpperCase() === upperExpression));
      }),
      map((data) => {
        if(upperExpression == "ALL"){
          return data;
        }else{
          return data.filter((item)=> item.grants.toUpperCase() === upperExpression);
        }
      })
    ).subscribe((data)=>{
      this.collection$.next(data);
    })
  }
}
