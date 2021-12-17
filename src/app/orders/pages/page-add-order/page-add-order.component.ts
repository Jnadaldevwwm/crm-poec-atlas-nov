import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/core/models/order';
import { ClientsService } from 'src/app/core/services/clients.service';
import { OrdersService } from 'src/app/core/services/orders.service';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.scss']
})
export class PageAddOrderComponent implements OnInit {
  constructor(private orderService: OrdersService, private router: Router, private clientService: ClientsService) { }

  ngOnInit(): void {}

  public action(item: Order): void {
    // this.clientService.collection.value.forEach(client => {
    //   if(client.company === item.customerCompany){
    //     item.customerId = client.id;
    //   }
    // });
    console.log(this.clientService.getgetClientByName(item.customerCompany));

    item.customerId = this.clientService.getgetClientByName(item.customerCompany);
    this.orderService.add(item).subscribe((data)=>{
     this.router.navigate(['orders']);
    })
  };


}
