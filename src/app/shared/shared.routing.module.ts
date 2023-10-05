import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonTableComponent } from './common-table/common-table.component';
import { GridlineTableComponent } from './gridline-table/gridline-table.component';
import { TablePaginationComponent } from './table-pagination/table-pagination.component';
import { TableSortComponent } from './table-sort/table-sort.component';
import { TableFilterComponent } from './table-filter/table-filter.component';

const routes: Routes = [
  {path:'table',component:CommonTableComponent,pathMatch:'full'},
  {path:'grid-table',component:GridlineTableComponent,pathMatch:'full'},
  {path:'table-pagination',component:TablePaginationComponent,pathMatch:'full'},
  {path:'table-sort',component:TableSortComponent,pathMatch:'full'},
  {path:'table-filter',component:TableFilterComponent,pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
