import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormComponent} from './form/form.component';
import {AdminComponent} from './admin/admin.component';
import {LoginComponent} from './login/login.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'form', component: FormComponent},
  {path: 'admin', component: AdminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
