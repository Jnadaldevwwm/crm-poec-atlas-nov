import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiComponent } from './components/ui/ui.component';
import { Ui2Component } from './components/ui2/ui2.component';



@NgModule({
  declarations: [
    UiComponent,
    Ui2Component
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UiComponent,
    Ui2Component
  ]
})
export class UiModule { }
