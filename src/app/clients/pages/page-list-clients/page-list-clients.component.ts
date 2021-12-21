import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/core/models/client';
import { ClientsService } from 'src/app/core/services/clients.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss']
})
export class PageListClientsComponent implements OnInit {
  public title: string;
  public headers!: string[];
  public collection!: Client[];
  public filters!: string[];
  constructor(private clientService: ClientsService) {
    this.title = 'List clients';
  }

  ngOnInit(): void {
    this.headers = [
      'Id',
      'Company',
      'Lastname',
      'Firstname',
      'Email',
      'Phone',
      'Mobile',
      'Active'
    ];
    this.filters = ['ALL', 'ACTIVE', 'INACTIVE'];
    this.clientService.collection.subscribe((data) => {
      this.collection = data;
    });
  }
  public changeActive(item: Client): void{
    console.log(item);
    console.log(item.active);
    this.clientService.changeActive(item).subscribe((data)=>{
      Object.assign(item, data);
    })
  }
  public selectItems(expression: string): void{
    this.clientService.getItemsBySearch(expression);
  }

  public filterItems(expression: string): void{
    this.clientService.getItemsByFilter(expression);
  }
}
