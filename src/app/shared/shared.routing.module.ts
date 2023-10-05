import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonTableComponent } from './common-table/common-table.component';
import { GridlineTableComponent } from './gridline-table/gridline-table.component';

const routes: Routes = [
  {path:'table',component:CommonTableComponent,pathMatch:'full'},
  {path:'grid-table',component:GridlineTableComponent,pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
