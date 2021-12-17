import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-light',
  templateUrl: './tab-light.component.html',
  styleUrls: ['./tab-light.component.scss'],
})
export class TabLightComponent implements OnInit {
  @Input() headers!: string[];
  constructor() {
  }

  ngOnInit(): void {

  }

}
