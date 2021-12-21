import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Input() filters!: string[];
  @Output() filter: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  public sendFilter(item: string, e: Event): void{
    this.filter.emit(item);
    let target = e.target;
    console.log(target);

  }
}
