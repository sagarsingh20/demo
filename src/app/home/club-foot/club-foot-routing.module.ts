import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClubFootComponent } from './club-foot.component';

const routes: Routes =[
    {
    path:'', component: ClubFootComponent
    }
]
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ClubFootRoutingModule { }