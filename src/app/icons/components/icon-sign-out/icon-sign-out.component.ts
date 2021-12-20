import { Component, OnInit } from '@angular/core';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-icon-sign-out',
  templateUrl: './icon-sign-out.component.html',
  styleUrls: ['./icon-sign-out.component.scss']
})
export class IconSignOutComponent implements OnInit {
  public myIcon = faSignOutAlt;
  constructor() { }

  ngOnInit(): void {
  }

}
