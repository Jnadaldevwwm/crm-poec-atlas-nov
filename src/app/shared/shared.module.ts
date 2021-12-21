import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IconsModule } from '../icons/icons.module';
import { TemplatesModule } from '../templates/templates.module';
import { BtnActionComponent } from './components/btn-action/btn-action.component';
import { BtnLinkComponent } from './components/btn-link/btn-link.component';
import { BtnRouteComponent } from './components/btn-route/btn-route.component';
import { FilterComponent } from './components/filter/filter.component';
import { FormSearchComponent } from './components/form-search/form-search.component';
import { LogoComponent } from './components/logo/logo.component';
import { TabLightComponent } from './components/tab-light/tab-light.component';
import { StateDirective } from './directives/state.directive';
import { RolesPipe } from './pipes/roles.pipe';
import { TotalPipe } from './pipes/total.pipe';
import { RoleTransformPipe } from './pipes/role-transform.pipe';



@NgModule({
  declarations: [
    TabLightComponent,
    BtnRouteComponent,
    LogoComponent,
    BtnLinkComponent,
    BtnActionComponent,
    TotalPipe,
    StateDirective,
    RolesPipe,
    FormSearchComponent,
    FilterComponent,
    RoleTransformPipe,

  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    IconsModule
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
    RolesPipe,
    FormSearchComponent,
    FilterComponent,
    RoleTransformPipe,
  ]
})
export class SharedModule { }
