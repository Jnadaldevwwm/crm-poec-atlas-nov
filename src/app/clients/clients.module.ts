import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ClientsRoutingModule } from './clients-routing.module';
import { PageAddClientComponent } from './pages/page-add-client/page-add-client.component';
import { PageEditClientComponent } from './pages/page-edit-client/page-edit-client.component';
import { PageListClientsComponent } from './pages/page-list-clients/page-list-clients.component';



@NgModule({
  declarations: [
    PageListClientsComponent,
    PageEditClientComponent,
    PageAddClientComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    SharedModule
  ]
})
export class ClientsModule { }
