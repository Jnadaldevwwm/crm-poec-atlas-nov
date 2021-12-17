import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-action',
  templateUrl: './btn-action.component.html',
  styleUrls: ['./btn-action.component.scss']
})
export class BtnActionComponent implements OnInit {
  @Input() texte!: string;
  @Input() action!: string;
  constructor() {

  }

  ngOnInit(): void {
  }

  public testAction(){
    console.log("ALO LE BTN")
  }
}
