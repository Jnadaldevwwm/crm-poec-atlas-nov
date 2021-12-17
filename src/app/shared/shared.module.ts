import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IconsModule } from '../icons/icons.module';
import { TemplatesModule } from '../templates/templates.module';
import { BtnActionComponent } from './components/btn-action/btn-action.component';
import { BtnLinkComponent } from './components/btn-link/btn-link.component';
import { BtnRouteComponent } from './components/btn-route/btn-route.component';
import { LogoComponent } from './components/logo/logo.component';
import { TabLightComponent } from './components/tab-light/tab-light.component';
import { StateDirective } from './directives/state.directive';
import { RolesPipe } from './pipes/roles.pipe';
import { TotalPipe } from './pipes/total.pipe';



@NgModule({
  declarations: [
    TabLightComponent,
    BtnRouteComponent,
    LogoComponent,
    BtnLinkComponent,
    BtnActionComponent,
    TotalPipe,
    StateDirective,
    RolesPipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    TabLightComponent,
    BtnRouteComponent,
    IconsModule,
    TemplatesModule,
    LogoComponent,
    BtnLinkComponent,
    BtnActionComponent,
    TotalPipe,
    StateDirective,
    RolesPipe
  ]
})
export class SharedModule { }
