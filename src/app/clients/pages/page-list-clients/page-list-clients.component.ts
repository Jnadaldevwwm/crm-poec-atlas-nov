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
  constructor(private clientService: ClientsService) {
    this.title = 'List clients';
  }

  ngOnInit(): void {
    this.headers = [
      'Id',
      'Lastname',
      'Firstname',
      'Company',
      'Email',
      'Phone',
      'Mobile',
      'Active'
    ];
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
}