import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RoleUser } from '../enums/role-user';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private collection$!: Observable<User[]>
  private urlApi = environment.urlApi;
  constructor(private http: HttpClient) {
    this.collection = this.http.get<User[]>('http://localhost:8080/v1/users').pipe(
      tap((data)=>{
        console.log(data);

      })
    );
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
   public set collection(obj: Observable<User[]>){
     this.collection$ = obj;
   }
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
}
