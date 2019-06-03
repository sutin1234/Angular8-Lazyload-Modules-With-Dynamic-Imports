import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOrderComponent } from './list-order/list-order.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'list-order', component: ListOrderComponent }
];

@NgModule({
  declarations: [ListOrderComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class OrderModule { }
