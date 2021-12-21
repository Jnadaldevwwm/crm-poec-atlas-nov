import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from 'src/app/core/services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {
  public title: string;
  public headers!: string[];
  public collection$!: Observable<Order[]>;
  public states = Object.values(StateOrder);
  public filters!: string[];
  constructor(private orderService: OrdersService, private router: Router) {
    this.title = 'List orders';
  }

  ngOnInit(): void {
    this.headers = [
      'Action',
      'Client',
      'Type',
      'Description',
      'Unit price',
      'Nb Days',
      'Tva',
      'Total (excl. Taxes)',
      'Total (with Taxes)',
      'State',
    ];
    this.collection$ = this.orderService.collection;
    this.filters = ['ALL', ...this.states];

  }
  public changeState(item: Order,event: any ): void{
    const target = event.target as HTMLSelectElement;
    const state = target.value as StateOrder
    this.orderService.changeState(item, state).subscribe((data) => {
      Object.assign(item, data);
    })
  }
  public goToEdit(id: number): void{
    this.router.navigate(['orders', 'edit',id]);
  }
  public deleteItem(id: number): void{
    this.orderService.delete(id).subscribe((response)=>{
      console.log(response);

    })
  }
  public selectItems(expression: string): void{
    this.orderService.getItemsBySearch(expression);
  }

  public filterItems(expression: string): void{
    this.orderService.getItemsByFilter(expression);
  }

}
