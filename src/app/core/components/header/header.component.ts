import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  /**
   * this property is used to activate or desactivate night mode. True by default
   */
  public modeDay: boolean;

  constructor() { this.modeDay = true;}

  ngOnInit(): void {
  }

  /**
   * @function
   * this function is used to toggle day/night mode.
   */
  public toggleMode(): void {

    if (this.modeDay) {
      document.documentElement.style.setProperty(
        '--app-light',
        'rgb(201, 200, 200)'
      );
      document.documentElement.style.setProperty(
        '--app-main-bg-color',
        'rgb(177, 176, 176)'
      );
      document.documentElement.style.setProperty(
        '--app-aside-bg-color',
        'rgb(80, 80, 80)'
      );
      this.modeDay = !this.modeDay;
    } else {
      document.documentElement.style.setProperty(
        '--app-light',
        'rgb(255, 255, 255)'
      );
      document.documentElement.style.setProperty(
        '--app-aside-bg-color',
        'rgb(197, 197, 197)'
      );
      document.documentElement.style.setProperty(
        '--app-main-bg-color',
        'rgb(230, 230, 230)'
      );
      this.modeDay = !this.modeDay;
    }
  }
}
