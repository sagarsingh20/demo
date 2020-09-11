import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:"login",
    loadChildren:() => import ('./login/login.module').then(m =>m.LoginModule)
  },
  {
      path:'home',
      loadChildren:() => import ('./home/home.module').then(m=>m.HomeModule)
  },
  {
    path:'edit/:id',
    loadChildren:() => import('./edit/edit.module').then(m=>m.EditModule)
  },
  {
    path:'view/:id',
    loadChildren:() => import('./view/view.module').then(m=>m.ViewModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
