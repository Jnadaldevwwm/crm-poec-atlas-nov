import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateFullWidthComponent } from './components/template-full-width/template-full-width.component';
import { TemplateContainerComponent } from './components/template-container/template-container.component';
import { TemplateMobTabComponent } from './components/template-mob-tab/template-mob-tab.component';



@NgModule({
  declarations: [
    TemplateFullWidthComponent,
    TemplateContainerComponent,
    TemplateMobTabComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TemplateFullWidthComponent,
    TemplateContainerComponent,
    TemplateMobTabComponent
  ]
})
export class TemplatesModule { }
