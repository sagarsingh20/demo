import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScolisoisRoutingModule } from './scolisois-routing.module';
import { ScolisoisComponent } from './scolisois.component';


@NgModule({
  declarations: [ScolisoisComponent],
  exports:[ScolisoisComponent],
  imports: [
    CommonModule, ScolisoisRoutingModule
  ]
 
})
export class ScolisoisModule {
  constructor(){
    console.log("SSSS Loaded")
  }
 }
