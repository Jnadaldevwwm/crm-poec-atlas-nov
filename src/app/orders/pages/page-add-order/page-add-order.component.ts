import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/core/models/client';
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

  public action(item: {order: Order, client: Client}): void {
    item.order.customerId = item.client.id;
    //console.log(item.order);


    this.orderService.add(item.order).subscribe((data)=>{
      console.log(data);
     this.router.navigate(['orders']);

    })
  }


}
