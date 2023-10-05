import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { MessageService } from "primeng/api";
import { CustomerService } from 'src/app/customer.service';
import { Customer,Representative } from 'src/app/customer';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss'],
  providers:[MessageService]

})
export class DynamicTableComponent implements OnInit {

  products!: Product[];


  cols!: any[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
      this.productService.getProductsSmall().then(data => this.products = data);

      this.cols = [
          { field: 'code', header: 'Code' },
          { field: 'name', header: 'Name' },
          { field: 'category', header: 'Category' },
          { field: 'quantity', header: 'Quantity' },
          { field: {value:'quantity'}, header: 'Quant11ity' },

          
      ];
  }

}



