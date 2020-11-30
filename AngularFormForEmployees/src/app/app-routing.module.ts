import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FormComponent} from './form/form.component';
import {AdminComponent} from './admin/admin.component';
import {LoginComponent} from './login/login.component';
import {StatisticsComponent} from './statistics/statistics.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'form', component: FormComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'statistics', component: StatisticsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
