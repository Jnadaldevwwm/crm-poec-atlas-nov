import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user';
import { UserService } from 'src/app/core/services/user.service';

/**
 * @description
 * this component is user interface. we did this component to keep possibility to change ui in project
 */
@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss']
})
export class UiComponent implements OnInit {
  /**
   * property open is used in toggle function
   */
  public open!: boolean; // Peut être de type undefined ou boolean.
  public user!: User | null;
  constructor(private userService: UserService) {
    this.open = true;
    this.userService.user$.subscribe((data)=>{
      this.user = data;
    })
  }

  ngOnInit(): void {
   this.user?this.open=true:this.open=false;
  }

  /**
   * @function
   * this function is used to open or close nav
   */
  public toggle(): void {
    this.open = !this.open;
  }
}
