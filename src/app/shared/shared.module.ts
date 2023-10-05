import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonTableComponent } from './common-table/common-table.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { SharedRoutingModule } from './shared.routing.module';
import { GridlineTableComponent } from './gridline-table/gridline-table.component';
import { FormsModule } from '@angular/forms';
import { TablePaginationComponent } from './table-pagination/table-pagination.component';
import { TableSortComponent } from './table-sort/table-sort.component';
import { TableFilterComponent } from './table-filter/table-filter.component';
@NgModule({
  declarations: [
    CommonTableComponent,
    GridlineTableComponent,
    TablePaginationComponent,
    TableSortComponent,
    TableFilterComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    SharedRoutingModule,
    FormsModule
  ],
  exports:[
    CommonTableComponent,

  ]
})
export class SharedModule { }
