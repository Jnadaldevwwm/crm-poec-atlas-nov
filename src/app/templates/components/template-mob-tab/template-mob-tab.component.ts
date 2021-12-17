import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-mob-tab',
  templateUrl: './template-mob-tab.component.html',
  styleUrls: ['./template-mob-tab.component.scss']
})
export class TemplateMobTabComponent implements OnInit {
  @Input() title: string;
  constructor() {
    this.title = 'default title';
  }

  ngOnInit(): void {
  }

}
