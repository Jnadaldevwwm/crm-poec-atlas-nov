import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public token$: BehaviorSubject<string | null> = new BehaviorSubject<string | null>('');
  constructor(private http: HttpClient, private userService: UserService, private router: Router) { }
  /**
   * get passwrod and username to sign in
   */
  public signIn(username: string, password: string): Observable<any>{
    return this.http.get<any>(
      `${environment.urlApi}v1/users/login?username=${username}&password=${password}`
    ).pipe(
      tap((data)=> {
        console.log(data);
        const user = {
          grants: data.grants,
          id: data.id,
          mail: data.mail,
          username: data.username
        }

        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', JSON.stringify(data.token));
        this.token$.next(data.token);
        this.userService.user$.next(new User(user));
        this.router.navigate(['orders']);
      })
    )
  }

  public signOut(): void{
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.token$.next(null);
    this.userService.user$.next(null);
    this.router.navigate(['sign-in']);
  }
}
