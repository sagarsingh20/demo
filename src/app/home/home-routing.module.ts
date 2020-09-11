import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AuthGuard } from '../guards/auth.guard';


const routes: Routes=[
    { path:'', component: HomeComponent, canActivate:[AuthGuard], 
   children:[
      { path:'dashboard', loadChildren:() => import ('../home/dashboard/dashboard.module').then( m=>m.DashboardModule) },
      { path:'admin', loadChildren:() => import ('../home/admin/admin.module').then(m=>m.AdminModule) },
      { path:'scolisois', loadChildren:() => import ('../home/scolisois/scolisois.module').then(m=>m.ScolisoisModule) },
      { path:'club-foot', loadChildren:() => import ('../home/club-foot/club-foot.module').then(m=>m.ClubFootModule) },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
    }
] 

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class HomeRoutingModule {  }