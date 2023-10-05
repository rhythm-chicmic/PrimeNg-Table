import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:"full"},
  {path:'home',component:DynamicTableComponent,pathMatch:'full'},
  {
    path:'shared',
    loadChildren:() => import('./shared/shared.module').then((m)=>m.SharedModule)
},
{path:'**', redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
