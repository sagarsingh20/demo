import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view.component';
import { ViewRoutingModule } from './view-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ViewComponent],
  imports: [
    CommonModule,ViewRoutingModule,ReactiveFormsModule
  ],
  exports:[ViewComponent]
})
export class ViewModule { }
