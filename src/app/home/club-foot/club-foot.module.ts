import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClubFootComponent } from './club-foot.component';
import { ClubFootRoutingModule } from './club-foot-routing.module';



@NgModule({
  declarations: [ClubFootComponent],
  exports: [ClubFootComponent],
  imports: [
    CommonModule, ClubFootRoutingModule
  ]
})
export class ClubFootModule { 
  constructor(){
    console.log("CCC Loaded")
  }
}
