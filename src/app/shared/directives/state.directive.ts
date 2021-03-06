import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appState]'
})
export class StateDirective {
  @Input() appState!: string;
  @HostBinding('class') tdClassName!: string;
  constructor() {}
  ngOnChanges(): void {
    if(this.appState){
      this.tdClassName = this.appState.toLowerCase();
    }
  }

}
