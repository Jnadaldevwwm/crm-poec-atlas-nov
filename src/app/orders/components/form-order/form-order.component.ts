import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Client } from 'src/app/core/models/client';
import { Order } from 'src/app/core/models/order';
import { ClientsService } from 'src/app/core/services/clients.service';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.scss'],
})
export class FormOrderComponent implements OnInit {
  public form!: FormGroup;
  public states = Object.values(StateOrder);
  public errorMsg = false;
  public clients$: Subject<Client[]>;
  private sub!: Subscription;
  @Input() init!: Order;
  @Output() submited: EventEmitter<Order> = new EventEmitter<Order>();
  constructor(private fb: FormBuilder, private clientsService: ClientsService) {
    this.init = new Order();
    this.clients$ = this.clientsService.collection;
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      customerId: [this.init.customerId],
      adrEt: [this.init.adrEt, Validators.required],
      label: [this.init.label, Validators.required],
      notes: [this.init.notes],
      numberOfDays: [this.init.numberOfDays, Validators.required],
      status: [this.init.status],
      tva: [this.init.tva, Validators.required],
      type: [this.init.type, Validators.required],
      customerCompany: [this.init.customerCompany]
    });
  }
  public register(): void {
    this.errorMsg = false;
    for (const field in this.form.controls) {
      const control = this.form.get(field);
      if (control?.invalid) {
        this.errorMsg = true;
      }
    }
    if (!this.errorMsg) {
      this.submited.emit(this.form.value);
    }
  }
}
