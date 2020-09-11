import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';



@NgModule({
  declarations: [AdminComponent],
  exports: [AdminComponent],
  imports: [
    CommonModule, AdminRoutingModule
  ]
})
export class AdminModule { 
  constructor(){
    console.log("AAA Loaded")
  }
}
