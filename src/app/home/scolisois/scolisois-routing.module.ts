import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScolisoisComponent } from './scolisois.component';

const routes: Routes =[
    {
    path:'', component:ScolisoisComponent 
    }
]
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ScolisoisRoutingModule { }