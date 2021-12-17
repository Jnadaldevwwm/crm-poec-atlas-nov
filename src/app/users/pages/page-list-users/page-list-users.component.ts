import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RoleUser } from 'src/app/core/enums/role-user';
import { User } from 'src/app/core/models/user';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-page-list-users',
  templateUrl: './page-list-users.component.html',
  styleUrls: ['./page-list-users.component.scss']
})
export class PageListUsersComponent implements OnInit {
  public title: string;
  public headers!: string[];
  public collection$!: Observable<User[]>;
  public roles = Object.values(RoleUser);
  constructor(private userService: UserService) {
    this.title = 'List users';
  }

  ngOnInit(): void {
    this.headers = [
      'Id',
      'Username',
      'Mail',
      'Rôles'
    ];
    this.collection$ = this.userService.collection;
  }
  public changeState(item: User,event: any ): void{
    const target = event.target as HTMLSelectElement;
    const state = target.value as RoleUser
    this.userService.changeRole(item, state).subscribe((data) => {
      Object.assign(item, data);
    })
  }
}
